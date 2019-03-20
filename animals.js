const standardItems = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
];

const Autocomplete = Vue.component("autocomplete", {
  template: "#autocomplete-tpl",
  props: ["items", "placeholder", "label", "textarea", "rows", "cols"],
  data() {
    return {
      id: 'input-' + parseInt(Math.random() * 1000),
      inputValue: "",
      searchMatch: [],
      selectedIndex: 0,
      clickedChooseItem: false,
      wordIndex: 0 };

  },
  mounted() {
    const _self = this;
    document.querySelector('#' + this.id).
    addEventListener('input', function () {
      const caret = getCaretCoordinates(this, this.selectionEnd);

      if (_self.searchMatch.length > 0) {
        const element = document.querySelectorAll('.' + _self.id + '-list');

        if (element[0]) {
          element[0].style.top = caret.top + 40 + 'px';
          element[0].style.left = caret.left + 'px';
        }
      }
    });
  },
  computed: {
    listToSearch() {
      if (typeof this.items !== "undefined" && this.items.length > 0) {
        return this.items;
      } else {
        return standardItems;
      }
    },
    currentWord() {
      return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')[this.wordIndex];
    },
    inputSplitted() {
      return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(" ");
    } },

  watch: {
    inputValue() {
      this.focus();
      console.log(this.inputSplitted);
      this.selectedIndex = 0;
      this.wordIndex = this.inputSplitted.length - 1;
    } },

  methods: {
    highlightWord(word) {
      const regex = new RegExp("(" + this.currentWord + ")", "g");
      return word.replace(regex, '<mark>$1</mark>');
    },
    setWord(word) {
      let currentWords = this.inputValue.replace(/(\r\n|\n|\r)/gm, '__br__ ').split(' ');
      currentWords[this.wordIndex] = currentWords[this.wordIndex].replace(this.currentWord, word + ' ');
      this.wordIndex += 1;
      this.inputValue = currentWords.join(' ').replace(/__br__\s/g, '\n');
    },
    moveDown() {
      if (this.selectedIndex < this.searchMatch.length - 1) {
        this.selectedIndex++;
      }
    },
    moveUp() {
      if (this.selectedIndex !== -1) {
        this.selectedIndex--;
      }
    },
    selectItem(index) {
      this.selectedIndex = index;
      this.chooseItem();
    },
    chooseItem(e) {
      this.clickedChooseItem = true;

      if (this.selectedIndex !== -1 && this.searchMatch.length > 0) {
        if (e) {
          e.preventDefault();
        }
        this.setWord(this.searchMatch[this.selectedIndex]);
        this.selectedIndex = -1;
      }
    },
    focusout(e) {
      setTimeout(() => {
        if (!this.clickedChooseItem) {
          this.searchMatch = [];
          this.selectedIndex = -1;
        }
        this.clickedChooseItem = false;
      }, 100);
    },
    focus() {
      this.searchMatch = [];
      if (this.currentWord !== "") {
        this.searchMatch = this.listToSearch.filter(
        el => el.indexOf(this.currentWord) >= 0);

      }
      if (
      this.searchMatch.length === 1 &&
      this.currentWord === this.searchMatch[0])
      {
        this.searchMatch = [];
      }
    } } });



new Vue({
  el: "#app" });

(function () {function e(b, e, f) {if (!h) throw Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");if (f = f && f.debug || !1) {var a = document.querySelector("#input-textarea-caret-position-mirror-div");a && a.parentNode.removeChild(a);}a = document.createElement("div");a.id = "input-textarea-caret-position-mirror-div";document.body.appendChild(a);var c = a.style,d = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle,k = "INPUT" === b.nodeName;c.whiteSpace = "pre-wrap";k || (c.wordWrap =
    "break-word");c.position = "absolute";f || (c.visibility = "hidden");l.forEach(function (a) {k && "lineHeight" === a ? c.lineHeight = d.height : c[a] = d[a];});m ? b.scrollHeight > parseInt(d.height) && (c.overflowY = "scroll") : c.overflow = "hidden";a.textContent = b.value.substring(0, e);k && (a.textContent = a.textContent.replace(/\s/g, "\u00a0"));var g = document.createElement("span");g.textContent = b.value.substring(e) || ".";a.appendChild(g);b = { top: g.offsetTop + parseInt(d.borderTopWidth), left: g.offsetLeft + parseInt(d.borderLeftWidth), height: parseInt(d.lineHeight) };
    f ? g.style.backgroundColor = "#aaa" : document.body.removeChild(a);return b;}var l = "direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" "),h = "undefined" !== typeof window,m = h && null != window.mozInnerScreenX;
  "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : h && (window.getCaretCoordinates = e);})();
