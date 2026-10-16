// Family Jeopardy — Category & Clue Library
// Massachusetts Curriculum Frameworks aligned, grades 5–7. Family-safe, fact-checked.
//
// THE DOLLAR LADDER = GRADE LEVEL (consistent in EVERY category):
//   $100  grade 5  — warm-up / recall
//   $200  grade 5  — solid grade-5
//   $300  grade 6  — grade-6 core
//   $400  grade 7  — grade-7 core
//   $500  grade 7+ — stretch / cross-curricular
//
// Schema: { id, name (ALL CAPS for board), grade, clues: [{ value, clue, answer }] }
// Each category has exactly 5 clues at values 100/200/300/400/500.
// The running game adds `used` at runtime — do not hand-set it here.

window.JEOPARDY_CATEGORIES = [

  // ====================================================================
  // MATH
  // ====================================================================
  {
    id: 'fractions-decimals', name: 'FRACTIONS & DECIMALS', grade: '5-7',
    clues: [
      { value: 100, clue: 'The decimal 0.5 written as a fraction in simplest form.', answer: 'What is 1/2?' },
      { value: 200, clue: 'The sum of 1/2 and 1/4, written as a single fraction.', answer: 'What is 3/4?' },
      { value: 300, clue: 'The quotient when you divide 3/4 by 1/2.', answer: 'What is 3/2 (or 1 1/2)?' },
      { value: 400, clue: 'Written as a decimal, the fraction 5/8.', answer: 'What is 0.625?' },
      { value: 500, clue: 'The repeating decimal 0.333… equals this fraction in simplest form.', answer: 'What is 1/3?' }
    ]
  },
  {
    id: 'ratios-proportions', name: 'RATIOS & RATES', grade: '5-7',
    clues: [
      { value: 100, clue: 'In a bag with 2 red marbles and 3 blue marbles, this is the ratio of red to blue.', answer: 'What is 2 to 3 (2:3)?' },
      { value: 200, clue: 'If 1 pizza feeds 4 people, this many whole pizzas are needed to feed 12 people.', answer: 'What is 3?' },
      { value: 300, clue: 'If a car travels 120 miles in 2 hours, this is its speed as a unit rate in miles per hour.', answer: 'What is 60 miles per hour?' },
      { value: 400, clue: 'If 3 notebooks cost $6, then at the same rate 7 notebooks cost this much.', answer: 'What is $14?' },
      { value: 500, clue: 'On a scale drawing where 1 inch represents 5 feet, a wall drawn 4 inches long is really this long.', answer: 'What is 20 feet?' }
    ]
  },
  {
    id: 'integers', name: 'INTEGERS & NEGATIVES', grade: '5-7',
    clues: [
      { value: 100, clue: 'This is the only number that is neither positive nor negative.', answer: 'What is zero?' },
      { value: 200, clue: 'On a number line, this is the value found 3 units to the left of zero.', answer: 'What is -3?' },
      { value: 300, clue: 'The sum of -5 and 8.', answer: 'What is 3?' },
      { value: 400, clue: 'The product of -6 and -4.', answer: 'What is 24?' },
      { value: 500, clue: 'The value of -3 minus negative 10.', answer: 'What is 7?' }
    ]
  },
  {
    id: 'geometry', name: 'GEOMETRY & MEASUREMENT', grade: '5-7',
    clues: [
      { value: 100, clue: 'This is the number of faces on a cube.', answer: 'What is 6?' },
      { value: 200, clue: 'The volume, in cubic centimeters, of a box measuring 2 cm by 3 cm by 4 cm.', answer: 'What is 24?' },
      { value: 300, clue: 'The area of a triangle with a base of 10 units and a height of 6 units.', answer: 'What is 30?' },
      { value: 400, clue: 'Two angles whose measures add up to exactly 90 degrees are called this.', answer: 'What are complementary angles?' },
      { value: 500, clue: 'Using 3.14 for pi, the circumference of a circle with a diameter of 10, rounded to the nearest whole number.', answer: 'What is 31?' }
    ]
  },

  // ====================================================================
  // SCIENCE & TECHNOLOGY / ENGINEERING
  // ====================================================================
  {
    id: 'matter', name: 'MATTER & CHEMISTRY', grade: '5-7',
    clues: [
      { value: 100, clue: 'The three most common states of matter are solid, liquid, and this.', answer: 'What is gas?' },
      { value: 200, clue: 'This is the process by which a liquid slowly turns into a gas.', answer: 'What is evaporation?' },
      { value: 300, clue: 'The smallest unit of an element that still has that element’s properties.', answer: 'What is an atom?' },
      { value: 400, clue: 'A substance made of two or more elements chemically joined together, such as water (H2O).', answer: 'What is a compound?' },
      { value: 500, clue: 'Burning wood or rusting iron are examples of this kind of change, which forms new substances.', answer: 'What is a chemical change?' }
    ]
  },
  {
    id: 'ecosystems', name: 'LIFE SCIENCE', grade: '5-7',
    clues: [
      { value: 100, clue: 'Plants make their own food from sunlight, water, and carbon dioxide in this process.', answer: 'What is photosynthesis?' },
      { value: 200, clue: 'An animal that eats only plants is called this.', answer: 'What is a herbivore?' },
      { value: 300, clue: 'This is the basic building block of all living things.', answer: 'What is a cell?' },
      { value: 400, clue: 'This part of a plant cell, not found in animal cells, captures light for photosynthesis.', answer: 'What is a chloroplast?' },
      { value: 500, clue: 'In an ecosystem, organisms like mushrooms and bacteria that break down dead matter are called this.', answer: 'What are decomposers?' }
    ]
  },
  {
    id: 'earth-space', name: 'EARTH & SPACE SCIENCE', grade: '5-7',
    clues: [
      { value: 100, clue: 'Earth takes about this many days to complete one orbit around the Sun.', answer: 'What is 365 (one year)?' },
      { value: 200, clue: 'This is the force that pulls objects down toward the center of the Earth.', answer: 'What is gravity?' },
      { value: 300, clue: 'Making up about 78 percent of our air, this is the most abundant gas in Earth’s atmosphere.', answer: 'What is nitrogen?' },
      { value: 400, clue: 'This is the name for Earth’s thin, rocky outermost layer.', answer: 'What is the crust?' },
      { value: 500, clue: 'The scientific theory that Earth’s outer shell is broken into large moving plates.', answer: 'What is plate tectonics?' }
    ]
  },
  {
    id: 'forces-energy', name: 'FORCES & ENERGY', grade: '5-7',
    clues: [
      { value: 100, clue: 'In science, a push or a pull is called this.', answer: 'What is a force?' },
      { value: 200, clue: 'This is the type of energy an object has because it is moving.', answer: 'What is kinetic energy?' },
      { value: 300, clue: 'Energy that is stored because of an object’s position or height is called this.', answer: 'What is potential energy?' },
      { value: 400, clue: 'This force opposes motion whenever two surfaces rub against each other.', answer: 'What is friction?' },
      { value: 500, clue: 'Newton stated that for every action there is an equal and opposite reaction; this is his law of this number.', answer: 'What is the third law?' }
    ]
  },

  // ====================================================================
  // HISTORY & SOCIAL SCIENCE
  // ====================================================================
  {
    id: 'early-us', name: 'EARLY UNITED STATES', grade: '5-7',
    clues: [
      { value: 100, clue: 'Adopted in 1776, this document announced that the American colonies were free from Britain.', answer: 'What is the Declaration of Independence?' },
      { value: 200, clue: 'He was the first President of the United States.', answer: 'Who was George Washington?' },
      { value: 300, clue: 'In this 1773 protest, colonists dumped British tea into the harbor of a Massachusetts city.', answer: 'What was the Boston Tea Party?' },
      { value: 400, clue: 'The first ten amendments to the U.S. Constitution are known together by this name.', answer: 'What is the Bill of Rights?' },
      { value: 500, clue: 'This 1803 purchase from France roughly doubled the size of the young United States.', answer: 'What was the Louisiana Purchase?' }
    ]
  },
  {
    id: 'ancient-civ', name: 'ANCIENT CIVILIZATIONS', grade: '5-7',
    clues: [
      { value: 100, clue: 'The ancient Egyptians built these giant stone structures as tombs for their pharaohs.', answer: 'What are the pyramids?' },
      { value: 200, clue: 'The yearly flooding of this river made ancient Egypt’s farmland rich.', answer: 'What is the Nile?' },
      { value: 300, clue: 'Ancient Egyptian writing that used pictures and symbols is called this.', answer: 'What are hieroglyphics?' },
      { value: 400, clue: 'This Greek city-state is often called the birthplace of democracy.', answer: 'What is Athens?' },
      { value: 500, clue: 'Goods and ideas traveled between ancient China and the West along this network of trade routes.', answer: 'What is the Silk Road?' }
    ]
  },
  {
    id: 'world-geography', name: 'WORLD GEOGRAPHY', grade: '5-7',
    clues: [
      { value: 100, clue: 'This is the largest ocean on Earth.', answer: 'What is the Pacific Ocean?' },
      { value: 200, clue: 'This is the largest continent in both area and population.', answer: 'What is Asia?' },
      { value: 300, clue: 'This is the name for the imaginary line at 0 degrees latitude that circles the middle of the Earth.', answer: 'What is the equator?' },
      { value: 400, clue: 'Stretching across northern Africa, this is the largest hot desert in the world.', answer: 'What is the Sahara?' },
      { value: 500, clue: 'This is the largest country in the world by land area.', answer: 'What is Russia?' }
    ]
  },

  // ====================================================================
  // ENGLISH LANGUAGE ARTS
  // ====================================================================
  {
    id: 'vocabulary', name: 'VOCABULARY', grade: '5-7',
    clues: [
      { value: 100, clue: 'A word that means the opposite of another word, like hot and cold, is called this.', answer: 'What is an antonym?' },
      { value: 200, clue: 'This is a synonym for the word "happy."', answer: 'What is joyful (or glad)?' },
      { value: 300, clue: 'The Latin root "aqua," found in words like aquarium, means this.', answer: 'What is water?' },
      { value: 400, clue: 'The prefix "bene-," found in benefit and benevolent, carries this meaning.', answer: 'What is good (or well)?' },
      { value: 500, clue: 'A word spelled the same as another but with a different meaning, like "bark," is a kind of this.', answer: 'What is a homograph (homonym)?' }
    ]
  },
  {
    id: 'figurative', name: 'FIGURATIVE LANGUAGE', grade: '5-7',
    clues: [
      { value: 100, clue: 'A comparison using the words "like" or "as," such as "brave as a lion."', answer: 'What is a simile?' },
      { value: 200, clue: 'A comparison that says one thing IS another, such as "the classroom was a zoo."', answer: 'What is a metaphor?' },
      { value: 300, clue: 'Giving human qualities to animals or objects, as in "the wind whispered."', answer: 'What is personification?' },
      { value: 400, clue: 'An obvious exaggeration for effect, such as "I’ve told you a million times."', answer: 'What is hyperbole?' },
      { value: 500, clue: 'Words that imitate the sounds they describe, like "buzz," "sizzle," and "pop."', answer: 'What is onomatopoeia?' }
    ]
  },
  {
    id: 'grammar', name: 'GRAMMAR', grade: '5-7',
    clues: [
      { value: 100, clue: 'This part of speech names a person, place, or thing.', answer: 'What is a noun?' },
      { value: 200, clue: 'This part of speech shows an action, like run, jump, or think.', answer: 'What is a verb?' },
      { value: 300, clue: 'This part of speech describes a noun, such as "blue," "tall," or "gentle."', answer: 'What is an adjective?' },
      { value: 400, clue: 'This punctuation mark shows possession or forms a contraction like "don’t."', answer: 'What is an apostrophe?' },
      { value: 500, clue: 'This part of speech joins words or clauses together, like "and," "but," and "because."', answer: 'What is a conjunction?' }
    ]
  },

  // ====================================================================
  // MASSACHUSETTS & NEW ENGLAND
  // ====================================================================
  {
    id: 'massachusetts', name: 'MASS. & NEW ENGLAND', grade: '5-7',
    clues: [
      { value: 100, clue: 'This city is the capital of Massachusetts.', answer: 'What is Boston?' },
      { value: 200, clue: 'The Pilgrims established their colony at this Massachusetts town in 1620.', answer: 'What is Plymouth?' },
      { value: 300, clue: 'This Boston baseball team plays its home games at Fenway Park.', answer: 'Who are the Red Sox?' },
      { value: 400, clue: 'Home to both Harvard and MIT, this city sits just across the Charles River from Boston.', answer: 'What is Cambridge?' },
      { value: 500, clue: 'This hook-shaped peninsula is a famous Massachusetts summer vacation spot.', answer: 'What is Cape Cod?' }
    ]
  },

  // ====================================================================
  // CROWD-PLEASERS (same ladder, lighter topics)
  // ====================================================================
  {
    id: 'space', name: 'OUTER SPACE', grade: '5-7',
    clues: [
      { value: 100, clue: 'This is the planet closest to the Sun.', answer: 'What is Mercury?' },
      { value: 200, clue: 'This is the largest planet in our solar system.', answer: 'What is Jupiter?' },
      { value: 300, clue: 'This planet is famous for its bright rings made of ice and rock.', answer: 'What is Saturn?' },
      { value: 400, clue: 'This "red planet" is being explored by NASA rovers like Perseverance.', answer: 'What is Mars?' },
      { value: 500, clue: 'Reclassified as a dwarf planet in 2006, this object was once counted as the ninth planet.', answer: 'What is Pluto?' }
    ]
  },
  {
    id: 'animals', name: 'ANIMAL KINGDOM', grade: '5-7',
    clues: [
      { value: 100, clue: 'This is the largest animal on Earth, living in the ocean.', answer: 'What is the blue whale?' },
      { value: 200, clue: 'This is the fastest land animal, able to sprint up to about 70 miles per hour.', answer: 'What is the cheetah?' },
      { value: 300, clue: 'This group of cold-blooded animals, including frogs and salamanders, can live both in water and on land.', answer: 'What are amphibians?' },
      { value: 400, clue: 'This eight-armed sea creature has three hearts and blue blood.', answer: 'What is the octopus?' },
      { value: 500, clue: 'This Australian egg-laying mammal has a bill like a duck and webbed feet.', answer: 'What is the platypus?' }
    ]
  },
  {
    id: 'video-games', name: 'VIDEO GAMES', grade: '5-7',
    clues: [
      { value: 100, clue: 'This mustached Nintendo plumber is famous for rescuing Princess Peach.', answer: 'Who is Mario?' },
      { value: 200, clue: 'In this blocky sandbox game, players mine blocks and craft tools to build whole worlds.', answer: 'What is Minecraft?' },
      { value: 300, clue: 'This super-fast blue hedgehog is the longtime mascot of SEGA.', answer: 'Who is Sonic?' },
      { value: 400, clue: 'This Nintendo adventure series stars a hero named Link on a quest to save a princess.', answer: 'What is The Legend of Zelda?' },
      { value: 500, clue: 'Pikachu is the most famous creature from this huge franchise about catching and training "pocket monsters."', answer: 'What is Pokemon?' }
    ]
  },
  {
    id: 'sports', name: 'SPORTS', grade: '5-7',
    clues: [
      { value: 100, clue: 'In this sport, teams score by running or passing the ball into the end zone for a touchdown.', answer: 'What is (American) football?' },
      { value: 200, clue: 'This is the sport played at Fenway Park using a bat, a ball, and four bases.', answer: 'What is baseball?' },
      { value: 300, clue: 'In basketball, a shot made from behind the arc is worth this many points.', answer: 'What is 3?' },
      { value: 400, clue: 'This New England football team, based in Foxborough, has won six Super Bowls.', answer: 'Who are the New England Patriots?' },
      { value: 500, clue: 'Held every four years, this tournament crowns the world champion nation in soccer.', answer: 'What is the World Cup?' }
    ]
  },
  {
    id: 'mythology', name: 'WORLD MYTHOLOGY', grade: '5-7',
    clues: [
      { value: 100, clue: 'In Greek myth, this king of the gods ruled from Mount Olympus and threw thunderbolts.', answer: 'Who is Zeus?' },
      { value: 200, clue: 'This Greek god of the sea carried a three-pronged spear called a trident.', answer: 'Who is Poseidon?' },
      { value: 300, clue: 'This is the Roman name for the chief god the Greeks called Zeus.', answer: 'Who is Jupiter?' },
      { value: 400, clue: 'In Norse myth, this hammer-wielding god of thunder gives his name to a day of the week.', answer: 'Who is Thor?' },
      { value: 500, clue: 'This Greek hero, known for his strength, had to complete twelve famous labors.', answer: 'Who is Heracles (Hercules)?' }
    ]
  },
  {
    id: 'music', name: 'MUSIC NOTES', grade: '5-7',
    clues: [
      { value: 100, clue: 'The repeated, catchy part of a song that listeners sing along to is called this.', answer: 'What is the chorus?' },
      { value: 200, clue: 'This keyboard instrument has 88 black and white keys.', answer: 'What is the piano?' },
      { value: 300, clue: 'This pop superstar’s record-breaking "Eras Tour" became the highest-grossing concert tour ever.', answer: 'Who is Taylor Swift?' },
      { value: 400, clue: 'A group of exactly four musicians performing together is called this.', answer: 'What is a quartet?' },
      { value: 500, clue: 'Often measured in beats per minute, this word describes the speed of a piece of music.', answer: 'What is tempo?' }
    ]
  },
  {
    id: 'wordplay', name: 'WORDPLAY & RIDDLES', grade: '5-7',
    clues: [
      { value: 100, clue: 'A word spelled the same forwards and backwards, like "level" or "racecar," is called this.', answer: 'What is a palindrome?' },
      { value: 200, clue: 'Riddle me this: I have hands but cannot clap, and a face but no eyes. What am I?', answer: 'What is a clock?' },
      { value: 300, clue: 'Riddle: The more of them you take, the more you leave behind. What are they?', answer: 'What are footsteps?' },
      { value: 400, clue: 'A sentence that uses every letter of the alphabet, like "the quick brown fox jumps over the lazy dog," is called this.', answer: 'What is a pangram?' },
      { value: 500, clue: 'Riddle: What has to be broken before you can use it?', answer: 'What is an egg?' }
    ]
  },
  {
    id: 'technology', name: 'TECH & CODING', grade: '5-7',
    clues: [
      { value: 100, clue: 'The "www" at the start of many web addresses stands for World Wide this.', answer: 'What is Web?' },
      { value: 200, clue: 'Often called the "brain" of a computer, the CPU’s initials stand for Central Processing this.', answer: 'What is Unit?' },
      { value: 300, clue: 'A clear, step-by-step set of instructions for solving a problem is called this.', answer: 'What is an algorithm?' },
      { value: 400, clue: 'This free block-based coding language from MIT lets kids build games by snapping colored blocks together.', answer: 'What is Scratch?' },
      { value: 500, clue: 'In programming, a mistake in the code that makes a program behave incorrectly is called this.', answer: 'What is a bug?' }
    ]
  }

];
