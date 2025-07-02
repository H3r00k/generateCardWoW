
export function createCharacter() {
  const nomi = [
    "Thrag",
    "Velara",
    "Zulgar",
    "Miria",
    "Karn",
    "Eluna",
    "Drakar",
    "Serina",
    "Loktar",
    "Valen",
    "Kael",
    "Syrana",
    "Gor'tash",
    "Nymera",
    "Bolvar",
    "Talan",
    "Ashen",
    "Rathgar",
    "Elyra",
    "Varok",
    "Nerzul",
    "Aranel",
    "Morgash",
    "Faelina",
    "Thalor",
    "Drokhan",
    "Isalyn",
    "Rogar",
    "Velgrim",
    "Saelia",
    "Thundar",
    "Zyra",
    "Korga",
    "Maelyn",
    "Grelok",
    "Ylissa",
    "Dorak",
    "Ariya",
    "Thundro",
    "Sylia",
    "Kazgarn",
    "Esmara",
    "Kragthar",
    "Alenya",
    "Vorgrim",
    "Melira",
    "Xarn",
    "Ysera",
    "Raknor",
    "Lirael",
  ];

  const razze = [
    "Umano",
    "Nano",
    "Elfo della Notte",
    "Gnomi",
    "Draenei",
    "Worgen",
    "Pandaren",
    "Elfo del Vuoto",
    "Draenei Forgialuce",
    "Nani Ferroscuro",
    "Meccagnomi",
    "Umano di Kul Tiras",
    "Troll Zandalari",
    "Elfo del Sangue",
    "Orco",
    "Non Morto",
    "Troll",
    "Tauren",
    "Goblin",
    "Pandaren (Orda)",
    "Orco Mag'har",
    "Tauren di Alto Monte",
    "Elfo del Vuoto",
    "Nani Ferroscuro",
    "Tauren Runici",
    "Vulpera",
    "Troll Sandalari",
    "Drachen",
    "Dracthyr",
  ];

  const classi = [
    "Guerriero",
    "Paladino",
    "Cacciatore",
    "Ladro",
    "Sacerdote",
    "Cavaliere della Morte",
    "Sciamano",
    "Mago",
    "Stregone",
    "Monaco",
    "Druido",
    "Cacciatore di Demoni",
    "Evocatore",
  ];
  const fazionePerRazza = {
    Umano: ["Alleanza"],
    Nano: ["Alleanza"],
    "Elfo della Notte": ["Alleanza"],
    Gnomi: ["Alleanza"],
    Draenei: ["Alleanza"],
    Worgen: ["Alleanza"],
    "Elfo del Vuoto": ["Alleanza"],
    "Draenei Forgialuce": ["Alleanza"],
    "Nani Ferroscuro": ["Alleanza"],
    Meccagnomi: ["Alleanza"],
    "Umano di Kul Tiras": ["Alleanza"],

    "Elfo del Sangue": ["Orda"],
    Orco: ["Orda"],
    "Non Morto": ["Orda"],
    Troll: ["Orda"],
    Tauren: ["Orda"],
    Goblin: ["Orda"],
    "Orco Mag'har": ["Orda"],
    "Tauren di Alto Monte": ["Orda"],
    "Tauren Runici": ["Orda"],
    "Troll Zandalari": ["Orda"],
    "Troll Sandalari": ["Orda"],
    Vulpera: ["Orda"],

    Pandaren: ["Alleanza", "Orda"],
    "Pandaren (Orda)": ["Orda"],
    Drachen: ["Orda"],
    Dracthyr: ["Alleanza", "Orda"],
  };

  const nomeRandom = nomi[Math.floor(Math.random() * nomi.length)];
  const razzaRandom = razze[Math.floor(Math.random() * razze.length)];
  const factionAdviable = fazionePerRazza[razzaRandom];

  let finalFaction;

  if (factionAdviable.length === 1) {
    finalFaction = factionAdviable[0];
  } else {
    finalFaction =
      factionAdviable[Math.floor(Math.random() * factionAdviable.length)];
  }

  const randomClass = classi[Math.floor(Math.random() * classi.length)];

  const level = Math.floor(Math.random() * 70) + 1;

  const personaggio = {
    nome: nomeRandom,
    razza: razzaRandom,
    fazione: finalFaction,
    classe: randomClass,
    livello: level,
  };
  return personaggio;
}
