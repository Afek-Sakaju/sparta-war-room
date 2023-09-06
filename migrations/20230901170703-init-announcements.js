const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

module.exports = {
  async up(db, client) {
    const announcements = [
      {
        title:
          'Spartans, Seize Your Destiny - Prepare for the Battle of Thermopylae!',
        description:
          'Spartans, this is the hour to etch your name honorably into the annals of history! The invading forces of Persia, led by King Xerxes I, threaten the very heart of Greece. Rise as one, Spartans, and let the thunder of your war cry shake the earth! With unwavering resolve and unyielding determination, stand firm against the Persian invaders, for victory is the only path forward. Today, we declare that the spirit of Sparta shall shine brighter than ever before!',
        announcer: 'Leonidas',
        createdAt: ISODate('2023-10-16T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-16T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Call to Adventure - Expedition to Mount Olympus!',
        description:
          'Spartans, heed the call of Mount Olympus! Join our expedition to the mythical peak and explore breathtaking vistas, mysterious ruins, and maybe even meet the gods! Prepare for a once-in-a-lifetime adventure as we offer you the chance to carve your name into the annals of history. Are you, brave Spartans, up for the challenge?',
        announcer: 'Hermes',
        createdAt: ISODate('2023-10-10T12:30:00.000+0000'),
        updatedAt: ISODate('2023-10-10T12:30:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Spartan Wisdom - Seek Knowledge!',
        description:
          'Spartans, in addition to your physical training, seek knowledge and wisdom. Read ancient texts, learn from the sages, and grow as warriors and scholars. Let your quest for wisdom be a testament to your unwavering commitment to excellence!',
        announcer: 'Spartan Herald',
        createdAt: ISODate('2023-10-09T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-09T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Spartan Naval Victory at the Battle of Mycale!',
        description:
          "Spartan sailors, your determination and skill have won us the Battle of Mycale. The seas bow to Sparta's might. You have upheld our honor on both land and sea.",
        announcer: 'Leotychides',
        createdAt: ISODate('2023-10-09T20:00:00.000+0000'),
        updatedAt: ISODate('2023-10-09T20:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Prepare for Naval Battle of Mycale!',
        description:
          'Spartan sailors, we sail to the Battle of Mycale to conquer the waves. Our naval prowess is unmatched. Show the Persians the might of Sparta on both land and sea!',
        announcer: 'Leotychides',
        createdAt: ISODate('2023-10-08T20:00:00.000+0000'),
        updatedAt: ISODate('2023-10-08T20:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Advanced Training - Hone Your Skills!',
        description:
          'Spartans, it is time to take your training to the next level. Push your limits, sharpen your combat skills, and achieve greatness. Record your progress as a testament to your unwavering dedication and indomitable spirit!',
        announcer: 'Spartan Herald',
        createdAt: ISODate('2023-10-07T22:00:00.000+0000'),
        updatedAt: ISODate('2023-10-07T22:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Triumph at the Battle of Plataea!',
        description:
          'Valiant warriors of Sparta, you have achieved glory at the Battle of Plataea. Together with our Greek allies, you stood strong against the Persian invaders and secured a decisive victory. Your unity and bravery inspire us all.',
        announcer: 'Pausanias',
        createdAt: ISODate('2023-10-07T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-07T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Prepare for the Battle of Plataea!',
        description:
          'Valiant warriors of Sparta, prepare yourselves for the upcoming Battle of Plataea. Together with our Greek allies, we will stand strong against the Persian invaders and secure a decisive victory. Sharpen your blades, for the fate of Greece rests on your shoulders!',
        announcer: 'Pausanias',
        createdAt: ISODate('2023-10-06T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-06T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Victory Over the Wolf Menace - Sparta Prevails!',
        description:
          'Valiant warriors of Sparta! You have successfully defended the city against the relentless wolf attacks that threatened our people. Through your unwavering courage and steadfast determination, you have driven the wolf menace back into the wild. We celebrate the safety of our city, let this victory stand as a testament to the indomitable spirit of Sparta!',
        announcer: 'Spartan Council',
        createdAt: ISODate('2023-10-05T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-05T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Wolves Attack - Rally to Protect the City!',
        description:
          'Urgent call to all Spartans! Packs of fierce wolves have launched a series of relentless attacks on our city, threatening the safety, security, and well-being of our people. We must stand together to protect our homes and loved ones, join the defense effort, sharpen your blades, and ready your shields!',
        announcer: 'City Council',
        createdAt: ISODate('2023-10-04T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-04T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Train yourself!',
        description:
          'Valiant Spartans, press onward in your training, giving your all with blood and sweat, meticulously recording our training routines and victories throughout the Month of Valor. Let it stand as proof of your unwavering commitment and unconquerable spirit!',
        announcer: 'Spartan Herald',
        createdAt: ISODate('2023-10-03T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-03T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'New Spears at The Main Blacksmith of Greece!',
        description:
          'The venerable blacksmith hath completed the forging of three hundred spears, a token of gratitude bestowed upon our valiant Spartan army, in recognition of our stalwart defense of Greece.',
        announcer: 'Spartan council',
        createdAt: ISODate('2023-10-02T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-02T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Triumph at the Battle of Hysiae!',
        description:
          'Spartan heroes, your valor shone at the Battle of Hysiae, where you defeated the enemy and defended our homeland. Your courage is the beacon of hope for all Spartans. Keep your shields high and your spears sharp!',
        announcer: 'Theopompus',
        createdAt: ISODate('2023-10-01T09:00:00.000+0000'),
        updatedAt: ISODate('2023-10-01T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
      {
        title: 'Prepare for the Battle of Hysiae!',
        description:
          'Spartan warriors, we march to the Battle of Hysiae to defend our homeland. Gather your strength and sharpen your weapons. Victory awaits those who stand firm!',
        announcer: 'Theopompus',
        createdAt: ISODate('2023-09-30T09:00:00.000+0000'),
        updatedAt: ISODate('2023-09-30T09:00:00.000+0000'),
        __v: NumberInt(0),
      },
    ];

    await db.collection('announcements').insertMany(announcements);
  },

  async down(db, client) {
    await db.collection('announcements').deleteMany({});
  },
};
