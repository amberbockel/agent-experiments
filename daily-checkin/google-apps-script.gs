/**
 * Today — Google Docs backup
 * ---------------------------
 * Deploy this once and the journal will quietly mirror your entries into a
 * Google Doc in your own Drive. Nothing else can read it — it runs as you.
 *
 * SETUP (about 3 minutes):
 *   1. Go to https://script.google.com  →  New project.
 *   2. Delete the sample code, paste ALL of this in, and Save.
 *   3. (Optional) change SECRET below to anything you like — just keep a copy.
 *   4. Click  Deploy ▸ New deployment.
 *        • Select type:  Web app
 *        • Execute as:   Me
 *        • Who has access:  Anyone
 *      Deploy, grant the permissions it asks for, and copy the Web app URL
 *      (it ends in /exec).
 *   5. In the journal: ⚙ Settings ▸ "Back up to Google Docs" ▸ paste the URL
 *      and the SECRET, then Connect.
 *
 * The Doc is a one-way mirror of the app: it's rewritten from your entries on
 * each backup, so edit your journal in the app, not in the Doc.
 */

// Must match what you paste into the app's settings.
var SECRET = 'maDekatzp1s7Rakt';

var DOC_NAME = 'Today — journal';

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    if (!body || body.secret !== SECRET) {
      return json_({ error: 'unauthorized' });
    }
    var entries = body.entries || {};
    writeDoc_(getDoc_(), entries);
    return json_({ ok: true, days: Object.keys(entries).length });
  } catch (err) {
    return json_({ error: String(err) });
  }
}

// A friendly note if someone opens the URL in a browser.
function doGet() {
  return json_({ ok: true, service: 'Today backup. POST your entries here.' });
}

function getDoc_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('docId');
  if (id) {
    try { return DocumentApp.openById(id); } catch (e) { /* recreate below */ }
  }
  var doc = DocumentApp.create(DOC_NAME);
  props.setProperty('docId', doc.getId());
  return doc;
}

function writeDoc_(doc, entries) {
  var body = doc.getBody();
  body.clear();
  body.appendParagraph('Today').setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph('A quiet mirror of your journal. Backed up '
    + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MMMM d, yyyy 'at' h:mm a") + '.')
    .setItalic(true);

  var dates = Object.keys(entries).sort();
  if (!dates.length) {
    body.appendParagraph('Nothing here yet.').setItalic(true);
    doc.saveAndClose();
    return;
  }

  dates.forEach(function (d) {
    var e = entries[d] || {};
    body.appendParagraph(friendly_(d)).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    if (e.prompt) { body.appendParagraph(e.prompt).setItalic(true); }
    String(e.text || '').split('\n').forEach(function (line) {
      body.appendParagraph(line);
    });
  });
  doc.saveAndClose();
}

function friendly_(iso) {
  var p = iso.split('-');
  var dt = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  return Utilities.formatDate(dt, Session.getScriptTimeZone(), 'EEEE, MMMM d, yyyy');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
