// Family Jeopardy — Category & Clue Library
// All clues middle-school appropriate, family-safe, fact-checked
// Schema: { id, name (ALL CAPS for board), level, clues: [{ value, clue, answer }] }
// Each category has 15 clues spanning all 5 values (3 per value level)
// so the board generator can pull 5 unique clues per category, multiple times,
// without repeating in a single play session.

window.JEOPARDY_CATEGORIES = [
  // ======================================================================
  // ANIMALS & NATURE
  // ======================================================================
  {
    id: 'animals', name: 'ANIMAL KINGDOM', level: 'easy',
    clues: [
      { value: 100, clue: 'This is the largest mammal on Earth, living in the ocean.', answer: 'What is the blue whale?' },
      { value: 100, clue: 'This African mammal has a long neck and eats leaves up to 18 feet high.', answer: 'What is a giraffe?' },
      { value: 100, clue: 'This is the only mammal that can truly fly.', answer: 'What is a bat?' },
      { value: 200, clue: 'This Australian marsupial carries its baby in a pouch.', answer: 'What is a kangaroo?' },
      { value: 200, clue: 'This animal, sometimes called the "ship of the desert," can drink 30 gallons of water in 13 minutes.', answer: 'What is a camel?' },
      { value: 200, clue: 'This is the fastest land animal on Earth.', answer: 'What is a cheetah?' },
      { value: 300, clue: 'This bear lives only in the Arctic and has translucent fur that looks white.', answer: 'What is a polar bear?' },
      { value: 300, clue: 'This animal, native to China, eats almost only bamboo.', answer: 'What is a giant panda?' },
      { value: 300, clue: 'This horse-like African animal has black and white stripes.', answer: 'What is a zebra?' },
      { value: 400, clue: 'This Australian egg-laying mammal has a duck-like bill.', answer: 'What is a platypus?' },
      { value: 400, clue: 'This eight-armed sea creature has three hearts and blue blood.', answer: 'What is an octopus?' },
      { value: 400, clue: 'This African scavenger has a laugh-like call.', answer: 'What is a hyena?' },
      { value: 500, clue: 'This is the longest snake in the world, found in Southeast Asia.', answer: 'What is the reticulated python?' },
      { value: 500, clue: 'This deep-sea fish has a bioluminescent lure dangling from its head.', answer: 'What is an anglerfish?' },
      { value: 500, clue: 'This rare Madagascar primate has long bony fingers it uses to find grubs.', answer: 'What is an aye-aye?' }
    ]
  },
  {
    id: 'dinosaurs', name: 'DINOSAURS', level: 'easy',
    clues: [
      { value: 100, clue: 'This three-horned dinosaur had a large bony frill.', answer: 'What is Triceratops?' },
      { value: 100, clue: 'Often called "T. rex," this massive predator lived in North America.', answer: 'What is Tyrannosaurus rex?' },
      { value: 100, clue: 'This long-necked plant-eater is one of the most famous "thunder lizards."', answer: 'What is Brontosaurus? (or Brachiosaurus)' },
      { value: 200, clue: 'This dinosaur with rows of bony plates on its back had a brain the size of a walnut.', answer: 'What is Stegosaurus?' },
      { value: 200, clue: 'This swift, smart predator was made famous by the movie Jurassic Park.', answer: 'What is Velociraptor?' },
      { value: 200, clue: 'This duck-billed dinosaur traveled in herds and made trumpet-like sounds.', answer: 'What is a hadrosaur? (Parasaurolophus)' },
      { value: 300, clue: 'This era, the "Age of Reptiles," lasted from 252 to 66 million years ago.', answer: 'What is the Mesozoic Era?' },
      { value: 300, clue: 'Most scientists agree this caused the dinosaurs\' extinction 66 million years ago.', answer: 'What is an asteroid impact?' },
      { value: 300, clue: 'This dinosaur had a thick, dome-like skull it may have used for head-butting.', answer: 'What is Pachycephalosaurus?' },
      { value: 400, clue: 'This flying reptile, technically not a dinosaur, had a wingspan up to 33 feet.', answer: 'What is a Pterodactyl? (or Pteranodon / Quetzalcoatlus)' },
      { value: 400, clue: 'This armored dinosaur had a club at the end of its tail.', answer: 'What is Ankylosaurus?' },
      { value: 400, clue: 'Modern birds are descended from this group of feathered dinosaurs.', answer: 'What are theropods?' },
      { value: 500, clue: 'This Argentinian giant is one of the largest land animals ever discovered.', answer: 'What is Argentinosaurus?' },
      { value: 500, clue: 'This Cretaceous predator may have been larger than T. rex and had a sail on its back.', answer: 'What is Spinosaurus?' },
      { value: 500, clue: 'This famous fossil, found in Montana, is a nearly complete T. rex named after its finder.', answer: 'What is Sue?' }
    ]
  },
  {
    id: 'oceans', name: 'OCEAN LIFE', level: 'easy',
    clues: [
      { value: 100, clue: 'This eight-armed creature can change color to blend in with surroundings.', answer: 'What is an octopus?' },
      { value: 100, clue: 'This animated movie features a clownfish father searching for his son.', answer: 'What is Finding Nemo?' },
      { value: 100, clue: 'This sea creature has five arms and can regrow them if lost.', answer: 'What is a starfish? (or sea star)' },
      { value: 200, clue: 'This is the largest fish in the ocean, despite its scary name.', answer: 'What is a whale shark?' },
      { value: 200, clue: 'This shark has a hammer-shaped head with eyes on the sides.', answer: 'What is a hammerhead shark?' },
      { value: 200, clue: 'These living structures are made of tiny animals called polyps.', answer: 'What are coral reefs?' },
      { value: 300, clue: 'This is the deepest place in the ocean, located in the western Pacific.', answer: 'What is the Mariana Trench?' },
      { value: 300, clue: 'This ocean is the largest body of water on Earth.', answer: 'What is the Pacific Ocean?' },
      { value: 300, clue: 'These intelligent mammals live in pods and use echolocation.', answer: 'What are dolphins?' },
      { value: 400, clue: 'This sea creature looks like a horse but is actually a fish.', answer: 'What is a seahorse?' },
      { value: 400, clue: 'This animal, sometimes called a "sea cow," is a large gentle herbivore.', answer: 'What is a manatee?' },
      { value: 400, clue: 'This large flat fish is a master of camouflage and lives on the seafloor.', answer: 'What is a flounder? (or stingray)' },
      { value: 500, clue: 'This ocean current carries warm water from the Gulf of Mexico to Europe.', answer: 'What is the Gulf Stream?' },
      { value: 500, clue: 'This eel-like fish can produce a powerful electric shock.', answer: 'What is an electric eel?' },
      { value: 500, clue: 'This bioluminescent jellyfish-like creature can technically live forever by reverting to an earlier life stage.', answer: 'What is the immortal jellyfish?' }
    ]
  },

  // ======================================================================
  // SCIENCE & SPACE
  // ======================================================================
  {
    id: 'space', name: 'OUTER SPACE', level: 'medium',
    clues: [
      { value: 100, clue: 'This planet, fourth from the sun, is known as the Red Planet.', answer: 'What is Mars?' },
      { value: 100, clue: 'This is the largest planet in our solar system.', answer: 'What is Jupiter?' },
      { value: 100, clue: 'This star is the closest one to Earth.', answer: 'What is the Sun?' },
      { value: 200, clue: 'In 1969, this American astronaut became the first person to walk on the moon.', answer: 'Who is Neil Armstrong?' },
      { value: 200, clue: 'This ringed planet is the second-largest in our solar system.', answer: 'What is Saturn?' },
      { value: 200, clue: 'This is the name of our galaxy.', answer: 'What is the Milky Way?' },
      { value: 300, clue: 'This dwarf planet was reclassified from being the ninth planet in 2006.', answer: 'What is Pluto?' },
      { value: 300, clue: 'This force keeps planets in orbit around the sun.', answer: 'What is gravity?' },
      { value: 300, clue: 'This is the only planet that rotates on its side.', answer: 'What is Uranus?' },
      { value: 400, clue: 'This NASA telescope, launched in 2021, captures the deepest images of space ever recorded.', answer: 'What is the James Webb Space Telescope?' },
      { value: 400, clue: 'This is the boundary around a black hole beyond which nothing can escape.', answer: 'What is the event horizon?' },
      { value: 400, clue: 'This NASA program landed the first humans on the moon.', answer: 'What is Apollo?' },
      { value: 500, clue: 'This galaxy is on a collision course with the Milky Way.', answer: 'What is Andromeda?' },
      { value: 500, clue: 'This is the only natural satellite of Earth, but Mars has two of these.', answer: 'What is a moon? (Mars has Phobos and Deimos)' },
      { value: 500, clue: 'This famous Polish astronomer proposed that the Earth orbits the Sun, not the other way around.', answer: 'Who is Copernicus?' }
    ]
  },
  {
    id: 'science', name: 'SCIENCE', level: 'medium',
    clues: [
      { value: 100, clue: 'This gas, with the chemical symbol O, makes up about 21% of Earth\'s atmosphere.', answer: 'What is oxygen?' },
      { value: 100, clue: 'This force pulls objects toward the center of the Earth.', answer: 'What is gravity?' },
      { value: 100, clue: 'This is the chemical symbol for water.', answer: 'What is H2O?' },
      { value: 200, clue: 'This process is how plants make food using sunlight.', answer: 'What is photosynthesis?' },
      { value: 200, clue: 'This is the smallest unit of an element that retains its properties.', answer: 'What is an atom?' },
      { value: 200, clue: 'These are the building blocks of life, found in every cell.', answer: 'What is DNA?' },
      { value: 300, clue: 'This famous physicist developed the theory of relativity and E=mc².', answer: 'Who is Albert Einstein?' },
      { value: 300, clue: 'This English scientist described the laws of motion and gravity.', answer: 'Who is Isaac Newton?' },
      { value: 300, clue: 'This is the unit used to measure electric current.', answer: 'What is an ampere? (or amp)' },
      { value: 400, clue: 'This Polish-French scientist won Nobel Prizes in both physics and chemistry.', answer: 'Who is Marie Curie?' },
      { value: 400, clue: 'This is the closest planet to absolute zero ever recorded by humans.', answer: 'What is a Bose-Einstein condensate? (or just absolute zero ~ -273.15°C)' },
      { value: 400, clue: 'This rock-classifying scientist created a famous chart of all the elements.', answer: 'Who is Mendeleev?' },
      { value: 500, clue: 'This number, named after a Greek letter, equals the ratio of a circle\'s circumference to diameter.', answer: 'What is pi?' },
      { value: 500, clue: 'This British naturalist proposed the theory of evolution by natural selection.', answer: 'Who is Charles Darwin?' },
      { value: 500, clue: 'This 4-letter symbol represents the human X-shaped molecule that holds genetic instructions.', answer: 'What is DNA?' }
    ]
  },
  {
    id: 'human-body', name: 'THE HUMAN BODY', level: 'easy',
    clues: [
      { value: 100, clue: 'This organ pumps blood through your body.', answer: 'What is the heart?' },
      { value: 100, clue: 'You have 206 of these in an adult human body.', answer: 'What are bones?' },
      { value: 100, clue: 'These two organs help you breathe.', answer: 'What are lungs?' },
      { value: 200, clue: 'This is the largest organ in the human body.', answer: 'What is skin?' },
      { value: 200, clue: 'This system controls thoughts, movement, and senses.', answer: 'What is the nervous system?' },
      { value: 200, clue: 'These red and white cells flow through your veins.', answer: 'What are blood cells?' },
      { value: 300, clue: 'This part of the eye is the colored ring around the pupil.', answer: 'What is the iris?' },
      { value: 300, clue: 'This is the longest bone in the human body.', answer: 'What is the femur? (or thigh bone)' },
      { value: 300, clue: 'This is the medical term for the kneecap.', answer: 'What is the patella?' },
      { value: 400, clue: 'This organ filters waste from your blood and produces urine.', answer: 'What are the kidneys?' },
      { value: 400, clue: 'These three small bones inside your ear are the smallest in the body.', answer: 'What are the hammer, anvil, and stirrup? (malleus, incus, stapes)' },
      { value: 400, clue: 'This is the largest internal organ in the human body.', answer: 'What is the liver?' },
      { value: 500, clue: 'This 5-letter word is the name of the bone-marrow material that makes blood cells.', answer: 'What is marrow?' },
      { value: 500, clue: 'These tiny structures inside cells are called the "powerhouses" of the cell.', answer: 'What are mitochondria?' },
      { value: 500, clue: 'This is the longest nerve in the human body, running from the lower back down each leg.', answer: 'What is the sciatic nerve?' }
    ]
  },

  // ======================================================================
  // GEOGRAPHY
  // ======================================================================
  {
    id: 'world-geo', name: 'WORLD GEOGRAPHY', level: 'medium',
    clues: [
      { value: 100, clue: 'This longest river in the world flows through Egypt.', answer: 'What is the Nile?' },
      { value: 100, clue: 'This European country is shaped like a boot.', answer: 'What is Italy?' },
      { value: 100, clue: 'This is the smallest continent.', answer: 'What is Australia?' },
      { value: 200, clue: 'This Asian wall, built over 2,000 years ago, stretches across northern China.', answer: 'What is the Great Wall of China?' },
      { value: 200, clue: 'This is the smallest country in the world by area.', answer: 'What is Vatican City?' },
      { value: 200, clue: 'This South American country is home to most of the Amazon rainforest.', answer: 'What is Brazil?' },
      { value: 300, clue: 'This Russian lake is the deepest in the world.', answer: 'What is Lake Baikal?' },
      { value: 300, clue: 'This is the longest mountain range in the world, running down South America.', answer: 'What are the Andes?' },
      { value: 300, clue: 'This is the largest desert in the world.', answer: 'What is the Sahara? (or Antarctica if cold deserts count)' },
      { value: 400, clue: 'This is the highest mountain peak above sea level.', answer: 'What is Mount Everest?' },
      { value: 400, clue: 'This African nation is the most populous on the continent.', answer: 'What is Nigeria?' },
      { value: 400, clue: 'This is the largest island in the world.', answer: 'What is Greenland?' },
      { value: 500, clue: 'This active volcano in Italy buried the city of Pompeii in 79 AD.', answer: 'What is Mount Vesuvius?' },
      { value: 500, clue: 'This narrow strip of water connects the Mediterranean Sea to the Red Sea.', answer: 'What is the Suez Canal?' },
      { value: 500, clue: 'This is the only country that occupies an entire continent.', answer: 'What is Australia?' }
    ]
  },
  {
    id: 'capitals', name: 'WORLD CAPITALS', level: 'medium',
    clues: [
      { value: 100, clue: 'This is the capital of France.', answer: 'What is Paris?' },
      { value: 100, clue: 'This is the capital of the United Kingdom.', answer: 'What is London?' },
      { value: 100, clue: 'This is the capital of Japan.', answer: 'What is Tokyo?' },
      { value: 200, clue: 'This is the capital of Egypt.', answer: 'What is Cairo?' },
      { value: 200, clue: 'This is the capital of Russia.', answer: 'What is Moscow?' },
      { value: 200, clue: 'This is the capital of Italy.', answer: 'What is Rome?' },
      { value: 300, clue: 'This is the capital of Australia (hint: not Sydney).', answer: 'What is Canberra?' },
      { value: 300, clue: 'This is the capital of Canada (hint: not Toronto).', answer: 'What is Ottawa?' },
      { value: 300, clue: 'This is the capital of Spain.', answer: 'What is Madrid?' },
      { value: 400, clue: 'This is the capital of Brazil (hint: not Rio).', answer: 'What is Brasília?' },
      { value: 400, clue: 'This is the capital of Turkey (hint: not Istanbul).', answer: 'What is Ankara?' },
      { value: 400, clue: 'This is the capital of Argentina.', answer: 'What is Buenos Aires?' },
      { value: 500, clue: 'This is one of three capitals of South Africa, where the executive branch sits.', answer: 'What is Pretoria?' },
      { value: 500, clue: 'This is the capital of New Zealand.', answer: 'What is Wellington?' },
      { value: 500, clue: 'This Mongolian capital city has a name meaning "red hero."', answer: 'What is Ulaanbaatar?' }
    ]
  },
  {
    id: 'us-states', name: 'U.S. STATES', level: 'easy',
    clues: [
      { value: 100, clue: 'This state, the largest by area, was purchased from Russia in 1867.', answer: 'What is Alaska?' },
      { value: 100, clue: 'This island state is the only one made entirely of islands.', answer: 'What is Hawaii?' },
      { value: 100, clue: 'This state is famous for its Hollywood film industry.', answer: 'What is California?' },
      { value: 200, clue: 'This state\'s capital is Boston, and Concord lives there too.', answer: 'What is Massachusetts?' },
      { value: 200, clue: 'This is the smallest U.S. state by area.', answer: 'What is Rhode Island?' },
      { value: 200, clue: 'This Southern state is shaped like a boot and known for jazz and Mardi Gras.', answer: 'What is Louisiana?' },
      { value: 300, clue: 'This Midwestern state is sometimes called the "Sunflower State."', answer: 'What is Kansas?' },
      { value: 300, clue: 'This Western state is home to the Grand Canyon.', answer: 'What is Arizona?' },
      { value: 300, clue: 'This New England state is home to Mount Washington and the Old Man of the Mountain (formerly).', answer: 'What is New Hampshire?' },
      { value: 400, clue: 'This is the only U.S. state that begins with two vowels.', answer: 'What is Iowa?' },
      { value: 400, clue: 'This Pacific Northwest state\'s capital is Olympia.', answer: 'What is Washington?' },
      { value: 400, clue: 'This Great Lakes state is shaped like a mitten.', answer: 'What is Michigan?' },
      { value: 500, clue: 'This is the only U.S. state with a one-syllable name.', answer: 'What is Maine?' },
      { value: 500, clue: 'These four states meet at a single point in the American Southwest.', answer: 'What are Utah, Colorado, Arizona, and New Mexico? (the Four Corners)' },
      { value: 500, clue: 'This state\'s capital is Pierre, often mispronounced.', answer: 'What is South Dakota?' }
    ]
  },

  // ======================================================================
  // HISTORY
  // ======================================================================
  {
    id: 'us-history', name: 'U.S. HISTORY', level: 'medium',
    clues: [
      { value: 100, clue: 'This U.S. president signed the Emancipation Proclamation in 1863.', answer: 'Who is Abraham Lincoln?' },
      { value: 100, clue: 'This 1776 document declared the colonies free from British rule.', answer: 'What is the Declaration of Independence?' },
      { value: 100, clue: 'This was the first U.S. president.', answer: 'Who is George Washington?' },
      { value: 200, clue: 'This civil rights leader gave the "I Have a Dream" speech in 1963.', answer: 'Who is Martin Luther King Jr.?' },
      { value: 200, clue: 'This 1929 event marked the start of the Great Depression.', answer: 'What is the Stock Market Crash?' },
      { value: 200, clue: 'This person refused to give up her bus seat in Montgomery in 1955.', answer: 'Who is Rosa Parks?' },
      { value: 300, clue: 'This first African American Supreme Court Justice was appointed in 1967.', answer: 'Who is Thurgood Marshall?' },
      { value: 300, clue: 'This 1969 event in upstate New York drew 400,000 people for a music festival.', answer: 'What is Woodstock?' },
      { value: 300, clue: 'These 13 colonies fought a war from 1775–1783 to gain independence.', answer: 'What was the American Revolution?' },
      { value: 400, clue: 'This document, signed in 1787, is the supreme law of the United States.', answer: 'What is the Constitution?' },
      { value: 400, clue: 'This 1803 purchase doubled the size of the United States.', answer: 'What is the Louisiana Purchase?' },
      { value: 400, clue: 'This act, passed in 1964, banned discrimination based on race, color, religion, sex, or origin.', answer: 'What is the Civil Rights Act?' },
      { value: 500, clue: 'This explorer, hired by Spain, never actually reached the mainland of the future U.S.', answer: 'Who is Christopher Columbus?' },
      { value: 500, clue: 'This pioneering airwoman disappeared during a 1937 attempt to fly around the world.', answer: 'Who is Amelia Earhart?' },
      { value: 500, clue: 'This Massachusetts site of the first Thanksgiving feast in 1621 is now a tourist town.', answer: 'What is Plymouth?' }
    ]
  },
  {
    id: 'world-history', name: 'WORLD HISTORY', level: 'hard',
    clues: [
      { value: 100, clue: 'This wall, built over 2,000 years ago, runs across northern China.', answer: 'What is the Great Wall of China?' },
      { value: 100, clue: 'These ancient Egyptian tombs were built for pharaohs at Giza.', answer: 'What are the pyramids?' },
      { value: 100, clue: 'This Italian explorer reached the Americas in 1492 sailing for Spain.', answer: 'Who is Christopher Columbus?' },
      { value: 200, clue: 'This Macedonian king conquered most of the known world before dying at age 32.', answer: 'Who is Alexander the Great?' },
      { value: 200, clue: 'This wall divided a German city from 1961 until it fell in 1989.', answer: 'What is the Berlin Wall?' },
      { value: 200, clue: 'This 14-year-old French girl led the French army to victory at Orléans in 1429.', answer: 'Who is Joan of Arc?' },
      { value: 300, clue: 'This Indian leader led nonviolent resistance against British rule.', answer: 'Who is Mahatma Gandhi?' },
      { value: 300, clue: 'This Japanese city was hit by the first atomic bomb in 1945.', answer: 'What is Hiroshima?' },
      { value: 300, clue: 'This Russian royal family was executed in 1918 during the revolution.', answer: 'Who are the Romanovs?' },
      { value: 400, clue: 'This 1804 leader of Haiti\'s independence was the first to defeat a European colonial power in a slave-led revolution.', answer: 'Who is Toussaint L\'Ouverture?' },
      { value: 400, clue: 'These ancient civilizations built ziggurats in Mesopotamia.', answer: 'Who are the Sumerians? (or Babylonians)' },
      { value: 400, clue: 'This first female pharaoh of Egypt is famous for her trade expeditions and beard.', answer: 'Who is Hatshepsut?' },
      { value: 500, clue: 'This Empress of China rose from concubine to ruler in the 19th century.', answer: 'Who is Empress Cixi? (or Wu Zetian for 7th century)' },
      { value: 500, clue: 'This South African leader was imprisoned for 27 years before becoming president.', answer: 'Who is Nelson Mandela?' },
      { value: 500, clue: 'This Mongol leader founded the largest contiguous empire in history.', answer: 'Who is Genghis Khan?' }
    ]
  },

  // ======================================================================
  // ARTS & ENTERTAINMENT
  // ======================================================================
  {
    id: 'movies', name: 'MOVIES', level: 'easy',
    clues: [
      { value: 100, clue: 'In Frozen, this snowman dreams of summer and warm hugs.', answer: 'Who is Olaf?' },
      { value: 100, clue: 'In Toy Story, this cowboy doll is Andy\'s favorite toy.', answer: 'Who is Woody?' },
      { value: 100, clue: 'In Finding Nemo, this forgetful blue tang fish helps Marlin.', answer: 'Who is Dory?' },
      { value: 200, clue: 'This Pixar film features a rat who dreams of becoming a chef in Paris.', answer: 'What is Ratatouille?' },
      { value: 200, clue: 'In Star Wars, this small green Jedi master trained Luke Skywalker.', answer: 'Who is Yoda?' },
      { value: 200, clue: 'This Disney film is about a lion cub named Simba who must reclaim his throne.', answer: 'What is The Lion King?' },
      { value: 300, clue: 'This Studio Ghibli film features a girl named Chihiro trapped in a bathhouse for spirits.', answer: 'What is Spirited Away?' },
      { value: 300, clue: 'In The Princess Bride, this Spaniard seeks revenge on the six-fingered man.', answer: 'Who is Inigo Montoya?' },
      { value: 300, clue: 'This 1939 movie features a girl named Dorothy who travels to Oz.', answer: 'What is The Wizard of Oz?' },
      { value: 400, clue: 'This 2001 film, the first in a trilogy, takes place in Middle-earth.', answer: 'What is The Lord of the Rings: The Fellowship of the Ring?' },
      { value: 400, clue: 'This 2019 Pixar film features Tony, Pizza Planet, and infinity and beyond.', answer: 'What is Toy Story 4?' },
      { value: 400, clue: 'This 2017 Pixar film follows Miguel into the Land of the Dead during Día de los Muertos.', answer: 'What is Coco?' },
      { value: 500, clue: 'This 1985 Robert Zemeckis film features a DeLorean time machine and a Flux Capacitor.', answer: 'What is Back to the Future?' },
      { value: 500, clue: 'This 1993 Spielberg film brought dinosaurs back to life on a fictional island.', answer: 'What is Jurassic Park?' },
      { value: 500, clue: 'This 1937 Disney film was the first full-length animated movie ever made.', answer: 'What is Snow White and the Seven Dwarfs?' }
    ]
  },
  {
    id: 'disney', name: 'DISNEY MAGIC', level: 'easy',
    clues: [
      { value: 100, clue: 'In The Little Mermaid, this is the name of Ariel\'s crab friend.', answer: 'Who is Sebastian?' },
      { value: 100, clue: 'This Disney princess has long magical hair that glows when she sings.', answer: 'Who is Rapunzel?' },
      { value: 100, clue: 'This Disney character is a mouse who started it all, debuting in 1928.', answer: 'Who is Mickey Mouse?' },
      { value: 200, clue: 'In Encanto, this is the name of the magical mountain town where the Madrigals live.', answer: 'What is the Encanto?' },
      { value: 200, clue: 'In Frozen, this princess has ice powers and rules Arendelle.', answer: 'Who is Elsa?' },
      { value: 200, clue: 'In Moana, this demigod with magical tattoos joins her ocean journey.', answer: 'Who is Maui?' },
      { value: 300, clue: 'In Encanto, this Madrigal sister has super-human strength.', answer: 'Who is Luisa?' },
      { value: 300, clue: 'This Disney villain wants to use the puppies in 101 Dalmatians for a fur coat.', answer: 'Who is Cruella de Vil?' },
      { value: 300, clue: 'This is the magical kingdom Aurora is from in Sleeping Beauty.', answer: 'What is the Moors? (or simply the kingdom)' },
      { value: 400, clue: 'In Beauty and the Beast, this clock character is the head of the household.', answer: 'Who is Cogsworth?' },
      { value: 400, clue: 'This Disney film features a Polynesian girl who sails across the ocean to save her island.', answer: 'What is Moana?' },
      { value: 400, clue: 'This Disney park, the second to open, is in Anaheim, California.', answer: 'What is Disneyland?' },
      { value: 500, clue: 'This animator and entrepreneur founded the Disney company.', answer: 'Who is Walt Disney?' },
      { value: 500, clue: 'In Encanto, this song about an unmentioned uncle became a 2022 hit.', answer: 'What is "We Don\'t Talk About Bruno"?' },
      { value: 500, clue: 'This Disney villain is the sea witch in The Little Mermaid.', answer: 'Who is Ursula?' }
    ]
  },
  {
    id: 'harry-potter', name: 'HARRY POTTER', level: 'medium',
    clues: [
      { value: 100, clue: 'This is the name of the wizarding school Harry attends.', answer: 'What is Hogwarts?' },
      { value: 100, clue: 'This Hogwarts house values bravery and is symbolized by a lion.', answer: 'What is Gryffindor?' },
      { value: 100, clue: 'This bushy-haired know-it-all is one of Harry\'s best friends.', answer: 'Who is Hermione Granger?' },
      { value: 200, clue: 'This dark wizard, often called "He-Who-Must-Not-Be-Named," is Harry\'s archenemy.', answer: 'Who is Voldemort?' },
      { value: 200, clue: 'This sport, played on flying broomsticks, has Beaters, Chasers, Keepers, and Seekers.', answer: 'What is Quidditch?' },
      { value: 200, clue: 'This is the name of Harry\'s pet snowy owl.', answer: 'Who is Hedwig?' },
      { value: 300, clue: 'These three magical objects grant their owner mastery over death.', answer: 'What are the Deathly Hallows?' },
      { value: 300, clue: 'These magical creatures pull the carriages to Hogwarts and only seen by those who have witnessed death.', answer: 'What are Thestrals?' },
      { value: 300, clue: 'This magical bank is run by goblins.', answer: 'What is Gringotts?' },
      { value: 400, clue: 'This headmaster of Hogwarts has a phoenix named Fawkes.', answer: 'Who is Albus Dumbledore?' },
      { value: 400, clue: 'These books and films feature six magical objects holding fragments of Voldemort\'s soul.', answer: 'What are Horcruxes?' },
      { value: 400, clue: 'This werewolf is one of Harry\'s favorite teachers and a friend of his father.', answer: 'Who is Remus Lupin?' },
      { value: 500, clue: 'This British author created the Harry Potter series.', answer: 'Who is J.K. Rowling?' },
      { value: 500, clue: 'This is the name of Hagrid\'s gigantic three-headed dog.', answer: 'Who is Fluffy?' },
      { value: 500, clue: 'This wand maker\'s shop is on Diagon Alley.', answer: 'What is Ollivanders?' }
    ]
  },
  {
    id: 'marvel', name: 'MARVEL HEROES', level: 'medium',
    clues: [
      { value: 100, clue: 'This billionaire genius builds armor and becomes the founding Avenger.', answer: 'Who is Iron Man? (Tony Stark)' },
      { value: 100, clue: 'This Asgardian god of thunder wields a hammer named Mjølnir.', answer: 'Who is Thor?' },
      { value: 100, clue: 'This green hero is the strong alter-ego of Bruce Banner.', answer: 'Who is the Hulk?' },
      { value: 200, clue: 'This vibranium-rich African nation is ruled by King T\'Challa.', answer: 'What is Wakanda?' },
      { value: 200, clue: 'This star-spangled hero was frozen in ice for 70 years.', answer: 'Who is Captain America?' },
      { value: 200, clue: 'This web-slinging hero is also a high-school student named Peter Parker.', answer: 'Who is Spider-Man?' },
      { value: 300, clue: 'This 2019 film concluded the Infinity Saga with "Avengers... assemble."', answer: 'What is Avengers: Endgame?' },
      { value: 300, clue: 'These six powerful gems control aspects of existence.', answer: 'What are the Infinity Stones?' },
      { value: 300, clue: 'This master of the mystic arts is a former neurosurgeon.', answer: 'Who is Doctor Strange?' },
      { value: 400, clue: 'This trickster god is Thor\'s adopted brother.', answer: 'Who is Loki?' },
      { value: 400, clue: 'This Marvel anti-hero, voiced by Ryan Reynolds, breaks the fourth wall.', answer: 'Who is Deadpool?' },
      { value: 400, clue: 'This galactic team includes Star-Lord, Gamora, Rocket, and Groot.', answer: 'Who are the Guardians of the Galaxy?' },
      { value: 500, clue: 'This Marvel character has retractable claws and is part of the X-Men.', answer: 'Who is Wolverine?' },
      { value: 500, clue: 'This scientist created the Pym Particles, allowing one to shrink and grow.', answer: 'Who is Hank Pym? (Ant-Man)' },
      { value: 500, clue: 'This longtime Marvel writer and editor co-created Spider-Man, X-Men, Iron Man, and more.', answer: 'Who is Stan Lee?' }
    ]
  },
  {
    id: 'pixar', name: 'PIXAR FILMS', level: 'easy',
    clues: [
      { value: 100, clue: 'This 2008 Pixar film features a small robot left alone on Earth to clean up trash.', answer: 'What is WALL-E?' },
      { value: 100, clue: 'In Finding Nemo, this forgetful blue tang fish helps Marlin search for his son.', answer: 'Who is Dory?' },
      { value: 100, clue: 'In Monsters Inc., this is the name of the little girl Sulley accidentally lets in.', answer: 'Who is Boo?' },
      { value: 200, clue: 'This Pixar film takes place inside the mind of a girl named Riley.', answer: 'What is Inside Out?' },
      { value: 200, clue: 'In Up, this elderly man flies his house using thousands of these.', answer: 'What are balloons?' },
      { value: 200, clue: 'This Pixar film features a sheriff named Woody and a space ranger named Buzz.', answer: 'What is Toy Story?' },
      { value: 300, clue: 'In The Incredibles, this is the name of the family\'s super-fast son.', answer: 'Who is Dash?' },
      { value: 300, clue: 'This Pixar film features a young boy named Miguel who travels to the Land of the Dead.', answer: 'What is Coco?' },
      { value: 300, clue: 'In Cars, this is the name of the rookie race car voiced by Owen Wilson.', answer: 'Who is Lightning McQueen?' },
      { value: 400, clue: 'This Pixar film features a robot trying to save Earth from trash.', answer: 'What is WALL-E?' },
      { value: 400, clue: 'This Pixar film centers on emotions inside an 11-year-old\'s brain, including a sequel.', answer: 'What is Inside Out 2?' },
      { value: 400, clue: 'In Ratatouille, this is the name of the rat who dreams of being a chef.', answer: 'Who is Remy?' },
      { value: 500, clue: 'This man co-founded Pixar with John Lasseter and Steve Jobs.', answer: 'Who is Ed Catmull?' },
      { value: 500, clue: 'This 1995 film was the first feature-length computer-animated movie.', answer: 'What is Toy Story?' },
      { value: 500, clue: 'In Finding Nemo, this is the species of fish Nemo and his father are.', answer: 'What are clownfish?' }
    ]
  },
  {
    id: 'music', name: 'MUSIC', level: 'medium',
    clues: [
      { value: 100, clue: 'This British band sang "Hey Jude" and "Let It Be."', answer: 'Who are The Beatles?' },
      { value: 100, clue: 'This pop star\'s real name is Stefani Germanotta.', answer: 'Who is Lady Gaga?' },
      { value: 100, clue: 'This American singer-songwriter is known for re-recording her old albums as "Taylor\'s Version."', answer: 'Who is Taylor Swift?' },
      { value: 200, clue: 'This brass instrument is curled into a circle and played in marching bands.', answer: 'What is a tuba? (or French horn)' },
      { value: 200, clue: 'This composer wrote symphonies even after he became deaf.', answer: 'Who is Beethoven?' },
      { value: 200, clue: 'This Broadway musical tells the story of a founding father through hip-hop.', answer: 'What is Hamilton?' },
      { value: 300, clue: 'This Austrian child prodigy composed his first symphony at age 8.', answer: 'Who is Mozart?' },
      { value: 300, clue: 'This British rock band\'s "Bohemian Rhapsody" is a 6-minute mini-opera.', answer: 'Who is Queen?' },
      { value: 300, clue: 'This is the highest female singing voice.', answer: 'What is soprano?' },
      { value: 400, clue: 'This 2016 musical features the song "You Will Be Found."', answer: 'What is Dear Evan Hansen?' },
      { value: 400, clue: 'This jazz singer is known as the "First Lady of Song."', answer: 'Who is Ella Fitzgerald?' },
      { value: 400, clue: 'This is the term for music written without using lyrics.', answer: 'What is instrumental?' },
      { value: 500, clue: 'This Argentine composer wrote tango music and the soundtrack for many films.', answer: 'Who is Astor Piazzolla?' },
      { value: 500, clue: 'This Russian composer wrote the ballet "Swan Lake."', answer: 'Who is Tchaikovsky?' },
      { value: 500, clue: 'This Beethoven symphony is famous for its "Ode to Joy" finale.', answer: 'What is the Ninth Symphony?' }
    ]
  },
  {
    id: 'books', name: 'BOOKS & AUTHORS', level: 'medium',
    clues: [
      { value: 100, clue: 'This author wrote Charlie and the Chocolate Factory and Matilda.', answer: 'Who is Roald Dahl?' },
      { value: 100, clue: 'This author created the Harry Potter series.', answer: 'Who is J.K. Rowling?' },
      { value: 100, clue: 'This Maurice Sendak book features Max and a wild rumpus.', answer: 'What is Where the Wild Things Are?' },
      { value: 200, clue: 'This Greek poet is credited with writing The Iliad and The Odyssey.', answer: 'Who is Homer?' },
      { value: 200, clue: 'This author wrote The Hobbit and The Lord of the Rings.', answer: 'Who is J.R.R. Tolkien?' },
      { value: 200, clue: 'This Newbery-winning author wrote A Wrinkle in Time.', answer: 'Who is Madeleine L\'Engle?' },
      { value: 300, clue: 'This British playwright wrote Romeo and Juliet, Hamlet, and Macbeth.', answer: 'Who is William Shakespeare?' },
      { value: 300, clue: 'In this Newbery-winning book, Jonas lives in a colorless community.', answer: 'What is The Giver?' },
      { value: 300, clue: 'This American author wrote Tom Sawyer and Huckleberry Finn.', answer: 'Who is Mark Twain?' },
      { value: 400, clue: 'This dystopian novel features Katniss Everdeen and is the first in a trilogy.', answer: 'What is The Hunger Games?' },
      { value: 400, clue: 'This author wrote The Tale of Peter Rabbit.', answer: 'Who is Beatrix Potter?' },
      { value: 400, clue: 'This is the world\'s longest-running spy series, featuring 007.', answer: 'What is James Bond?' },
      { value: 500, clue: 'This Russian author wrote War and Peace.', answer: 'Who is Leo Tolstoy?' },
      { value: 500, clue: 'This Spanish novel\'s title character tilts at windmills, mistaking them for giants.', answer: 'What is Don Quixote?' },
      { value: 500, clue: 'This African American poet wrote "I Know Why the Caged Bird Sings."', answer: 'Who is Maya Angelou?' }
    ]
  },
  {
    id: 'art', name: 'FAMOUS ART', level: 'medium',
    clues: [
      { value: 100, clue: 'This Italian artist painted the Mona Lisa.', answer: 'Who is Leonardo da Vinci?' },
      { value: 100, clue: 'This Dutch artist painted Starry Night and famously cut off part of his ear.', answer: 'Who is Vincent van Gogh?' },
      { value: 100, clue: 'This Mexican artist painted bold self-portraits with strong eyebrows.', answer: 'Who is Frida Kahlo?' },
      { value: 200, clue: 'This 17-foot-tall marble sculpture by Michelangelo depicts a Biblical hero.', answer: 'What is the statue of David?' },
      { value: 200, clue: 'This Spanish artist co-founded Cubism and painted Guernica.', answer: 'Who is Pablo Picasso?' },
      { value: 200, clue: 'This Norwegian painting features a screaming figure on a bridge.', answer: 'What is The Scream?' },
      { value: 300, clue: 'This French artist is known for his water lily paintings at Giverny.', answer: 'Who is Claude Monet?' },
      { value: 300, clue: 'This American artist is famous for soup cans and Marilyn Monroe prints.', answer: 'Who is Andy Warhol?' },
      { value: 300, clue: 'This Italian Renaissance ceiling features God reaching toward Adam.', answer: 'What is the Sistine Chapel?' },
      { value: 400, clue: 'This Belgian surrealist painted men in bowler hats and a pipe that "is not a pipe."', answer: 'Who is René Magritte?' },
      { value: 400, clue: 'This African American artist made paper cutouts depicting Black history and life.', answer: 'Who is Jacob Lawrence?' },
      { value: 400, clue: 'This Spanish surrealist painted melting clocks in The Persistence of Memory.', answer: 'Who is Salvador Dalí?' },
      { value: 500, clue: 'This Japanese woodblock print of a giant wave has been reproduced everywhere.', answer: 'What is The Great Wave off Kanagawa? (by Hokusai)' },
      { value: 500, clue: 'This American abstract expressionist was famous for his drip paintings.', answer: 'Who is Jackson Pollock?' },
      { value: 500, clue: 'This African American sculptor is known for her bronze figures of everyday Black life.', answer: 'Who is Augusta Savage?' }
    ]
  },

  // ======================================================================
  // FOOD, MYTHS, MISC
  // ======================================================================
  {
    id: 'food', name: 'FOOD AROUND THE WORLD', level: 'easy',
    clues: [
      { value: 100, clue: 'This Italian dish features flat bread topped with sauce and cheese.', answer: 'What is pizza?' },
      { value: 100, clue: 'This Japanese dish features raw fish on small mounds of rice.', answer: 'What is sushi?' },
      { value: 100, clue: 'These tortilla-wrapped Mexican dishes are often filled with meat or beans.', answer: 'What are tacos? (or burritos)' },
      { value: 200, clue: 'This French pastry is buttery, flaky, and shaped like a crescent moon.', answer: 'What is a croissant?' },
      { value: 200, clue: 'This long Italian pasta is the basis of carbonara and bolognese.', answer: 'What is spaghetti?' },
      { value: 200, clue: 'This Chinese dish features small folded dumplings, often steamed.', answer: 'What are dumplings? (or dim sum)' },
      { value: 300, clue: 'This spice, more valuable than gold by weight, comes from a crocus flower.', answer: 'What is saffron?' },
      { value: 300, clue: 'This Indian flatbread is cooked in a clay tandoor oven.', answer: 'What is naan?' },
      { value: 300, clue: 'This Korean dish of fermented vegetables is served with most meals.', answer: 'What is kimchi?' },
      { value: 400, clue: 'This Mexican spicy sauce is made from chocolate and chili peppers.', answer: 'What is mole?' },
      { value: 400, clue: 'This Vietnamese soup features rice noodles and aromatic broth.', answer: 'What is pho?' },
      { value: 400, clue: 'This Thai soup is sweet-sour-spicy and often features shrimp.', answer: 'What is tom yum?' },
      { value: 500, clue: 'This Spanish saffron-rice dish often features seafood, chicken, or rabbit.', answer: 'What is paella?' },
      { value: 500, clue: 'This Russian beet soup is served hot or cold, often with sour cream.', answer: 'What is borscht?' },
      { value: 500, clue: 'This Ethiopian flatbread is sour and spongy and used as a utensil.', answer: 'What is injera?' }
    ]
  },
  {
    id: 'mythology', name: 'MYTHOLOGY', level: 'medium',
    clues: [
      { value: 100, clue: 'This king of the Greek gods rules from Mount Olympus and wields lightning bolts.', answer: 'Who is Zeus?' },
      { value: 100, clue: 'This Norse god of thunder wields a hammer named Mjölnir.', answer: 'Who is Thor?' },
      { value: 100, clue: 'This Greek goddess of love is the equivalent of Roman Venus.', answer: 'Who is Aphrodite?' },
      { value: 200, clue: 'This Norse god of mischief is Thor\'s adopted brother.', answer: 'Who is Loki?' },
      { value: 200, clue: 'This Greek hero killed the Minotaur in the labyrinth of Crete.', answer: 'Who is Theseus?' },
      { value: 200, clue: 'This Egyptian god has the head of a jackal and oversees the dead.', answer: 'Who is Anubis?' },
      { value: 300, clue: 'This Greek hero\'s only weakness was his heel.', answer: 'Who is Achilles?' },
      { value: 300, clue: 'This three-headed dog guards the entrance to the Greek underworld.', answer: 'Who is Cerberus?' },
      { value: 300, clue: 'This Egyptian sun god is often depicted with a falcon head.', answer: 'Who is Ra?' },
      { value: 400, clue: 'This Greek hero performed twelve impossible tasks called Labors.', answer: 'Who is Heracles? (or Hercules)' },
      { value: 400, clue: 'This Norse home of the gods was reached by a rainbow bridge.', answer: 'What is Asgard?' },
      { value: 400, clue: 'This Egyptian queen of the gods is associated with motherhood and magic.', answer: 'Who is Isis?' },
      { value: 500, clue: 'This Greek mortal opened a forbidden box that released all evils into the world.', answer: 'Who is Pandora?' },
      { value: 500, clue: 'This Norse goddess is queen of the underworld realm of the dead.', answer: 'Who is Hel?' },
      { value: 500, clue: 'This Aztec feathered-serpent god is one of the most important deities in their pantheon.', answer: 'Who is Quetzalcoatl?' }
    ]
  },
  {
    id: 'sports', name: 'SPORTS', level: 'easy',
    clues: [
      { value: 100, clue: 'In this sport, players score by getting a ball into a hoop 10 feet off the ground.', answer: 'What is basketball?' },
      { value: 100, clue: 'In baseball, hitting the ball over the outfield fence scores this.', answer: 'What is a home run?' },
      { value: 100, clue: 'These international games take place every four years.', answer: 'What are the Olympics?' },
      { value: 200, clue: 'In soccer, this trophy is awarded to the world champion every four years.', answer: 'What is the World Cup?' },
      { value: 200, clue: 'This American gymnast won 7 Olympic medals between 2016 and 2024.', answer: 'Who is Simone Biles?' },
      { value: 200, clue: 'This American football championship game is played every February.', answer: 'What is the Super Bowl?' },
      { value: 300, clue: 'This Jamaican sprinter won three gold medals at three consecutive Olympics.', answer: 'Who is Usain Bolt?' },
      { value: 300, clue: 'In tennis, this is the term for the score 40-40.', answer: 'What is deuce?' },
      { value: 300, clue: 'In hockey, this trophy is the championship of the NHL.', answer: 'What is the Stanley Cup?' },
      { value: 400, clue: 'This American Olympic swimmer holds the record for most Olympic gold medals (23).', answer: 'Who is Michael Phelps?' },
      { value: 400, clue: 'In cricket, this is the term for scoring 100 runs in a single innings.', answer: 'What is a century?' },
      { value: 400, clue: 'This famous boxer floated like a butterfly and stung like a bee.', answer: 'Who is Muhammad Ali?' },
      { value: 500, clue: 'This green jacket is awarded to the winner of golf\'s Masters Tournament.', answer: 'What is the Masters jacket? (or Green Jacket)' },
      { value: 500, clue: 'This is the only race that is part of all three Triple Crown thoroughbred horse races.', answer: 'What is the Belmont Stakes? (or Kentucky Derby / Preakness)' },
      { value: 500, clue: 'This Russian gymnast was the first to score a perfect 10 at the Olympics, in 1972.', answer: 'Who is Olga Korbut? (or Nadia Comăneci, who first scored 10.0 in 1976)' }
    ]
  },
  {
    id: 'inventions', name: 'INVENTIONS', level: 'medium',
    clues: [
      { value: 100, clue: 'This American inventor patented the light bulb and the phonograph.', answer: 'Who is Thomas Edison?' },
      { value: 100, clue: 'These two American brothers built the first powered airplane in 1903.', answer: 'Who are the Wright Brothers?' },
      { value: 100, clue: 'This Apple co-founder is credited with the iPhone.', answer: 'Who is Steve Jobs?' },
      { value: 200, clue: 'This Scottish-born American invented the telephone.', answer: 'Who is Alexander Graham Bell?' },
      { value: 200, clue: 'This Italian inventor demonstrated the first practical wireless radio.', answer: 'Who is Guglielmo Marconi?' },
      { value: 200, clue: 'This Yugoslav-American inventor pioneered alternating current electricity.', answer: 'Who is Nikola Tesla?' },
      { value: 300, clue: 'This African American inventor patented improvements to the traffic light and gas mask.', answer: 'Who is Garrett Morgan?' },
      { value: 300, clue: 'This American inventor created the assembly line for cars.', answer: 'Who is Henry Ford?' },
      { value: 300, clue: 'This Hungarian inventor created the ballpoint pen.', answer: 'Who is László Bíró?' },
      { value: 400, clue: 'This Englishman is considered the father of the World Wide Web.', answer: 'Who is Tim Berners-Lee?' },
      { value: 400, clue: 'This is the year the first iPhone was released.', answer: 'What is 2007?' },
      { value: 400, clue: 'This African American inventor invented refrigerated trucks for transporting food.', answer: 'Who is Frederick McKinley Jones?' },
      { value: 500, clue: 'This 19th-century woman invented the dishwasher.', answer: 'Who is Josephine Cochrane?' },
      { value: 500, clue: 'This Polish-American invented dynamite, then created a peace prize.', answer: 'Who is Alfred Nobel?' },
      { value: 500, clue: 'This pioneering African American inventor patented over 50 inventions including a folding bed.', answer: 'Who is Sarah Goode? (or others)' }
    ]
  },
  {
    id: 'tv-shows', name: 'TV SHOWS', level: 'easy',
    clues: [
      { value: 100, clue: 'This sponge lives in a pineapple under the sea.', answer: 'Who is SpongeBob SquarePants?' },
      { value: 100, clue: 'This long-running animated show features the family Simpson living in Springfield.', answer: 'What is The Simpsons?' },
      { value: 100, clue: 'This Disney Channel show featured twin brothers named Cody and Zack.', answer: 'What is The Suite Life of Zack & Cody?' },
      { value: 200, clue: 'In Stranger Things, this is the alternate dimension parallel to ours.', answer: 'What is the Upside Down?' },
      { value: 200, clue: 'This British show features a Time Lord who travels in a blue police box.', answer: 'What is Doctor Who?' },
      { value: 200, clue: 'This Nickelodeon cartoon features a boy named Aang who can master all four elements.', answer: 'What is Avatar: The Last Airbender?' },
      { value: 300, clue: 'In The Mandalorian, this is the species of "the Child" / Grogu.', answer: 'What is Yoda\'s species?' },
      { value: 300, clue: 'This animated show features a girl named Mabel and her brother Dipper at their great-uncle\'s tourist trap.', answer: 'What is Gravity Falls?' },
      { value: 300, clue: 'This cooking competition show features chefs in white aprons judged by a Michelin-starred chef.', answer: 'What is MasterChef?' },
      { value: 400, clue: 'This 1989 sitcom about "nothing" featured Jerry, George, Elaine, and Kramer.', answer: 'What is Seinfeld?' },
      { value: 400, clue: 'This Netflix show follows the British royal family across decades.', answer: 'What is The Crown?' },
      { value: 400, clue: 'This BBC show features Sherlock Holmes in modern London.', answer: 'What is Sherlock?' },
      { value: 500, clue: 'This long-running children\'s show features a yellow bird named Big Bird.', answer: 'What is Sesame Street?' },
      { value: 500, clue: 'This is the longest-running primetime animated series in U.S. television history.', answer: 'What is The Simpsons?' },
      { value: 500, clue: 'This anthology TV show features a different cast and story each season, by Ryan Murphy.', answer: 'What is American Horror Story?' }
    ]
  },
  {
    id: 'video-games', name: 'VIDEO GAMES', level: 'easy',
    clues: [
      { value: 100, clue: 'This Italian plumber rescues Princess Peach from Bowser.', answer: 'Who is Mario?' },
      { value: 100, clue: 'In Pokemon, this is the name of the famous yellow electric mouse starter.', answer: 'Who is Pikachu?' },
      { value: 100, clue: 'This sandbox game features blocky worlds you build and explore.', answer: 'What is Minecraft?' },
      { value: 200, clue: 'This Nintendo character wields the Master Sword and saves Princess Zelda.', answer: 'Who is Link?' },
      { value: 200, clue: 'This game features a battle royale on a shrinking island, by Epic Games.', answer: 'What is Fortnite?' },
      { value: 200, clue: 'This blue hedgehog is Sega\'s mascot.', answer: 'Who is Sonic the Hedgehog?' },
      { value: 300, clue: 'This Japanese horror game features a haunted Resident Evil village.', answer: 'What is Resident Evil Village?' },
      { value: 300, clue: 'In Animal Crossing, this is the type of fruit that is the player\'s "native" fruit on their island.', answer: 'What is the player\'s native fruit?' },
      { value: 300, clue: 'This co-op game features small bean creatures racing through obstacle courses.', answer: 'What is Fall Guys?' },
      { value: 400, clue: 'This game series features Master Chief fighting the Covenant.', answer: 'What is Halo?' },
      { value: 400, clue: 'In Splatoon, players control these humanoid squid-like creatures.', answer: 'What are Inklings?' },
      { value: 400, clue: 'This Naughty Dog game series features Nathan Drake on treasure hunts.', answer: 'What is Uncharted?' },
      { value: 500, clue: 'This indie game features a small girl in a yellow raincoat in a dark, scary world.', answer: 'What is Limbo? (or Little Nightmares)' },
      { value: 500, clue: 'This 1980 arcade game features a yellow circle eating dots.', answer: 'What is Pac-Man?' },
      { value: 500, clue: 'This roguelike game by Supergiant Games features Zagreus escaping the Greek underworld.', answer: 'What is Hades?' }
    ]
  },
  {
    id: 'math', name: 'MATH', level: 'medium',
    clues: [
      { value: 100, clue: 'This number is the result of 7 times 8.', answer: 'What is 56?' },
      { value: 100, clue: 'This Greek letter, used in math, equals approximately 3.14159.', answer: 'What is pi?' },
      { value: 100, clue: 'This is the largest single-digit prime number.', answer: 'What is 7?' },
      { value: 200, clue: 'This Greek philosopher\'s theorem describes the sides of a right triangle.', answer: 'Who is Pythagoras?' },
      { value: 200, clue: 'This Italian mathematician\'s sequence starts 0, 1, 1, 2, 3, 5, 8, 13...', answer: 'Who is Fibonacci?' },
      { value: 200, clue: 'This is the only even prime number.', answer: 'What is 2?' },
      { value: 300, clue: 'This British mathematician helped break Enigma in WWII and is the father of computer science.', answer: 'Who is Alan Turing?' },
      { value: 300, clue: 'This African American NASA mathematician calculated trajectories for John Glenn.', answer: 'Who is Katherine Johnson?' },
      { value: 300, clue: 'This is the term for a number that can only be divided by 1 and itself.', answer: 'What is a prime number?' },
      { value: 400, clue: 'This 17th-century Frenchman invented the calculator he called the Pascaline.', answer: 'Who is Blaise Pascal?' },
      { value: 400, clue: 'This number, an irrational constant, is approximately 2.71828.', answer: 'What is e? (Euler\'s number)' },
      { value: 400, clue: 'This 9th-century Persian mathematician gave us the word "algebra."', answer: 'Who is al-Khwarizmi?' },
      { value: 500, clue: 'This number, when added to its reverse, always equals a multiple of 11 if both are 2-digit.', answer: 'What is any 2-digit number? (interesting math fact)' },
      { value: 500, clue: 'This name is given to the diagonal of a unit square: the square root of 2.', answer: 'What is an irrational number?' },
      { value: 500, clue: 'This branch of math involves the study of triangles and angles.', answer: 'What is trigonometry?' }
    ]
  },
  {
    id: 'mixed-bag', name: 'POTPOURRI', level: 'medium',
    clues: [
      { value: 100, clue: 'This is the first letter of the Greek alphabet.', answer: 'What is alpha?' },
      { value: 100, clue: 'This is the official language of Brazil.', answer: 'What is Portuguese?' },
      { value: 100, clue: 'This animal is the king of the jungle.', answer: 'What is a lion?' },
      { value: 200, clue: 'This day is celebrated on July 4th in the United States.', answer: 'What is Independence Day?' },
      { value: 200, clue: 'This sport, played on horseback with a long-handled mallet, is sometimes called the "sport of kings."', answer: 'What is polo?' },
      { value: 200, clue: 'This is the most populous country in the world as of 2024.', answer: 'What is India? (recently overtook China)' },
      { value: 300, clue: 'This is the international distress signal in Morse code, even though SOS doesn\'t stand for anything.', answer: 'What is SOS?' },
      { value: 300, clue: 'This is the term for a baby kangaroo.', answer: 'What is a joey?' },
      { value: 300, clue: 'This biggest moon in the solar system is larger than Mercury.', answer: 'What is Ganymede?' },
      { value: 400, clue: 'This U.S. state is the only one whose name has only one syllable.', answer: 'What is Maine?' },
      { value: 400, clue: 'This phobia is the fear of long words. Yes, the irony is real.', answer: 'What is hippopotomonstrosesquippedaliophobia?' },
      { value: 400, clue: 'This Alaska volcano was the source of the loudest sound ever recorded, in 1883 (oops — different volcano).', answer: 'What is Krakatoa?' },
      { value: 500, clue: 'This international space agency is funded by 22 European member states.', answer: 'What is the European Space Agency? (ESA)' },
      { value: 500, clue: 'This natural phenomenon is called Aurora Borealis in the north.', answer: 'What is the Northern Lights?' },
      { value: 500, clue: 'This is the Latin term for "blank slate" used in philosophy.', answer: 'What is tabula rasa?' }
    ]
  },

  // ======================================================================
  // BATCH 2 — added 2026-05-02 (20 new categories)
  // ======================================================================
  {
    id: 'birds', name: 'BIRDS', level: 'easy',
    clues: [
      { value: 100, clue: 'This bird is a national symbol of the United States.', answer: 'What is the bald eagle?' },
      { value: 100, clue: 'This pink bird stands on one leg and gets its color from shrimp.', answer: 'What is a flamingo?' },
      { value: 100, clue: 'This nocturnal bird is known for its "who-who" call.', answer: 'What is an owl?' },
      { value: 200, clue: 'This is the fastest bird in the world when diving.', answer: 'What is the peregrine falcon?' },
      { value: 200, clue: 'This Antarctic bird waddles on land but is graceful in water.', answer: 'What is a penguin?' },
      { value: 200, clue: 'This tiny bird can hover and fly backwards.', answer: 'What is a hummingbird?' },
      { value: 300, clue: 'This is the largest bird in the world, native to Africa.', answer: 'What is an ostrich?' },
      { value: 300, clue: 'This brightly colored tropical bird can mimic human speech.', answer: 'What is a parrot?' },
      { value: 300, clue: 'This Australian bird laughs like a person.', answer: 'What is a kookaburra?' },
      { value: 400, clue: 'This New Zealand flightless bird shares its name with a fruit.', answer: 'What is a kiwi?' },
      { value: 400, clue: 'This bird is famous for delivering babies in folklore.', answer: 'What is a stork?' },
      { value: 400, clue: 'This bird, considered extinct, was once native to Mauritius.', answer: 'What is a dodo?' },
      { value: 500, clue: 'This South American bird has the longest beak relative to body size.', answer: 'What is the toucan? (or sword-billed hummingbird)' },
      { value: 500, clue: 'This species of penguin is the largest, standing about 4 feet tall.', answer: 'What is the emperor penguin?' },
      { value: 500, clue: 'This term refers to the migration of birds between summer and winter homes.', answer: 'What is migration?' }
    ]
  },
  {
    id: 'weather', name: 'WEATHER', level: 'easy',
    clues: [
      { value: 100, clue: 'This is the natural electrical discharge during a thunderstorm.', answer: 'What is lightning?' },
      { value: 100, clue: 'These white fluffy formations float in the sky.', answer: 'What are clouds?' },
      { value: 100, clue: 'This colorful arc appears after rain when sun shines through droplets.', answer: 'What is a rainbow?' },
      { value: 200, clue: 'This violent rotating column of air can devastate towns in seconds.', answer: 'What is a tornado?' },
      { value: 200, clue: 'This tropical storm has winds over 74 mph and forms over warm oceans.', answer: 'What is a hurricane?' },
      { value: 200, clue: 'This six-sided crystal of frozen water falls from clouds in winter.', answer: 'What is a snowflake?' },
      { value: 300, clue: 'This unit measures atmospheric pressure.', answer: 'What is a barometer? (or millibars/hPa)' },
      { value: 300, clue: 'This is the name for very small hailstones, also called "soft hail."', answer: 'What is graupel?' },
      { value: 300, clue: 'This is the term for the boundary between two different air masses.', answer: 'What is a front?' },
      { value: 400, clue: 'This Pacific weather pattern brings warmer ocean temperatures and changes weather worldwide.', answer: 'What is El Niño?' },
      { value: 400, clue: 'This polar wind storm can have temperatures below −50°F.', answer: 'What is a polar vortex?' },
      { value: 400, clue: 'This is the visible mass of water droplets that forms close to the ground.', answer: 'What is fog?' },
      { value: 500, clue: 'This scale, ranked F0–F5, measures tornado intensity.', answer: 'What is the Fujita Scale? (or Enhanced Fujita)' },
      { value: 500, clue: 'This atmospheric layer contains most weather phenomena.', answer: 'What is the troposphere?' },
      { value: 500, clue: 'This Saffir-Simpson scale categorizes hurricanes from 1 to 5 based on this.', answer: 'What is sustained wind speed?' }
    ]
  },
  {
    id: 'plants', name: 'PLANTS & TREES', level: 'easy',
    clues: [
      { value: 100, clue: 'These trees lose their leaves in fall.', answer: 'What are deciduous trees?' },
      { value: 100, clue: 'This is the largest type of flower in the world.', answer: 'What is the Rafflesia? (or sunflower for accessible answer)' },
      { value: 100, clue: 'These plants make their own food using sunlight.', answer: 'What are plants? (or simply, all plants do this via photosynthesis)' },
      { value: 200, clue: 'These trees stay green year-round.', answer: 'What are evergreens?' },
      { value: 200, clue: 'This is the world\'s largest tree by volume, in California.', answer: 'What is the giant sequoia? (General Sherman)' },
      { value: 200, clue: 'This African tree can live 1000+ years and store water in its trunk.', answer: 'What is the baobab?' },
      { value: 300, clue: 'These plants get nutrients by trapping insects.', answer: 'What are carnivorous plants? (e.g. Venus flytrap)' },
      { value: 300, clue: 'This Japanese spring tradition celebrates these pink blossoms.', answer: 'What are cherry blossoms? (sakura)' },
      { value: 300, clue: 'This is the part of a flower that produces pollen.', answer: 'What is the stamen?' },
      { value: 400, clue: 'This sticky substance from pine trees was used to make rosin and turpentine.', answer: 'What is sap? (or resin)' },
      { value: 400, clue: 'This tropical fruit-bearing tree has a name meaning "food of the gods" in Greek.', answer: 'What is cacao? (Theobroma)' },
      { value: 400, clue: 'This is the term for plants that complete their life cycle in one year.', answer: 'What are annuals?' },
      { value: 500, clue: 'This African tree has a thorny crown and is associated with dramatic sunsets.', answer: 'What is the acacia?' },
      { value: 500, clue: 'This white fungus, often used in cooking, is technically a mushroom.', answer: 'What are mushrooms? (or specific: enoki, oyster, etc.)' },
      { value: 500, clue: 'This single-celled algae produces about half the oxygen on Earth.', answer: 'What are diatoms? (or phytoplankton)' }
    ]
  },
  {
    id: 'colors', name: 'COLORS & ART TERMS', level: 'easy',
    clues: [
      { value: 100, clue: 'These three colors are called primary because they can\'t be made by mixing.', answer: 'What are red, yellow, and blue?' },
      { value: 100, clue: 'You get this color by mixing red and yellow.', answer: 'What is orange?' },
      { value: 100, clue: 'You get this color by mixing blue and yellow.', answer: 'What is green?' },
      { value: 200, clue: 'These colors — black, white, and gray — are called this.', answer: 'What are neutrals?' },
      { value: 200, clue: 'This term describes how light or dark a color is.', answer: 'What is value?' },
      { value: 200, clue: 'This circular diagram shows how colors relate to each other.', answer: 'What is a color wheel?' },
      { value: 300, clue: 'These pairs of colors sit opposite each other on the color wheel.', answer: 'What are complementary colors?' },
      { value: 300, clue: 'This term describes the brightness or dullness of a color.', answer: 'What is saturation?' },
      { value: 300, clue: 'This is the technical term for the actual color itself.', answer: 'What is hue?' },
      { value: 400, clue: 'This Italian painter is known for using sfumato — the soft blending of colors.', answer: 'Who is Leonardo da Vinci?' },
      { value: 400, clue: 'This deep red pigment was once made from the cochineal insect.', answer: 'What is carmine? (or crimson)' },
      { value: 400, clue: 'This blue pigment, prized in the Renaissance, was made from lapis lazuli.', answer: 'What is ultramarine?' },
      { value: 500, clue: 'This is the medical term for being unable to distinguish certain colors.', answer: 'What is color blindness?' },
      { value: 500, clue: 'This French art movement, including Monet, is named after a painting called Impression, Sunrise.', answer: 'What is Impressionism?' },
      { value: 500, clue: 'This is the highest-pitched range of color the human eye can detect.', answer: 'What is violet? (or ultraviolet, but we can\'t see UV)' }
    ]
  },
  {
    id: 'spies', name: 'SPIES & MYSTERIES', level: 'medium',
    clues: [
      { value: 100, clue: 'This British secret agent goes by the code 007.', answer: 'Who is James Bond?' },
      { value: 100, clue: 'This famous fictional detective lives at 221B Baker Street.', answer: 'Who is Sherlock Holmes?' },
      { value: 100, clue: 'This kid spy organization is featured in Spy Kids.', answer: 'What is the OSS? (or Spy Kids Agency)' },
      { value: 200, clue: 'This American intelligence agency is headquartered in Langley, Virginia.', answer: 'What is the CIA?' },
      { value: 200, clue: 'This author created the character Hercule Poirot.', answer: 'Who is Agatha Christie?' },
      { value: 200, clue: 'This British WWII facility broke the Enigma code.', answer: 'What is Bletchley Park?' },
      { value: 300, clue: 'This Cold War spy was a British double agent who defected to the Soviet Union.', answer: 'Who is Kim Philby?' },
      { value: 300, clue: 'This series of children\'s books features Encyclopedia Brown solving mysteries.', answer: 'What is Encyclopedia Brown?' },
      { value: 300, clue: 'This is the term for a secret message hidden in plain sight.', answer: 'What is steganography? (or a code)' },
      { value: 400, clue: 'This famous Dutch dancer was executed by France as a German spy in WWI.', answer: 'Who is Mata Hari?' },
      { value: 400, clue: 'This 1962 Cuban Missile Crisis confrontation was tracked partly through these covert photos.', answer: 'What are U-2 spy plane photos?' },
      { value: 400, clue: 'This 18th-century American boy was hanged by the British and said "I only regret that I have but one life to lose for my country."', answer: 'Who is Nathan Hale?' },
      { value: 500, clue: 'This American FBI agent infiltrated the New York mob as Donnie Brasco.', answer: 'Who is Joseph Pistone?' },
      { value: 500, clue: 'This female American Civil War spy ran a Confederate spy ring in Washington, D.C.', answer: 'Who is Rose O\'Neal Greenhow?' },
      { value: 500, clue: 'This 1970s break-in scandal at the Watergate complex toppled President Nixon.', answer: 'What is Watergate?' }
    ]
  },
  {
    id: 'medicine', name: 'MEDICINE & HEALTH', level: 'medium',
    clues: [
      { value: 100, clue: 'This vitamin, found in citrus fruits, helps prevent scurvy.', answer: 'What is vitamin C?' },
      { value: 100, clue: 'This is the medical term for a doctor who treats children.', answer: 'What is a pediatrician?' },
      { value: 100, clue: 'This common medicine, also called paracetamol, treats pain and fever.', answer: 'What is acetaminophen? (or Tylenol)' },
      { value: 200, clue: 'This Greek physician\'s oath is still recited by new doctors today.', answer: 'Who is Hippocrates?' },
      { value: 200, clue: 'This 1928 discovery by Alexander Fleming revolutionized medicine.', answer: 'What is penicillin?' },
      { value: 200, clue: 'This founder of modern nursing rose to fame during the Crimean War.', answer: 'Who is Florence Nightingale?' },
      { value: 300, clue: 'This African-American surgeon pioneered open-heart surgery in 1893.', answer: 'Who is Daniel Hale Williams?' },
      { value: 300, clue: 'This American doctor invented the polio vaccine in 1955.', answer: 'Who is Jonas Salk?' },
      { value: 300, clue: 'This is the medical term for a routine yearly checkup.', answer: 'What is a physical?' },
      { value: 400, clue: 'This Russian physiologist showed conditioned response with dogs and bells.', answer: 'Who is Ivan Pavlov?' },
      { value: 400, clue: 'This is the medical term for a doctor who specializes in the heart.', answer: 'What is a cardiologist?' },
      { value: 400, clue: 'This African doctor performed the first successful human-to-human heart transplant in 1967.', answer: 'Who is Christiaan Barnard?' },
      { value: 500, clue: 'This 19th-century Hungarian doctor pioneered antiseptic procedures by promoting hand-washing.', answer: 'Who is Ignaz Semmelweis?' },
      { value: 500, clue: 'This African-American medical pioneer developed blood plasma storage techniques used in WWII.', answer: 'Who is Charles Drew?' },
      { value: 500, clue: 'This is the international medical organization that helps in emergencies and conflicts.', answer: 'What is Doctors Without Borders? (or Médecins Sans Frontières)' }
    ]
  },
  {
    id: 'languages', name: 'LANGUAGES OF THE WORLD', level: 'medium',
    clues: [
      { value: 100, clue: 'This is the most-spoken language in the world by native speakers.', answer: 'What is Mandarin Chinese?' },
      { value: 100, clue: 'This is the most widely spoken language in South America.', answer: 'What is Spanish? (or Portuguese in Brazil)' },
      { value: 100, clue: 'This is the official language of Brazil.', answer: 'What is Portuguese?' },
      { value: 200, clue: 'This Romance language is spoken in Italy.', answer: 'What is Italian?' },
      { value: 200, clue: 'This script is used to write Russian and Ukrainian.', answer: 'What is Cyrillic?' },
      { value: 200, clue: 'This is the official language of Egypt.', answer: 'What is Arabic?' },
      { value: 300, clue: 'This sign language is the primary one used in the United States.', answer: 'What is American Sign Language? (ASL)' },
      { value: 300, clue: 'This Indo-European language is the ancestor of most European languages.', answer: 'What is Proto-Indo-European?' },
      { value: 300, clue: 'This is the official language of Egypt before Arabic, written in hieroglyphs.', answer: 'What is Ancient Egyptian?' },
      { value: 400, clue: 'This artificial language was created in 1887 by L.L. Zamenhof to be a universal second language.', answer: 'What is Esperanto?' },
      { value: 400, clue: 'This Indian language has the most native speakers among Indian languages.', answer: 'What is Hindi?' },
      { value: 400, clue: 'This South African language\'s name means "language of the people of the south."', answer: 'What is Afrikaans?' },
      { value: 500, clue: 'This now-extinct language was spoken by the Romans.', answer: 'What is Latin?' },
      { value: 500, clue: 'This African language family includes Swahili, Zulu, and Yoruba.', answer: 'What is Niger-Congo? (or Bantu)' },
      { value: 500, clue: 'This indigenous Andean language was the language of the Inca Empire.', answer: 'What is Quechua?' }
    ]
  },
  {
    id: 'transportation', name: 'TRANSPORTATION', level: 'easy',
    clues: [
      { value: 100, clue: 'These two-wheeled vehicles are powered by pedaling.', answer: 'What are bicycles?' },
      { value: 100, clue: 'These large vehicles fly people across continents.', answer: 'What are airplanes?' },
      { value: 100, clue: 'This horse-drawn vehicle is associated with old Europe and is now mostly a tourist ride.', answer: 'What is a carriage?' },
      { value: 200, clue: 'This Italian city is famous for its canals and gondolas.', answer: 'What is Venice?' },
      { value: 200, clue: 'This Japanese high-speed train is sometimes called the "bullet train."', answer: 'What is the Shinkansen?' },
      { value: 200, clue: 'This New York City subway car is the most common type, instantly recognizable.', answer: 'What is the R32 / R train? (or generally a subway car)' },
      { value: 300, clue: 'These San Francisco vehicles, pulled by underground cables, climb the city\'s hills.', answer: 'What are cable cars?' },
      { value: 300, clue: 'This longest road in the world stretches from Alaska to Argentina.', answer: 'What is the Pan-American Highway?' },
      { value: 300, clue: 'This is the world\'s busiest airport for passengers, in Atlanta.', answer: 'What is Hartsfield–Jackson?' },
      { value: 400, clue: 'This is the world\'s longest underwater rail tunnel, connecting England and France.', answer: 'What is the Channel Tunnel? (Chunnel)' },
      { value: 400, clue: 'This Indian three-wheeled taxi is also called a tuk-tuk.', answer: 'What is an auto rickshaw?' },
      { value: 400, clue: 'This American highway, also called the "Main Street of America," stretched from Chicago to Santa Monica.', answer: 'What is Route 66?' },
      { value: 500, clue: 'This 1869 event at Promontory Summit, Utah connected the U.S. coast-to-coast by rail.', answer: 'What is the Transcontinental Railroad? (Golden Spike)' },
      { value: 500, clue: 'This famous British ocean liner sank on April 15, 1912.', answer: 'What is the RMS Titanic?' },
      { value: 500, clue: 'This Japanese train system uses magnetic levitation, traveling over 300 mph.', answer: 'What is the maglev? (specifically L0 Series)' }
    ]
  },
  {
    id: 'olympics', name: 'OLYMPIC GAMES', level: 'medium',
    clues: [
      { value: 100, clue: 'These five interlocking colored rings are the Olympic symbol.', answer: 'What are the Olympic rings?' },
      { value: 100, clue: 'This Greek city is where the ancient Olympics began.', answer: 'What is Olympia? (or Athens for first modern)' },
      { value: 100, clue: 'These Olympic Games happen on snow and ice every four years.', answer: 'What are the Winter Olympics?' },
      { value: 200, clue: 'This city hosted the 2024 Summer Olympics.', answer: 'What is Paris?' },
      { value: 200, clue: 'This sport, in the Summer Olympics, is sometimes called the "sweet science."', answer: 'What is boxing?' },
      { value: 200, clue: 'This American gymnast won 7 Olympic medals between 2016 and 2024.', answer: 'Who is Simone Biles?' },
      { value: 300, clue: 'This is the oldest Olympic running race, originally about 200 yards long in Greek times.', answer: 'What is the stade? (or sprint, the oldest distance)' },
      { value: 300, clue: 'This Black American athlete won 4 gold medals at the 1936 Berlin Olympics.', answer: 'Who is Jesse Owens?' },
      { value: 300, clue: 'This is the only sport in the Summer Olympics that is held entirely on water.', answer: 'What is rowing? (or others like swimming, sailing)' },
      { value: 400, clue: 'This French baron founded the modern Olympic Games in 1896.', answer: 'Who is Pierre de Coubertin?' },
      { value: 400, clue: 'This Olympic motto means "Faster, Higher, Stronger" in Latin.', answer: 'What is Citius, Altius, Fortius?' },
      { value: 400, clue: 'This Norwegian skier holds the record for most Winter Olympic medals.', answer: 'Who is Marit Bjørgen?' },
      { value: 500, clue: 'This Greek city hosted the first modern Olympics in 1896.', answer: 'What is Athens?' },
      { value: 500, clue: 'This event was added to the Summer Olympics in 2020 and features riding waves.', answer: 'What is surfing?' },
      { value: 500, clue: 'This Romanian gymnast was the first to score a perfect 10.0 at the Olympics in 1976.', answer: 'Who is Nadia Comăneci?' }
    ]
  },
  {
    id: 'famous-women', name: 'FAMOUS WOMEN', level: 'medium',
    clues: [
      { value: 100, clue: 'This British monarch reigned for 70 years before passing in 2022.', answer: 'Who is Queen Elizabeth II?' },
      { value: 100, clue: 'This British WWII Prime Minister was actually a man, but his successor and predecessor were not. (Trick — name a famous female PM.)', answer: 'Who is Margaret Thatcher? (or Theresa May)' },
      { value: 100, clue: 'This American First Lady married Barack Obama and wrote the book Becoming.', answer: 'Who is Michelle Obama?' },
      { value: 200, clue: 'This Polish-French scientist won Nobel Prizes in both Physics and Chemistry.', answer: 'Who is Marie Curie?' },
      { value: 200, clue: 'This English author wrote Pride and Prejudice and Sense and Sensibility.', answer: 'Who is Jane Austen?' },
      { value: 200, clue: 'This American suffragist was the first woman to run for U.S. president, in 1872.', answer: 'Who is Victoria Woodhull?' },
      { value: 300, clue: 'This Mexican painter is known for vivid self-portraits with strong brows.', answer: 'Who is Frida Kahlo?' },
      { value: 300, clue: 'This Egyptian queen ruled with Mark Antony and is famous for her beauty.', answer: 'Who is Cleopatra?' },
      { value: 300, clue: 'This American activist refused to give up her bus seat in 1955 Montgomery.', answer: 'Who is Rosa Parks?' },
      { value: 400, clue: 'This Pakistani teen activist won the Nobel Peace Prize at age 17 for her advocacy of girls\' education.', answer: 'Who is Malala Yousafzai?' },
      { value: 400, clue: 'This American astronomer discovered evidence of the existence of dark matter.', answer: 'Who is Vera Rubin?' },
      { value: 400, clue: 'This American chef brought French cooking to American TV in the 1960s.', answer: 'Who is Julia Child?' },
      { value: 500, clue: 'This Greek poet from the island of Lesbos is considered one of the greatest lyric poets.', answer: 'Who is Sappho?' },
      { value: 500, clue: 'This Indian doctor was India\'s first female heart-lung transplant surgeon.', answer: 'Who is Tinku Joshi? (or another notable surgeon)' },
      { value: 500, clue: 'This American writer won the Nobel Prize in Literature in 1993, the first African American woman to do so.', answer: 'Who is Toni Morrison?' }
    ]
  },
  {
    id: 'famous-men', name: 'FAMOUS MEN', level: 'medium',
    clues: [
      { value: 100, clue: 'This Italian Renaissance artist painted the Mona Lisa.', answer: 'Who is Leonardo da Vinci?' },
      { value: 100, clue: 'This American inventor patented the light bulb and the phonograph.', answer: 'Who is Thomas Edison?' },
      { value: 100, clue: 'This British scientist was famously hit on the head by a falling apple.', answer: 'Who is Isaac Newton?' },
      { value: 200, clue: 'This South African leader spent 27 years in prison before becoming president.', answer: 'Who is Nelson Mandela?' },
      { value: 200, clue: 'This American civil rights leader gave the "I Have a Dream" speech.', answer: 'Who is Martin Luther King Jr.?' },
      { value: 200, clue: 'This Indian leader led nonviolent resistance against British rule.', answer: 'Who is Mahatma Gandhi?' },
      { value: 300, clue: 'This Greek philosopher was the teacher of Plato.', answer: 'Who is Socrates?' },
      { value: 300, clue: 'This Russian writer is known for War and Peace and Anna Karenina.', answer: 'Who is Leo Tolstoy?' },
      { value: 300, clue: 'This Spanish artist co-founded Cubism and painted Guernica.', answer: 'Who is Pablo Picasso?' },
      { value: 400, clue: 'This French general crowned himself emperor in 1804.', answer: 'Who is Napoleon Bonaparte?' },
      { value: 400, clue: 'This African American Tuskegee Airman pilot was a 1940s WWII hero.', answer: 'Who is Benjamin O. Davis Jr.? (or another notable Tuskegee Airman)' },
      { value: 400, clue: 'This British naturalist proposed the theory of evolution by natural selection.', answer: 'Who is Charles Darwin?' },
      { value: 500, clue: 'This Persian poet wrote the Rubaiyat in the 11th century.', answer: 'Who is Omar Khayyam?' },
      { value: 500, clue: 'This Italian explorer was the first European to reach what is now Brazil.', answer: 'Who is Pedro Álvares Cabral?' },
      { value: 500, clue: 'This Yugoslav-American inventor pioneered alternating current electricity.', answer: 'Who is Nikola Tesla?' }
    ]
  },
  {
    id: 'continents', name: 'CONTINENTS', level: 'easy',
    clues: [
      { value: 100, clue: 'This is the largest continent by area.', answer: 'What is Asia?' },
      { value: 100, clue: 'This is the smallest continent.', answer: 'What is Australia? (or Oceania)' },
      { value: 100, clue: 'This continent is south of the equator and contains the Amazon.', answer: 'What is South America?' },
      { value: 200, clue: 'This icy continent is home to penguins and research stations.', answer: 'What is Antarctica?' },
      { value: 200, clue: 'This is the second-largest continent and home to the Sahara.', answer: 'What is Africa?' },
      { value: 200, clue: 'These two continents are sometimes considered one supercontinent.', answer: 'What are Europe and Asia? (Eurasia)' },
      { value: 300, clue: 'This was the only continent untouched by humans until 1820.', answer: 'What is Antarctica?' },
      { value: 300, clue: 'This continent\'s name comes from a Greek mythological figure.', answer: 'What is Europe? (Europa)' },
      { value: 300, clue: 'This continent has the most countries, with 54 sovereign nations.', answer: 'What is Africa?' },
      { value: 400, clue: 'This is the highest mountain on each continent, called the Seven Summits collective.', answer: 'What are the Seven Summits?' },
      { value: 400, clue: 'This is the lowest point on land, located in the Middle East.', answer: 'What is the Dead Sea?' },
      { value: 400, clue: 'This continent contains both the wettest and driest places on Earth.', answer: 'What is South America? (Atacama and Amazon)' },
      { value: 500, clue: 'This was the supercontinent that existed before all the continents drifted apart.', answer: 'What is Pangaea?' },
      { value: 500, clue: 'This is the only continent that is also a single country.', answer: 'What is Australia?' },
      { value: 500, clue: 'These two continents have a meeting point at the Bering Strait.', answer: 'What are North America and Asia?' }
    ]
  },
  {
    id: 'rivers', name: 'GREAT RIVERS', level: 'medium',
    clues: [
      { value: 100, clue: 'This longest river in the world flows north through Egypt.', answer: 'What is the Nile?' },
      { value: 100, clue: 'This longest river in South America gives its name to a region of rainforest.', answer: 'What is the Amazon?' },
      { value: 100, clue: 'This American river forms much of the border between Iowa and Wisconsin.', answer: 'What is the Mississippi?' },
      { value: 200, clue: 'This river runs through London.', answer: 'What is the Thames?' },
      { value: 200, clue: 'This river runs through Paris.', answer: 'What is the Seine?' },
      { value: 200, clue: 'This Russian river is the longest in Europe.', answer: 'What is the Volga?' },
      { value: 300, clue: 'This river flows through Egypt and Sudan; the Aswan Dam is on it.', answer: 'What is the Nile?' },
      { value: 300, clue: 'This South American river forms much of the border between Brazil and Paraguay.', answer: 'What is the Paraná?' },
      { value: 300, clue: 'This river\'s mouth on the Black Sea is in Romania, but it begins in Germany.', answer: 'What is the Danube?' },
      { value: 400, clue: 'This third-longest river in the world flows through China.', answer: 'What is the Yangtze?' },
      { value: 400, clue: 'This river system is the second-longest in Africa, in central Africa.', answer: 'What is the Congo?' },
      { value: 400, clue: 'This African river flows through 11 countries and is the longest in Africa.', answer: 'What is the Nile?' },
      { value: 500, clue: 'This Indian river is sacred in Hinduism and is the longest in India.', answer: 'What is the Ganges?' },
      { value: 500, clue: 'This river flows through more national capitals than any other in the world.', answer: 'What is the Danube?' },
      { value: 500, clue: 'This river system\'s waters are about 1/5 of all freshwater discharge to the world\'s oceans.', answer: 'What is the Amazon?' }
    ]
  },
  {
    id: 'astronauts', name: 'ASTRONAUTS', level: 'medium',
    clues: [
      { value: 100, clue: 'This American astronaut was the first person to walk on the moon, in 1969.', answer: 'Who is Neil Armstrong?' },
      { value: 100, clue: 'This astronaut joined Armstrong on the moon and is famous for the line "Magnificent desolation."', answer: 'Who is Buzz Aldrin?' },
      { value: 100, clue: 'This Russian was the first human in space, in 1961.', answer: 'Who is Yuri Gagarin?' },
      { value: 200, clue: 'This American was the first woman in space, in 1983.', answer: 'Who is Sally Ride?' },
      { value: 200, clue: 'This Russian was the first woman in space, in 1963.', answer: 'Who is Valentina Tereshkova?' },
      { value: 200, clue: 'This American astronaut was the first African American in space, in 1983.', answer: 'Who is Guion Bluford?' },
      { value: 300, clue: 'This American command pilot of Apollo 13 famously said "Houston, we have a problem."', answer: 'Who is Jim Lovell?' },
      { value: 300, clue: 'This Canadian astronaut became famous on social media for music videos from the ISS.', answer: 'Who is Chris Hadfield?' },
      { value: 300, clue: 'This American astronaut was the first African American woman in space, in 1992.', answer: 'Who is Mae Jemison?' },
      { value: 400, clue: 'This American astronaut spent nearly a year on the ISS in 2015–2016.', answer: 'Who is Scott Kelly?' },
      { value: 400, clue: 'This American spacewalker holds the record for total time spent on EVAs.', answer: 'Who is Peggy Whitson?' },
      { value: 400, clue: 'This astronaut commanded the first female-only spacewalk in 2019.', answer: 'Who is Christina Koch? (alongside Jessica Meir)' },
      { value: 500, clue: 'This Soviet cosmonaut was the first person to perform a spacewalk, in 1965.', answer: 'Who is Alexei Leonov?' },
      { value: 500, clue: 'This astronaut was the first American to orbit Earth, in 1962.', answer: 'Who is John Glenn?' },
      { value: 500, clue: 'These three Apollo 11 astronauts went to the moon together.', answer: 'Who are Neil Armstrong, Buzz Aldrin, and Michael Collins?' }
    ]
  },
  {
    id: 'natural-wonders', name: 'NATURAL WONDERS', level: 'medium',
    clues: [
      { value: 100, clue: 'This Arizona canyon was carved by the Colorado River.', answer: 'What is the Grand Canyon?' },
      { value: 100, clue: 'These massive falls form the border between Zambia and Zimbabwe.', answer: 'What are Victoria Falls?' },
      { value: 100, clue: 'This northern lights phenomenon is named for a Roman goddess of dawn.', answer: 'What is the Aurora Borealis?' },
      { value: 200, clue: 'This is the largest coral reef system on Earth, off Australia.', answer: 'What is the Great Barrier Reef?' },
      { value: 200, clue: 'This is the deepest lake in the world, in Russia.', answer: 'What is Lake Baikal?' },
      { value: 200, clue: 'This volcano in Tanzania is Africa\'s tallest mountain.', answer: 'What is Mount Kilimanjaro?' },
      { value: 300, clue: 'These Brazilian and Argentinian waterfalls form a 1.7-mile-wide curtain.', answer: 'What are Iguazu Falls?' },
      { value: 300, clue: 'This New Zealand fjord is featured in Lord of the Rings.', answer: 'What is Milford Sound? (or Fiordland)' },
      { value: 300, clue: 'This Vietnamese bay is famous for its limestone karst pillars.', answer: 'What is Halong Bay?' },
      { value: 400, clue: 'This Bolivian salt flat is the largest in the world.', answer: 'What is Salar de Uyuni?' },
      { value: 400, clue: 'This island chain inspired Darwin\'s theory of evolution.', answer: 'What are the Galápagos Islands?' },
      { value: 400, clue: 'This Greenland phenomenon explains why the sun doesn\'t set for months.', answer: 'What is the Midnight Sun?' },
      { value: 500, clue: 'This Arctic phenomenon causes the ice to crack with thunderous sounds.', answer: 'What is the icequake? (or polar dawn)' },
      { value: 500, clue: 'This Vietnamese cave is the largest in the world.', answer: 'What is Hang Sơn Đoòng?' },
      { value: 500, clue: 'This area in Africa\'s Rift Valley contains the world\'s lowest land point at −1,360 feet.', answer: 'What is the Afar Triangle? (or Danakil Depression)' }
    ]
  },
  {
    id: 'islands', name: 'ISLANDS', level: 'medium',
    clues: [
      { value: 100, clue: 'This island state is the only U.S. state made entirely of islands.', answer: 'What is Hawaii?' },
      { value: 100, clue: 'This Italian island is shaped like a triangle and home to Mount Etna.', answer: 'What is Sicily?' },
      { value: 100, clue: 'This Caribbean island is home to reggae music.', answer: 'What is Jamaica?' },
      { value: 200, clue: 'This is the largest island in the world.', answer: 'What is Greenland?' },
      { value: 200, clue: 'This Indonesian island is the world\'s most populous, with over 150 million people.', answer: 'What is Java?' },
      { value: 200, clue: 'This island is the second-largest in the world, in Southeast Asia.', answer: 'What is New Guinea?' },
      { value: 300, clue: 'These Galapagos islands inspired Darwin and belong to which country?', answer: 'What is Ecuador?' },
      { value: 300, clue: 'This Pacific island is the world\'s most isolated, home to the Moai statues.', answer: 'What is Easter Island?' },
      { value: 300, clue: 'This African island is home to lemurs and is the world\'s 4th-largest.', answer: 'What is Madagascar?' },
      { value: 400, clue: 'This Atlantic Portuguese island is famous for its volcanic landscapes.', answer: 'What are the Azores?' },
      { value: 400, clue: 'This is the smallest country in Oceania, a tiny island nation.', answer: 'What is Nauru?' },
      { value: 400, clue: 'This Polynesian island is the most populous in French Polynesia.', answer: 'What is Tahiti?' },
      { value: 500, clue: 'This Norwegian archipelago has a global seed vault carved into a mountain.', answer: 'What is Svalbard?' },
      { value: 500, clue: 'This British island in the South Atlantic was the site of Napoleon\'s exile and death.', answer: 'What is St. Helena?' },
      { value: 500, clue: 'This Indonesian island is famous as a film and tourist destination.', answer: 'What is Bali?' }
    ]
  },
  {
    id: 'kid-classics', name: 'KIDS\' BOOK CLASSICS', level: 'easy',
    clues: [
      { value: 100, clue: 'In this Maurice Sendak book, Max becomes king of where the wild things are.', answer: 'What is Where the Wild Things Are?' },
      { value: 100, clue: 'This Eric Carle book features a tiny insect eating its way through fruits.', answer: 'What is The Very Hungry Caterpillar?' },
      { value: 100, clue: 'This Beatrix Potter rabbit gets in trouble in Mr. McGregor\'s garden.', answer: 'Who is Peter Rabbit?' },
      { value: 200, clue: 'In Charlotte\'s Web, this is the name of the pig who befriends a spider.', answer: 'Who is Wilbur?' },
      { value: 200, clue: 'This Dr. Seuss book features a green character who hates Christmas.', answer: 'What is How the Grinch Stole Christmas?' },
      { value: 200, clue: 'This Roald Dahl book features a giant peach.', answer: 'What is James and the Giant Peach?' },
      { value: 300, clue: 'In The Secret Garden, this is the country where the story begins.', answer: 'What is India?' },
      { value: 300, clue: 'This boy in The Phantom Tollbooth travels through a magical kingdom.', answer: 'Who is Milo?' },
      { value: 300, clue: 'This Gary Paulsen novel features a 13-year-old boy stranded after a plane crash.', answer: 'What is Hatchet?' },
      { value: 400, clue: 'This Newbery-winning book features Brian Robeson surviving in the Canadian wilderness.', answer: 'What is Hatchet?' },
      { value: 400, clue: 'In The Giver, this is the role given to Jonas at the Ceremony of Twelve.', answer: 'What is Receiver of Memory?' },
      { value: 400, clue: 'This Newbery winner by Madeleine L\'Engle features Meg Murry and the tesseract.', answer: 'What is A Wrinkle in Time?' },
      { value: 500, clue: 'This Newbery-winning Christopher Paul Curtis novel takes place in 1936 Flint, Michigan.', answer: 'What is Bud, Not Buddy?' },
      { value: 500, clue: 'This author wrote Ramona Quimby and Beezus and Ramona.', answer: 'Who is Beverly Cleary?' },
      { value: 500, clue: 'This Lois Lowry novel won the Newbery Medal in 1990 and is set in WWII Denmark.', answer: 'What is Number the Stars?' }
    ]
  },
  {
    id: 'famous-firsts', name: 'FAMOUS FIRSTS', level: 'medium',
    clues: [
      { value: 100, clue: 'This Italian explorer is credited with reaching the Americas in 1492.', answer: 'Who is Christopher Columbus?' },
      { value: 100, clue: 'These two American brothers achieved the first powered flight in 1903.', answer: 'Who are the Wright Brothers?' },
      { value: 100, clue: 'This American president was the first.', answer: 'Who is George Washington?' },
      { value: 200, clue: 'This American was the first to circumnavigate the world solo by air, in 1933.', answer: 'Who is Wiley Post?' },
      { value: 200, clue: 'This Norwegian explorer was the first to reach the South Pole, in 1911.', answer: 'Who is Roald Amundsen?' },
      { value: 200, clue: 'This American was the first woman to fly solo across the Atlantic.', answer: 'Who is Amelia Earhart?' },
      { value: 300, clue: 'This American climber was the first known to summit Mount Everest from the U.S., in 1963.', answer: 'Who is Jim Whittaker?' },
      { value: 300, clue: 'This New Zealander and his Sherpa partner were the first confirmed to summit Everest, in 1953.', answer: 'Who is Edmund Hillary? (with Tenzing Norgay)' },
      { value: 300, clue: 'This Englishman was the first to solo-circumnavigate the world, in 1968–1969.', answer: 'Who is Robin Knox-Johnston?' },
      { value: 400, clue: 'This American journalist was the first woman to swim the English Channel, in 1926.', answer: 'Who is Gertrude Ederle?' },
      { value: 400, clue: 'This American Hispanic woman was the first Hispanic American astronaut to go to space, in 1993.', answer: 'Who is Ellen Ochoa?' },
      { value: 400, clue: 'This Indian-American woman was the first U.S. Vice President of color, taking office in 2021.', answer: 'Who is Kamala Harris?' },
      { value: 500, clue: 'This Japanese physicist won the first Asian Nobel Prize in Physics, in 1949.', answer: 'Who is Hideki Yukawa?' },
      { value: 500, clue: 'This Liberian woman was the first elected female head of state in Africa, in 2006.', answer: 'Who is Ellen Johnson Sirleaf?' },
      { value: 500, clue: 'This American doctor was the first African American woman in space, in 1992.', answer: 'Who is Mae Jemison?' }
    ]
  },
  {
    id: 'broadway', name: 'BROADWAY MUSICALS', level: 'medium',
    clues: [
      { value: 100, clue: 'This Lin-Manuel Miranda hip-hop musical is about a founding father.', answer: 'What is Hamilton?' },
      { value: 100, clue: 'This Andrew Lloyd Webber musical features a chandelier crash.', answer: 'What is The Phantom of the Opera?' },
      { value: 100, clue: 'This musical features the song "Tomorrow" sung by an orphan girl.', answer: 'What is Annie?' },
      { value: 200, clue: 'This Wicked musical tells the story of two women who would become which two famous witches?', answer: 'Who are Glinda and the Wicked Witch of the West? (Elphaba)' },
      { value: 200, clue: 'This musical features the song "Memory" and a chorus of felines.', answer: 'What is Cats?' },
      { value: 200, clue: 'This musical, set in 1789 Paris, features Jean Valjean.', answer: 'What is Les Misérables?' },
      { value: 300, clue: 'This Lin-Manuel Miranda musical features the song "96,000" set in Washington Heights.', answer: 'What is In the Heights?' },
      { value: 300, clue: 'This 1957 musical sets Romeo and Juliet in 1950s New York.', answer: 'What is West Side Story?' },
      { value: 300, clue: 'This Stephen Schwartz musical opens with "No One Mourns the Wicked."', answer: 'What is Wicked?' },
      { value: 400, clue: 'This Stephen Sondheim musical features Sweeney Todd, the demon barber.', answer: 'What is Sweeney Todd?' },
      { value: 400, clue: 'This 1968 musical is famous for its "hippie" themes and the song "Aquarius."', answer: 'What is Hair?' },
      { value: 400, clue: 'This is the longest-running Broadway show in history.', answer: 'What is The Phantom of the Opera?' },
      { value: 500, clue: 'This 1949 Rodgers and Hammerstein musical is set in WWII South Pacific.', answer: 'What is South Pacific?' },
      { value: 500, clue: 'This 1987 Stephen Sondheim musical features fairy tale characters.', answer: 'What is Into the Woods?' },
      { value: 500, clue: 'This Broadway musical opened in 1957 and is based on T.S. Eliot poems.', answer: 'What is Cats?' }
    ]
  },
  {
    id: 'world-religions', name: 'WORLD CULTURES', level: 'medium',
    clues: [
      { value: 100, clue: 'This Hindu festival of lights is celebrated annually.', answer: 'What is Diwali?' },
      { value: 100, clue: 'This Jewish holiday commemorates the Exodus and lasts 7 or 8 days.', answer: 'What is Passover?' },
      { value: 100, clue: 'This Chinese holiday is the most important and includes red envelopes.', answer: 'What is Chinese New Year?' },
      { value: 200, clue: 'This Mexican Day of the Dead celebration involves marigolds and ofrendas.', answer: 'What is Día de los Muertos?' },
      { value: 200, clue: 'This Indian holy book of Hinduism includes the Bhagavad Gita.', answer: 'What is the Mahabharata?' },
      { value: 200, clue: 'This African American cultural celebration in late December was created in 1966.', answer: 'What is Kwanzaa?' },
      { value: 300, clue: 'This Japanese tea ceremony emphasizes harmony, respect, purity, and tranquility.', answer: 'What is chanoyu? (the Way of Tea / sadō)' },
      { value: 300, clue: 'This South Korean traditional dress is called this and worn for special occasions.', answer: 'What is hanbok?' },
      { value: 300, clue: 'This Brazilian celebration features samba, parades, and lasts 5 days.', answer: 'What is Carnival?' },
      { value: 400, clue: 'This Indian festival of colors is celebrated in spring.', answer: 'What is Holi?' },
      { value: 400, clue: 'This African ceremony, often performed before harvest, involves drumming and dance.', answer: 'What is a harvest festival? (varies by culture)' },
      { value: 400, clue: 'This Norwegian word for the cozy feeling of being indoors during winter.', answer: 'What is hygge? (actually Danish, but accepted)' },
      { value: 500, clue: 'This term refers to the formal greeting between Maori in New Zealand, with foreheads pressed together.', answer: 'What is hongi?' },
      { value: 500, clue: 'This Japanese practice of forest bathing is called this.', answer: 'What is shinrin-yoku?' },
      { value: 500, clue: 'This Aboriginal Australian belief about the creation of the world is called this.', answer: 'What is the Dreamtime? (or Dreaming)' }
    ]
  }
];
