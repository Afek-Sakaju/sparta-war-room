const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

module.exports = {
  async up(db, client) {
    await db.collection('announcements').insertMany([
      {
        title: 'New Spears at The Main Blacksmith of Athens !',
        description:
          'The venerable blacksmith hath completed the forging of three hundred spears, a token of gratitude unto the valiant Spartan army, in recognition of their stalwart defense of Greece.',
        announcer: 'Xenophon',
        createdAt: ISODate('2023-09-01T17:00:45.774+0000'),
        updatedAt: ISODate('2023-09-01T17:00:45.774+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Month of Valor - Spartan Training',
        description:
          'Valiant Spartans, press onward in your training, giving your all with blood and sweat, meticulously recording our training routines and victories throughout the Month of Valor. Let it stand as proof of your unwavering commitment and unconquerable spirit.',
        announcer: 'Ephialtes',
        createdAt: ISODate('2023-09-11T09:30:22.123+0000'),
        updatedAt: ISODate('2023-09-11T09:30:22.123+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Battle of Thermopylae - Spartan Stand !',
        description:
          'Valiant warriors of Sparta, you emerged triumphant in the epic Battle of Thermopylae, where the indomitable King Leonidas and his 300 Spartans fearlessly withstood the Persian onslaught. Your steadfast heroism and selfless valor on that momentous day shall forever stand as an enduring source of inspiration for generations to come. Wear your pride, Spartans, for it is well deserved.',
        announcer: 'Herodotus',
        createdAt: ISODate('2023-09-21T14:15:10.456+0000'),
        updatedAt: ISODate('2023-09-21T14:15:10.456+0000'),
        __v: NumberInt(0),
      },
    ]);
  },

  async down(db, client) {
    await db.collection('announcements').deleteMany({});
  },
};
