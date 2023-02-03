let votes = [];

const abstimmen = (wert) => {
  votes.push(wert);
  console.log(`Du hast mit ${wert} abgestimmt.`);
  console.log(
    `Der Durchschnittswert aller Votes ist ${durchschnittBerechnen()}.`
  );
};

const durchschnittBerechnen = () => {
  return votes.reduce((a, b) => a + b, 0) / votes.length;
};

// Beispielnutzung:
abstimmen(5);
abstimmen(7);
abstimmen(8);
