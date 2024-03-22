export const turavezetoLeiras = {
  name: {
    megjelenes: "Név",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  email: {
    megjelenes: "email",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  cim: {
    megjelenes: "Cím",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  telefonszam: {
    megjelenes: "Telefonszám",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  belepesdatuma: {
    megjelenes: "Belépés dátuma",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },
};

export const turavezetoKULCS = {
  id: "#",
  name: "Név",
  email: "email",
  cim: "Cím",
  telefonszam: "Telefonszám",
  belepesdatuma: "Belépés dátuma",
};

export const turatipusLeiras = {
  turanev: {
    megjelenes: "Túra neve",
    tipus: "text",
    placeholder: "Példa",
    pattern: "^[A-Z][a-z]{3}",
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: true,
  },

  tajegyseg: {
    megjelenes: "Tájegység",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  nehezseg: {
    megjelenes: "Nehézség",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  tavolsag: {
    megjelenes: "Távolság",
    tipus: "number",
    value: "100",
    pattern: {},
    szoveg: "1000 és 2023 közötti számot adhat meg!",
    required: false,
  },

  szintkulonbseg: {
    megjelenes: "Szintkülönbség",
    tipus: "number",
    value: "100",
    pattern: {},
    szoveg: "1000 és 2023 közötti számot adhat meg!",
    required: false,
  },

  kerekpar: {
    megjelenes: "Kerékpár",
    tipus: "number",
    value: "100",
    pattern: {},
    szoveg: "1000 és 2023 közötti számot adhat meg!",
    required: false,
  },

  indulashelye: {
    megjelenes: "Indulas helye",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  erkezeshelye: {
    megjelenes: "Érkezes helye",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },

  leiras: {
    megjelenes: "Leírás",
    tipus: "text",
    value: "Példa",
    pattern: {},
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!!",
    required: false,
  },
};

export const turatipusKULCS = {
  tipus_id: "#",
  turanev: "Túra neve",
  tajegyseg: "Tájegység",
  nehezseg: "Nehézség",
  tavolsag: "Távolság",
  szintkulonbseg: "Szintkülönbség",
  kerekpar: "Kerékpár",
  indulashelye: "Indulás helye",
  erkezeshelye: "Érkezés helye",
  leiras: "Leírás",
};

export const turaLeiras = {
  idopont: {
    megjelenes: "Időpont",
    tipus: "text",
    placeholder: "Dátum",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  turavezeto: {
    megjelenes: "Túra vezetője",
    tipus: "text",
    placeholder: "Túra vezetője",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  ar: {
    megjelenes: "Ár",
    tipus: "text",
    placeholder: "Ár",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  min_letszam: {
    megjelenes: "Minimum létszám",
    tipus: "text",
    placeholder: "Minimum létszám",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  max_letszam: {
    megjelenes: "Maximum létszám",
    tipus: "text",
    placeholder: "Maximum létszám",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  statusz: {
    megjelenes: "Státusz",
    tipus: "text",
    placeholder: "Státusz",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },
};

export const turaKULCS = {
  id: "#",
  tipus_id: "Típus ID",
  idopont: "Turaidőpont",
  turavezeto: "Túra vezetője",
  ar: "Ár",
  min_letszam: "Minimum létszám",
  max_letszam: "Maximum létszám",
  statusz: "Státusz",
};

export const userLeiras = {
  email: {
    megjelenes: "e-mail",
    tipus: "text",
    placeholder: "e-mail",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },

  password: {
    megjelenes: "Jeleszó",
    tipus: "text",
    placeholder: "Jeleszó",
    pattern: {},
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
    required: false,
  },
};

export const userKULCS = {
  id: "#",
  name: "Név",
  email: "e-mail",
  regisztracio_datuma: "Regisztráció dátuma",
  telefonszam: "Telefonszám",
  password: "Jelszó",
};
