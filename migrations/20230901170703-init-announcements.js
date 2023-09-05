const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

module.exports = {
  async up(db, client) {
    await db.collection('announcements').insertMany([
      {
        title: 'Call to Adventure - Expedition to Mount Olympus!',
        description:
          'Brave souls and aspiring adventurers, heed the call of Mount Olympus! Join our expedition to the mythical peak and explore breathtaking vistas, mysterious ruins, and maybe even meet the gods! Prepare for a once-in-a-lifetime adventure and the chance to carve your name into the annals of history. Are you up for the challenge?',
        announcer: 'Hermes',
        createdAt: ISODate('2023-10-10T12:30:00.000+0000'),
        updatedAt: ISODate('2023-10-10T12:30:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Battle of Thermopylae - Spartan Stand!',
        description:
          'Valiant warriors of Sparta, your indomitable spirit and unwavering courage led you to triumph in the epic Battle of Thermopylae, where the fearless King Leonidas and his gallant 300 Spartans valiantly withstood the relentless Persian onslaught. Your steadfast heroism and selfless valor on that momentous day shall forever stand as an enduring source of inspiration for generations to come. Wear your pride, Spartans, for it is well deserved!',
        announcer: 'Herodotus',
        createdAt: ISODate('2023-09-21T14:15:10.456+0000'),
        updatedAt: ISODate('2023-09-21T14:15:10.456+0000'),
        __v: NumberInt(0),
      },
      {
        title:
          'Spartans, Seize Your Destiny - Stand Against the Forces of Persia!',
        description:
          'Spartans, this is the hour to etch your name honorably into the annals of history! The invading forces of Persia, led by King Xerxes I, threaten the very heart of Greece. Do not falter, defenders of our land, embodiment of valor and strength. Rise as one, Spartans, and let the thunder of your war cry shake the earth! With unwavering resolve and unyielding determination, stand firm against the Persian invaders, for victory is the only path forward. Today, we declare that the spirit of Sparta shall shine brighter than ever before!',
        announcer: 'Council of Spartan Elders',
        createdAt: ISODate('2023-09-16T09:00:00.000+0000'),
        updatedAt: ISODate('2023-09-16T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Victory Over the Wolf Menace - Sparta Prevails!',
        description:
          'Great news! The valiant warriors of Sparta have successfully defended our city against the relentless wolf attacks that threatened our people. Through their unwavering courage and steadfast determination, they have driven the wolf menace back into the wild. We celebrate the valor of our Spartan defenders and the safety of our city. Let this victory stand as a testament to the indomitable spirit of Sparta!',
        announcer: 'Spartan Council',
        createdAt: ISODate('2023-09-25T08:15:00.000+0000'),
        updatedAt: ISODate('2023-09-25T08:15:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Wolves Attack - Rally to Protect the City!',
        description:
          'Urgent call to all citizens and brave defenders of our city! Packs of fierce wolves have launched a series of relentless attacks on our city, threatening the safety, security, and well-being of our people. We must stand together to protect our homes and loved ones. Join the defense effort, sharpen your blades, and ready your bows. Together, we shall drive back the wolf menace!',
        announcer: 'City Council',
        createdAt: ISODate('2023-09-20T10:00:00.000+0000'),
        updatedAt: ISODate('2023-09-20T10:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Month of Valor - Spartan Training',
        description:
          'Valiant Spartans, press onward in your training, giving your all with blood and sweat, meticulously recording our training routines and victories throughout the Month of Valor. Let it stand as proof of your unwavering commitment and unconquerable spirit!',
        announcer: 'Ephialtes',
        createdAt: ISODate('2023-09-11T09:30:22.123+0000'),
        updatedAt: ISODate('2023-09-11T09:30:22.123+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'New Spears at The Main Blacksmith of Athens!',
        description:
          'The venerable blacksmith hath completed the forging of three hundred spears, a token of gratitude bestowed upon our valiant Spartan army, in recognition of our stalwart defense of Greece.',
        announcer: 'Xenophon',
        createdAt: ISODate('2023-09-01T17:00:45.774+0000'),
        updatedAt: ISODate('2023-09-01T17:00:45.774+0000'),
        __v: NumberInt(0),
      },
    ]);
  },

  async down(db, client) {
    await db.collection('announcements').deleteMany({});
  },
};
