const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

module.exports = {
  async up(db, client) {
    await db.collection('tactics').insertMany([
      {
        title: 'Phalanx Formation (Solid as a Spartan Wall)',
        information:
          'In our battles, we Spartans form a mighty phalanx, a shielded wall that moves as one, unyielding and resolute. Shoulder to shoulder, our hoplite brothers stand, spears thrust forward, shields interlocked. In this formation, we are an impenetrable fortress, advancing on the enemy with unwavering resolve, and defending against all threats as a single, unbroken unit.',
        createdAt: ISODate('2023-08-01T17:00:45.774+0000'),
        updatedAt: ISODate('2023-08-01T17:00:45.774+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Short Swords (Xiphos - The Spartan Blade)',
        information:
          'Behold the xiphos, our trusty companion in battle. A short and deadly sword, it is the embodiment of Spartan martial prowess. With the xiphos in hand, we are masters of close combat. Swift, precise, and agile, it allows us to strike with devastating effect in the heart of the melee.',
        createdAt: ISODate('2023-08-11T09:30:22.123+0000'),
        updatedAt: ISODate('2023-08-11T09:30:22.123+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Terrain Exploitation (The Spartan Advantage)',
        information:
          'Know this, young warrior, that we Spartans are masters of terrain. We do not engage the enemy on their terms, we choose the battleground that favors us most. In narrow mountain passes, treacherous ravines, and chokepoints, our smaller numbers become a shield, holding back foes many times our size. The land itself becomes our ally, and we use it to our advantage.',
        createdAt: ISODate('2023-08-21T14:15:10.456+0000'),
        updatedAt: ISODate('2023-08-21T14:15:10.456+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Psychological Warfare (The Spartan Visage)',
        information:
          'As you don your crimson cloak and bear the Lambda symbol on your shield, remember the power of appearance. We Spartans project an image of invincibility, an aura of dread that unnerves our adversaries. With our reputation for fearlessness and our unyielding spirit, we are a force to be reckoned with. Let our enemies tremble at the sight of the crimson tide, for it signals their impending doom.',
        createdAt: ISODate('2023-08-30T18:45:55.890+0000'),
        updatedAt: ISODate('2023-08-30T18:45:55.890+0000'),
        __v: NumberInt(0),
      },
    ]);
  },

  async down(db, client) {
    await db.collection('tactics').deleteMany({});
  },
};
