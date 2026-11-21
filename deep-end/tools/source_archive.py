#!/usr/bin/env python3
"""
Source public-domain imagery for the house from open archives.

Pulls candidates per concept from Wikimedia Commons (public domain / CC0 only),
the Library of Congress Prints & Photographs ("no known restrictions" only) and
the NASA image library (US government work). Every file gets a credit line in
sources/credits.json so the piece can go public later without a rights audit.

Usage: python3 -I source_archive.py <out_dir> [concept ...]
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

OUT = sys.argv[1]
ONLY = set(sys.argv[2:])
UA = "deep-end-collage-study/0.1 (personal art project; contact via github issues)"
CA = "/root/.ccr/ca-bundle.crt"
os.makedirs(OUT, exist_ok=True)
CREDITS_PATH = os.path.join(OUT, "credits.json")
credits = json.load(open(CREDITS_PATH)) if os.path.exists(CREDITS_PATH) else {}

# concept: list of (source, query, how many to keep)
PASS2 = {
    "sharks":       [("commons", "shark Brehm Tierleben", 4), ("commons", "requin gravure", 3), ("commons", "Carcharias illustration", 3)],
    "alice":        [("commons", "Alice Tenniel rabbit hole falling", 4), ("commons", "Tenniel Alice drink me", 3), ("commons", "Alice in Wonderland 1865 Tenniel illustration", 6)],
    "peter-pan":    [("commons", "Peter Pan Bedford 1911", 4), ("commons", "Peter and Wendy 1911 illustration", 4)],
    "coast":        [("loc", "big sur california", 5), ("loc", "monterey california coast", 4), ("commons", "Pacific Coast Highway 1930s", 3)],
    "swimmers":     [("loc", "bathing beach", 6), ("loc", "swimming pool", 4), ("commons", "bathing beauties 1920 photograph", 3)],
    "surfing":      [("loc", "surf board riding", 4), ("commons", "surfing Hawaii 1890 photograph", 4)],
    "amusement":    [("loc", "coney island roller coaster", 6), ("loc", "ferris wheel", 4), ("loc", "merry-go-round", 3)],
    "circus":       [("loc", "circus poster", 6)],
    "theatre":      [("commons", "toy theatre proscenium", 4), ("loc", "theater curtain", 3), ("commons", "stage curtain 19th century lithograph", 3)],
    "rainbow":      [("commons", "rainbow lithograph", 4), ("commons", "Regenbogen Illustration 1900", 3)],
    "hands":        [("commons", "manicule", 4), ("commons", "hand pointing woodcut", 3), ("commons", "Vesalius hand", 3)],
    "sea-monsters": [("commons", "Olaus Magnus sea monster", 4), ("commons", "kraken illustration 19th century", 3)],
    "eyes":         [("commons", "human eye engraving anatomy", 4), ("commons", "eye illustration Encyclopedie", 3)],
    "diver":        [("commons", "scaphandre", 3), ("commons", "deep sea diver 1890s photograph", 3)],
    "keys-doors":   [("commons", "door knocker engraving", 3), ("loc", "doorway", 3)],
    "horses":       [("commons", "horse lithograph 19th century", 4), ("loc", "horse race", 3)],
    "clouds":       [("commons", "cloud atlas 1896 plate", 4)],
    "flowers":      [("commons", "Pierre-Joseph Redoute Les Roses", 4), ("commons", "botanical plate Curtis rose", 3)],
}
CONCEPTS = {
    "sharks":        [("commons", "incategory:\"Shark illustrations\" shark", 6), ("commons", "shark lithograph 1880 Carcharodon", 4), ("commons", "Squalus illustration Bloch", 3)],
    "deep-sea":      [("commons", "incategory:\"Kunstformen der Natur\" Medusae", 6), ("commons", "deep sea fish Valdivia expedition plate", 5), ("commons", "Haeckel Siphonophorae", 3)],
    "titanic":       [("commons", "RMS Titanic 1912 photograph", 6), ("loc", "titanic", 6)],
    "shipwreck":     [("commons", "shipwreck engraving 19th century", 5), ("commons", "Gustave Dore Ancient Mariner", 4)],
    "alice":         [("commons", "incategory:\"Alice's Adventures in Wonderland by John Tenniel\"", 8), ("commons", "Tenniel White Rabbit watch", 3), ("commons", "Tenniel Alice door curtain key", 3)],
    "peter-pan":     [("commons", "F. D. Bedford Peter and Wendy illustration", 6), ("commons", "Captain Hook illustration 1911", 3)],
    "horses":        [("commons", "Muybridge Horse in Motion", 6), ("commons", "horse engraving 19th century anatomy", 4)],
    "coast":         [("loc", "california coast highway", 6), ("commons", "Bixby Creek Bridge 1930s", 3), ("commons", "Big Sur coast postcard", 3)],
    "parks":         [("commons", "Ansel Adams National Park Service mural project", 8), ("loc", "yosemite national park 1900", 4)],
    "moon":          [("nasa", "apollo moon surface", 5), ("nasa", "full moon", 3), ("commons", "moon map 17th century selenography", 3)],
    "stars":         [("commons", "celestial map constellation 17th century", 6), ("nasa", "nebula hubble", 4)],
    "waves":         [("commons", "Hokusai Great Wave", 2), ("commons", "ocean wave woodblock print", 4), ("commons", "wave engraving 19th century sea", 4)],
    "diver":         [("commons", "diving suit 1900 photograph", 5), ("commons", "diving dress engraving", 3)],
    "swimmers":      [("loc", "bathing beach 1920", 6), ("loc", "swimming pool 1920s", 4)],
    "surfing":       [("commons", "surfing Waikiki 1900s photograph", 5), ("loc", "surf riding hawaii", 4)],
    "amusement":     [("loc", "coney island roller coaster", 6), ("loc", "ferris wheel 1900", 4), ("commons", "carousel horse photograph 1900s", 3)],
    "circus":        [("loc", "circus poster strobridge", 6), ("commons", "circus poster 1890s lithograph", 4)],
    "theatre":       [("commons", "paper theatre proscenium 19th century", 5), ("commons", "theatre curtain stage engraving", 4)],
    "clouds":        [("commons", "cloud study painting 19th century", 5), ("commons", "Luke Howard cloud types illustration", 3)],
    "rainbow":       [("commons", "rainbow chromolithograph 19th century", 5), ("commons", "rainbow meteorology engraving", 3)],
    "hands":         [("commons", "pointing hand engraving manicule", 5), ("commons", "hand engraving anatomy 19th century", 4)],
    "keys-doors":    [("commons", "antique key engraving", 5), ("commons", "keyhole illustration", 3), ("commons", "door engraving 19th century", 3)],
    "sea-monsters":  [("commons", "Carta Marina sea monster", 4), ("commons", "sea serpent engraving 19th century", 4)],
    "maps":          [("commons", "Pacific Ocean map 18th century", 4), ("commons", "California island map 17th century", 4)],
    "space":         [("nasa", "earth from space apollo", 4), ("nasa", "astronaut spacewalk", 4)],
    "jellyfish":     [("commons", "Haeckel Discomedusae", 4), ("commons", "jellyfish engraving 19th century", 4)],
    "flowers":       [("commons", "botanical illustration rose 19th century", 5), ("commons", "Redoute rose plate", 3)],
    "eyes":          [("commons", "eye engraving anatomy 19th century", 5), ("commons", "optical illustration eye diagram antique", 3)],
}

PD_RE = re.compile(r"public domain|cc0|pd-|no known copyright|no restrictions", re.I)


def get(url, binary=False, tries=3):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    import ssl
    ctx = ssl.create_default_context(cafile=CA)
    for i in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=40, context=ctx) as r:
                data = r.read()
                return data if binary else json.loads(data.decode("utf-8", "replace"))
        except Exception as e:
            if i == tries - 1:
                print(f"    !! {url[:90]} {e}")
                return None
            time.sleep(16 if "429" in str(e) else 1.5 * (i + 1))


def save(concept, key, url, meta):
    if key in credits:
        return False
    data = get(url, binary=True)
    if not data or len(data) < 8000:
        return False
    ext = ".jpg" if url.lower().split("?")[0].endswith((".jpg", ".jpeg")) else ".png" if url.lower().endswith(".png") else ".jpg"
    d = os.path.join(OUT, concept); os.makedirs(d, exist_ok=True)
    fn = os.path.join(d, key + ext)
    with open(fn, "wb") as f:
        f.write(data)
    credits[key] = {"concept": concept, "file": os.path.relpath(fn, OUT), **meta}
    print(f"    + {concept}/{key}{ext}  [{meta.get('license','?')}] {meta.get('title','')[:60]}")
    return True


def commons(concept, query, want):
    api = ("https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=20"
           f"&gsrsearch={urllib.parse.quote(query)}&prop=imageinfo&iiprop=url|extmetadata|size|mime&iiurlwidth=1280")
    j = get(api)
    if not j or "query" not in j:
        return 0
    got = 0
    for page in j["query"]["pages"].values():
        if got >= want:
            break
        ii = (page.get("imageinfo") or [{}])[0]
        md = ii.get("extmetadata", {})
        lic = md.get("LicenseShortName", {}).get("value", "") or md.get("License", {}).get("value", "")
        if not PD_RE.search(lic) and not PD_RE.search(md.get("Copyrighted", {}).get("value", "")):
            continue
        if ii.get("mime", "") not in ("image/jpeg", "image/png", "image/tiff"):
            continue
        if ii.get("width", 0) < 600:
            continue
        url = ii.get("thumburl") or ii.get("url")
        key = "commons-" + re.sub(r"[^a-z0-9]+", "-", page["title"].replace("File:", "").lower())[:60].strip("-")
        meta = {"source": "Wikimedia Commons", "title": page["title"].replace("File:", ""),
                "author": re.sub(r"<[^>]+>", "", md.get("Artist", {}).get("value", "")).strip()[:120],
                "license": lic, "page": ii.get("descriptionurl", ""), "date": md.get("DateTimeOriginal", {}).get("value", "")[:40]}
        if save(concept, key, url, meta):
            got += 1
        time.sleep(1.3)
    return got


def loc(concept, query, want):
    api = f"https://www.loc.gov/pictures/search/?q={urllib.parse.quote(query)}&fo=json&c=30"
    j = get(api)
    if not j:
        return 0
    got = 0
    for r in j.get("results", []):
        if got >= want:
            break
        item_url = r.get("links", {}).get("item", "")
        if not item_url:
            continue
        item = get(item_url.rstrip("/") + "/?fo=json")
        if not item:
            continue
        it = item.get("item", {})
        rights = " ".join(str(it.get(k, "")) for k in ("rights_advisory", "rights", "rights_information"))
        if "no known restrictions" not in rights.lower():
            continue
        thumb = (r.get("image") or {}).get("full") or ""
        if "_150px" not in thumb:
            continue
        url = thumb.replace("_150px.jpg", "r.jpg")   # the reference-size rendition
        key = "loc-" + re.sub(r"[^a-z0-9]+", "-", str(r.get("pk", ""))).strip("-")[:60]
        meta = {"source": "Library of Congress", "title": str(r.get("title", ""))[:140], "author": str(r.get("creator") or "")[:120],
                "license": "No known restrictions on publication", "page": item_url, "date": str(r.get("created_published_date", ""))[:40]}
        if save(concept, key, url, meta):
            got += 1
        time.sleep(1.0)
    return got


def nasa(concept, query, want):
    api = f"https://images-api.nasa.gov/search?q={urllib.parse.quote(query)}&media_type=image&page_size=30"
    j = get(api)
    if not j:
        return 0
    got = 0
    for item in j.get("collection", {}).get("items", []):
        if got >= want:
            break
        d = (item.get("data") or [{}])[0]
        links = item.get("links") or []
        thumb = next((l["href"] for l in links if l.get("rel") == "preview"), None)
        if not thumb:
            continue
        # the preview is small; ask for the medium rendition
        url = thumb.replace("~thumb", "~medium")
        key = "nasa-" + re.sub(r"[^a-z0-9]+", "-", d.get("nasa_id", "").lower()).strip("-")[:60]
        meta = {"source": "NASA Image and Video Library", "title": d.get("title", "")[:140], "author": d.get("photographer", d.get("center", "NASA"))[:120],
                "license": "Public domain (US government work)", "page": f"https://images.nasa.gov/details/{d.get('nasa_id','')}", "date": d.get("date_created", "")[:10]}
        if save(concept, key, url, meta):
            got += 1
        time.sleep(0.6)
    return got


FETCH = {"commons": commons, "loc": loc, "nasa": nasa}

TABLE = PASS2 if os.environ.get("PASS2") else CONCEPTS
for concept, jobs in TABLE.items():
    if ONLY and concept not in ONLY:
        continue
    print(concept)
    for source, query, want in jobs:
        n = FETCH[source](concept, query, want)
        print(f"  {source}: '{query}' -> {n}")
        json.dump(credits, open(CREDITS_PATH, "w"), indent=1)
        time.sleep(2.0)

json.dump(credits, open(CREDITS_PATH, "w"), indent=1)
print(f"{len(credits)} files credited in {CREDITS_PATH}")
