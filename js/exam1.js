// ===============================
// FULL EXAM 1 – IPF Technical Rulebook
// 15 Sections × 10 Questions Each
// ===============================

window.examData = {
  title: "Exam 1 – Full IPF Technical Rules Exam",
  sections: [

    // =====================================================
    // 1. GENERAL RULES OF POWERLIFTING
    // =====================================================
    {
      id: "general_rules",
      title: "1. General Rules",
      questions: [
        {
          id: "gr1",
          text: "Which lifts constitute the official IPF powerlifting disciplines?",
          options: { A:"Squat, Bench Press, Deadlift", B:"Snatch, Clean & Jerk", C:"Curl, Press, Deadlift", D:"Bench Press Only" },
          answer: "A"
        },
        { id:"gr2", text:"How many attempts are allowed per discipline?", options:{A:"2",B:"3",C:"4",D:"Unlimited"}, answer:"B" },
        { id:"gr3", text:"How many attempts are allowed for record attempts in competition?", options:{A:"None",B:"One additional attempt",C:"Two additional attempts",D:"Only if jury approves"}, answer:"B" },
        { id:"gr4", text:"Who wins if two lifters end with the same total?", options:{A:"Lighter lifter",B:"Heavier lifter",C:"Older lifter",D:"First to achieve total"}, answer:"A" },
        { id:"gr5", text:"What defines the Open age category?", options:{A:"Year you turn 14+",B:"Year you turn 19+",C:"Year you turn 23+",D:"Anyone over 40"}, answer:"B" },
        { id:"gr6", text:"What is the minimum age to compete in any IPF competition?", options:{A:"12",B:"13",C:"14",D:"15"}, answer:"C" },
        { id:"gr7", text:"How many team members score points for a national team?", options:{A:"3",B:"4",C:"5",D:"6"}, answer:"C" },
        { id:"gr8", text:"Team scoring awards how many points for 1st place?", options:{A:"7",B:"9",C:"12",D:"14"}, answer:"C" },
        { id:"gr9", text:"Which of the following is NOT allowed during competition?", options:{A:"Changing attempts verbally",B:"Changing attempts via coach card",C:"Changing attempts after final deadline",D:"Declaring rack heights"}, answer:"C" },
        { id:"gr10", text:"How many competition platforms may run simultaneously at World Championships?", options:{A:"1",B:"2",C:"3",D:"4"}, answer:"C" }
      ]
    },

    // =====================================================
    // 2. AGE & BODYWEIGHT CATEGORIES
    // =====================================================
    {
      id: "age_bodyweight",
      title: "2. Age & Bodyweight Categories",
      questions: [
        { id:"ab1", text:"Junior category ages:", options:{A:"14–18",B:"19–23",C:"24–39",D:"40–49"}, answer:"B" },
        { id:"ab2", text:"Master I begins at:", options:{A:"35",B:"40",C:"45",D:"50"}, answer:"B" },
        { id:"ab3", text:"Master II is:", options:{A:"45–54",B:"50–59",C:"55–64",D:"60–69"}, answer:"B" },
        { id:"ab4", text:"Men’s 93 kg class includes:", options:{A:"<93",B:"83.01–93.00",C:"93.01–105.00",D:"74–83"}, answer:"B" },
        { id:"ab5", text:"How many athletes per class can a nation enter?", options:{A:"1",B:"2",C:"3",D:"4"}, answer:"B" },
        { id:"ab6", text:"Preliminary nominations are due:", options:{A:"7 days before",B:"14 days",C:"21 days",D:"60 days"}, answer:"D" },
        { id:"ab7", text:"Final nominations are due:", options:{A:"7 days",B:"10 days",C:"14 days",D:"21 days"}, answer:"A" },
        { id:"ab8", text:"Women’s +84 kg class begins at:", options:{A:"84.0",B:"84.01",C:"90.0",D:"Unlimited"}, answer:"B" },
        { id:"ab9", text:"Sub-Junior includes ages:", options:{A:"14–18",B:"16–21",C:"12–17",D:"19–23"}, answer:"A" },
        { id:"ab10", text:"Which category can compete in Open?", options:{A:"Only 19–23",B:"Only 24–39",C:"Any lifter 19+",D:"Only seniors"}, answer:"C" }
      ]
    },

    // =====================================================
    // 3. EQUIPMENT & SPECIFICATIONS
    // =====================================================
    {
      id: "equipment_specs",
      title: "3. Equipment & Specifications",
      questions: [
        { id:"eq1", text:"Barbell shaft diameter must be:", options:{A:"25–27mm",B:"28–29mm",C:"29–31mm",D:"30–32mm"}, answer:"B" },
        { id:"eq2", text:"Bar + collars total weight:", options:{A:"20kg",B:"22.5kg",C:"25kg",D:"27.5kg"}, answer:"C" },
        { id:"eq3", text:"Platform surface must be:", options:{A:"Rubber",B:"Wood only",C:"Non-slip carpet",D:"Any material"}, answer:"C" },
        { id:"eq4", text:"Plate colours: 25kg = ?", options:{A:"Blue",B:"Red",C:"Yellow",D:"Green"}, answer:"B" },
        { id:"eq5", text:"Collars must weigh:", options:{A:"2.5kg each",B:"5kg each",C:"1.25kg each",D:"0.5kg each"}, answer:"A" },
        { id:"eq6", text:"Squat rack uprights must have:", options:{A:"Safety arms",B:"Spotter platforms",C:"Height increments",D:"Rope supports"}, answer:"C" },
        { id:"eq7", text:"Bench height maximum:", options:{A:"42cm",B:"45cm",C:"50cm",D:"55cm"}, answer:"C" },
        { id:"eq8", text:"Bar knurl rings spacing:", options:{A:"810mm",B:"910mm",C:"1010mm",D:"None specified"}, answer:"A" },
        { id:"eq9", text:"Deadlift bar allowable?", options:{A:"Yes",B:"No",C:"Only chrome",D:"Only 32mm bars"}, answer:"B" },
        { id:"eq10", text:"Smallest competition plate:", options:{A:"0.25kg",B:"0.5kg",C:"1kg",D:"1.25kg"}, answer:"D" }
      ]
    },

    // =====================================================
    // 4. PERSONAL EQUIPMENT
    // =====================================================
    {
      id: "personal_equipment",
      title: "4. Personal Equipment",
      questions: [
        { id:"pe1", text:"Raw lifters may wear:", options:{A:"Supportive suit",B:"Non-supportive suit",C:"No suit",D:"Two suits"}, answer:"B" },
        { id:"pe2", text:"Belts must be worn:", options:{A:"On skin",B:"Under shirt",C:"Over suit",D:"Over underwear"}, answer:"C" },
        { id:"pe3", text:"Max belt width:", options:{A:"10cm",B:"11cm",C:"12cm",D:"13cm"}, answer:"A" },
        { id:"pe4", text:"Knee sleeves allowed in equipped?", options:{A:"Yes",B:"No",C:"Only neoprene",D:"Only wraps"}, answer:"B" },
        { id:"pe5", text:"Max wrist wrap length:", options:{A:"1m",B:"1.5m",C:"1.25m",D:"1.3m"}, answer:"C" },
        { id:"pe6", text:"Supportive shirts allowed in Raw?", options:{A:"Yes",B:"No",C:"Only in Bench",D:"Only in Deadlift"}, answer:"B" },
        { id:"pe7", text:"Underwear rules:", options:{A:"Any allowed",B:"Must be cotton",C:"Must be non-supportive",D:"Supportive allowed"}, answer:"C" },
        { id:"pe8", text:"Shoes must have:", options:{A:"Any sole",B:"Non-compressible sole",C:"Heel only",D:"Rubber only"}, answer:"B" },
        { id:"pe9", text:"Knee wrap max length:", options:{A:"1.5m",B:"2m",C:"2.5m",D:"3m"}, answer:"D" },
        { id:"pe10", text:"Socks must:", options:{A:"Cover knee",B:"Cover calf",C:"Cover shins in deadlift",D:"Be optional"}, answer:"C" }
      ]
    },

    // =====================================================
    // 5. SQUAT RULES
    // =====================================================
    {
      id: "squat_rules",
      title: "5. Squat – Rules of Performance",
      questions: [
        { id:"sq1", text:"Squat must reach:", options:{A:"Parallel",B:"Below top of knee",C:"Above parallel",D:"Mid thigh"}, answer:"B" },
        { id:"sq2", text:"Command order:", options:{A:"Start–Rack",B:"Squat–Rack",C:"Down–Up",D:"Lift–Return"}, answer:"B" },
        { id:"sq3", text:"Causes of failure include:", options:{A:"Shifting feet",B:"Knees moving",C:"Not reaching depth",D:"Pausing at top"}, answer:"C" },
        { id:"sq4", text:"Spotters may:", options:{A:"Touch bar anytime",B:"Assist lifter",C:"Catch failed lift",D:"Help unrack"}, answer:"C" },
        { id:"sq5", text:"Stepping allowed?", options:{A:"Yes",B:"One step",C:"Minor foot movement allowed",D:"Not at all"}, answer:"C" },
        { id:"sq6", text:"Bar placement must be:", options:{A:"High only",B:"Low only",C:"Any on back",D:"On neck"}, answer:"C" },
        { id:"sq7", text:"Hands must:", options:{A:"Stay closed",B:"Grip bar",C:"Be anywhere on bar",D:"Not touch plates"}, answer:"C" },
        { id:"sq8", text:"Double bounce allowed?", options:{A:"Yes",B:"No",C:"If subtle",D:"Only Raw"}, answer:"B" },
        { id:"sq9", text:"Upward movement must be:", options:{A:"Continuous",B:"Pausing allowed",C:"Stop-start allowed",D:"Reset allowed"}, answer:"A" },
        { id:"sq10", text:"Bar must settle:", options:{A:"Within 2s",B:"Before squat command",C:"After lift",D:"Not required"}, answer:"B" }
      ]
    },

    // =====================================================
    // 6. BENCH PRESS RULES
    // =====================================================
    {
      id: "bench_rules",
      title: "6. Bench Press – Rules of Performance",
      questions: [
        { id:"bp1", text:"Feet must:", options:{A:"Be flat",B:"Touch floor or blocks",C:"Be elevated",D:"Not matter"}, answer:"B" },
        { id:"bp2", text:"Commands are:", options:{A:"Start–Down–Up",B:"Bar–Lift–Rack",C:"Start–Press–Rack",D:"Start–Go–Rack"}, answer:"C" },
        { id:"bp3", text:"Bar must:", options:{A:"Touch chest",B:"Hover",C:"Touch shirt only",D:"Not touch"}, answer:"A" },
        { id:"bp4", text:"Heels may:", options:{A:"Be off floor",B:"Be raised",C:"Ground contact required",D:"Not be on bench"}, answer:"C" },
        { id:"bp5", text:"Hips must:", options:{A:"Stay down",B:"May rise",C:"Can move",D:"Must touch bar"}, answer:"A" },
        { id:"bp6", text:"Lift-off allowed by:", options:{A:"Anyone",B:"Spotters only",C:"Coach",D:"Chief referee"}, answer:"B" },
        { id:"bp7", text:"Head may:", options:{A:"Lift",B:"Stay down",C:"Either depending rules",D:"Touch bar"}, answer:"B" },
        { id:"bp8", text:"Frozen bar path allowed?", options:{A:"Yes",B:"No downward movement",C:"Only if stable",D:"Only Raw"}, answer:"B" },
        { id:"bp9", text:"Bar must be:", options:{A:"Evenly gripped",B:"Off centre allowed",C:"Gripped with hook grip",D:"Held with open palms"}, answer:"A" },
        { id:"bp10", text:"Bench shirt allowed in Raw?", options:{A:"Yes",B:"No",C:"Only in extras",D:"Only with jury"}, answer:"B" }
      ]
    },

    // =====================================================
    // 7. DEADLIFT RULES
    // =====================================================
    {
      id: "deadlift_rules",
      title: "7. Deadlift – Rules of Performance",
      questions: [
        { id:"dl1", text:"Deadlift commands are:", options:{A:"Start–Hold–Down",B:"Lift–Down",C:"Up–Down",D:"Start–Finish"}, answer:"B" },
        { id:"dl2", text:"Bar must be pulled:", options:{A:"In one motion",B:"With hitch allowed",C:"Rest on thighs",D:"Bar roll allowed"}, answer:"A" },
        { id:"dl3", text:"Hitching is:", options:{A:"Allowed",B:"Minor allowed",C:"Not allowed",D:"Only Raw"}, answer:"C" },
        { id:"dl4", text:"At lockout knees:", options:{A:"Soft allowed",B:"Must be locked",C:"May shake",D:"May bend"}, answer:"B" },
        { id:"dl5", text:"Shoulders must:", options:{A:"Be pulled back",B:"Roll forward",C:"Be shrugged",D:"Touch ears"}, answer:"A" },
        { id:"dl6", text:"Dropping bar:", options:{A:"Allowed",B:"If controlled",C:"Not allowed",D:"Allowed raw"}, answer:"C" },
        { id:"dl7", text:"Supporting bar on thighs:", options:{A:"Allowed",B:"Not allowed",C:"Allowed equipped",D:"Not relevant"}, answer:"B" },
        { id:"dl8", text:"Downward movement before lockout:", options:{A:"Allowed",B:"Small allowed",C:"Not allowed",D:"Only Raw"}, answer:"C" },
        { id:"dl9", text:"Mixed grip allowed?", options:{A:"Yes",B:"No",C:"Only in Raw",D:"Only in equipped"}, answer:"A" },
        { id:"dl10", text:"Sumo stance:", options:{A:"Not allowed",B:"Allowed",C:"Equipped only",D:"Worlds only"}, answer:"B" }
      ]
    },

    // =====================================================
    // 8. WEIGH-IN
    // =====================================================
    {
      id: "weigh_in",
      title: "8. Weigh-In",
      questions: [
        { id:"wi1", text:"Weigh-in begins:", options:{A:"1 hour before",B:"2 hours before",C:"3 hours",D:"30 minutes"}, answer:"B" },
        { id:"wi2", text:"Weigh-in lasts:", options:{A:"30 mins",B:"1 hour",C:"2 hours",D:"Indefinite"}, answer:"C" },
        { id:"wi3", text:"Lifters weigh-in:", options:{A:"Clothed",B:"Undressed",C:"Shoes allowed",D:"Any attire"}, answer:"B" },
        { id:"wi4", text:"Who may attend weigh-in?", options:{A:"Anyone",B:"One coach only",C:"Ref & lifter only",D:"Media allowed"}, answer:"C" },
        { id:"wi5", text:"Random kit check may occur:", options:{A:"Before weigh-in",B:"During weigh-in",C:"At any time",D:"Only post-lift"}, answer:"C" },
        { id:"wi6", text:"If overweight:", options:{A:"Disqualified",B:"Allowed re-weigh within time",C:"Move up class",D:"Free choice"}, answer:"B" },
        { id:"wi7", text:"Attempt cards submitted:", options:{A:"Before weigh-in",B:"During",C:"After weigh-in",D:"Never"}, answer:"C" },
        { id:"wi8", text:"Strapping/wraps:", options:{A:"Allowed in weigh",B:"Removed at weigh-in",C:"Optional",D:"Depends class"}, answer:"B" },
        { id:"wi9", text:"Platform attempts start:", options:{A:"Immediately after weigh-in",B:"At posted schedule",C:"Only when jury ready",D:"At coach request"}, answer:"B" },
        { id:"wi10", text:"Lifter must be:", options:{A:"Exactly their nominated class",B:"Within class limits",C:"Under 1kg leeway",D:"Exact match to gram"}, answer:"B" }
      ]
    },

    // =====================================================
    // 9. ORDER OF COMPETITION & ROUND SYSTEM
    // =====================================================
    {
      id: "order_comp",
      title: "9. Order of Competition & Round System",
      questions: [
        { id:"oc1", text:"Attempts are ordered by:", options:{A:"Alphabet",B:"Lot number",C:"Requested weight",D:"Country"}, answer:"C" },
        { id:"oc2", text:"Lot number decides:", options:{A:"Weigh-in order",B:"Rack height",C:"Platform weight",D:"Spotter order"}, answer:"A" },
        { id:"oc3", text:"Risers allowed for:", options:{A:"Squat",B:"Bench",C:"Deadlift",D:"Any lift"}, answer:"B" },
        { id:"oc4", text:"When must next attempt be submitted?", options:{A:"10s after lift",B:"30s",C:"60s",D:"Before platform"}, answer:"C" },
        { id:"oc5", text:"Round system means:", options:{A:"All 3 attempts per lifter",B:"All lifters do attempt 1 first",C:"All squats first",D:"Same bar for all"}, answer:"B" },
        { id:"oc6", text:"Bar loaded to:", options:{A:"Heaviest first",B:"Lightest first",C:"Coach choice",D:"Referee choice"}, answer:"B" },
        { id:"oc7", text:"Timing: lifter has:", options:{A:"30s",B:"1 min",C:"90s",D:"2 min"}, answer:"B" },
        { id:"oc8", text:"If following themselves:", options:{A:"Extra 30s",B:"Extra 1 minute",C:"No extra time",D:"Reduced time"}, answer:"B" },
        { id:"oc9", text:"Bar changes allowed within:", options:{A:"Any time",B:"Before lifter called",C:"After ‘bar loaded’",D:"Post lift"}, answer:"B" },
        { id:"oc10", text:"Lifter not ready:", options:{A:"Disqualified",B:"Skip attempt",C:"Clock runs",D:"Reset clock"}, answer:"C" }
      ]
    },

    // =====================================================
    // 10. REFEREES
    // =====================================================
    {
      id: "referees",
      title: "10. Referees",
      questions: [
        { id:"ref1", text:"Three referees include:", options:{A:"Chief + 2 side",B:"2 chief",C:"4 total",D:"Jury included"}, answer:"A" },
        { id:"ref2", text:"Ref chair:", options:{A:"Back",B:"Front",C:"Anywhere",D:"Side"}, answer:"B" },
        { id:"ref3", text:"Ref signals:", options:{A:"Voice",B:"Lights",C:"Voice + hand",D:"Lights + commands"}, answer:"D" },
        { id:"ref4", text:"Side refs watch:", options:{A:"Feet",B:"Torso only",C:"Whole lift",D:"Only lockout"}, answer:"C" },
        { id:"ref5", text:"White lights required:", options:{A:"1",B:"2",C:"3",D:"Unanimous"}, answer:"B" },
        { id:"ref6", text:"Ref clothing:", options:{A:"Any",B:"Formal",C:"IPF uniform",D:"Black only"}, answer:"C" },
        { id:"ref7", text:"Replacement refs:", options:{A:"On request",B:"Jury assigns",C:"Coach vote",D:"Automatic"}, answer:"B" },
        { id:"ref8", text:"Ref cannot:", options:{A:"Judge friend",B:"Use phone",C:"Coach lifter",D:"All of these"}, answer:"D" },
        { id:"ref9", text:"Chief ref controls:", options:{A:"Lights",B:"Commands",C:"Spotters",D:"Jury"}, answer:"B" },
        { id:"ref10", text:"Ref must pass:", options:{A:"Fitness test",B:"IPF exam",C:"Coach course",D:"None"}, answer:"B" }
      ]
    },

    // =====================================================
    // 11. JURY
    // =====================================================
    {
      id: "jury",
      title: "11. Jury",
      questions: [
        { id:"jy1", text:"Jury has:", options:{A:"1",B:"2",C:"3",D:"5 members"}, answer:"C" },
        { id:"jy2", text:"Jury may:", options:{A:"Overrule ref",B:"Change attempt",C:"Coach",D:"Load bar"}, answer:"A" },
        { id:"jy3", text:"Jury can replace:", options:{A:"Lifters",B:"Referees",C:"Spotters",D:"Coaches"}, answer:"B" },
        { id:"jy4", text:"Jury decision is:", options:{A:"Advisory",B:"Optional",C:"Final",D:"Temporary"}, answer:"C" },
        { id:"jy5", text:"Jury reviews:", options:{A:"Videos",B:"Cards",C:"All evidence",D:"Only complaints"}, answer:"C" },
        { id:"jy6", text:"Jury may change:", options:{A:"Weight",B:"Rack height",C:"Ref decision",D:"Age class"}, answer:"C" },
        { id:"jy7", text:"Jury must:", options:{A:"Stay silent",B:"Announce rulings",C:"Wear uniform",D:"Sit on platform"}, answer:"C" },
        { id:"jy8", text:"Appeals go to:", options:{A:"Spotters",B:"Jury",C:"Other teams",D:"Chief ref"}, answer:"B" },
        { id:"jy9", text:"Jury can stop:", options:{A:"Warm-ups",B:"Lift mid-attempt",C:"Session",D:"Team scoring"}, answer:"C" },
        { id:"jy10", text:"Jury may dismiss ref if:", options:{A:"Wrong call",B:"Bias",C:"Incompetence",D:"All of these"}, answer:"D" }
      ]
    },

    // =====================================================
    // 12. RECORDS
    // =====================================================
    {
      id: "records",
      title: "12. Records",
      questions: [
        { id:"rc1", text:"Record attempts must be:", options:{A:"Planned 24h prior",B:"Within attempts",C:"Between flights",D:"After event"}, answer:"B" },
        { id:"rc2", text:"When can a 4th attempt occur?", options:{A:"Anytime",B:"Only record attempt",C:"Only bench",D:"Only sub-junior"}, answer:"B" },
        { id:"rc3", text:"World records require:", options:{A:"3 white lights",B:"2 white",C:"1 white",D:"None"}, answer:"A" },
        { id:"rc4", text:"Record plates must:", options:{A:"Be IPF approved",B:"Be coloured",C:"Be any",D:"Be metal"}, answer:"A" },
        { id:"rc5", text:"Records recognised from:", options:{A:"Training",B:"Local meets",C:"IPF sanctioned meets",D:"Unofficial"}, answer:"C" },
        { id:"rc6", text:"Weigh-in must be:", options:{A:"Videoed",B:"Standard IPF",C:"Coach verified",D:"Open to media"}, answer:"B" },
        { id:"rc7", text:"Record attempt failure gives:", options:{A:"No score",B:"Normal attempt result",C:"Bonus attempt",D:"Automatic reorder"}, answer:"B" },
        { id:"rc8", text:"Deadlift 4th attempts allowed:", options:{A:"Yes",B:"No",C:"Only team events",D:"Only for medals"}, answer:"B" },
        { id:"rc9", text:"Records reset if:", options:{A:"Weight classes change",B:"Coach changed",C:"Platform changed",D:"New plates bought"}, answer:"A" },
        { id:"rc10", text:"Which lifts have records?", options:{A:"Squat & Total",B:"Bench",C:"Deadlift",D:"All of these"}, answer:"D" }
      ]
    },

    // =====================================================
    // 13. CLASSIC (RAW) RULES
    // =====================================================
    {
      id: "classic_rules",
      title: "13. Classic (Raw) Rules",
      questions: [
        { id:"cr1", text:"Raw allows:", options:{A:"Supportive shirt",B:"Wraps only",C:"Sleeves only",D:"Sleeves & non-supportive suit"}, answer:"D" },
        { id:"cr2", text:"Knee wraps in Raw:", options:{A:"Allowed",B:"Not allowed",C:"Allowed only 1m",D:"Allowed deadlift only"}, answer:"B" },
        { id:"cr3", text:"Wrist wraps allowed?", options:{A:"Yes",B:"No",C:"Bench only",D:"Squat only"}, answer:"A" },
        { id:"cr4", text:"Knee sleeves:", options:{A:"Optional",B:"Mandatory",C:"Forbidden",D:"Only youth"}, answer:"A" },
        { id:"cr5", text:"Belt allowed?", options:{A:"Yes",B:"No",C:"Equipped only",D:"Deadlift only"}, answer:"A" },
        { id:"cr6", text:"Shoes must be:", options:{A:"Flexible",B:"Any type",C:"Non-compressible",D:"High heel only"}, answer:"C" },
        { id:"cr7", text:"Elbow sleeves:", options:{A:"Allowed",B:"Not allowed",C:"Bench only",D:"Squat only"}, answer:"B" },
        { id:"cr8", text:"Singlet must be:", options:{A:"Supportive",B:"Non supportive",C:"Optional",D:"Metallic"}, answer:"B" },
        { id:"cr9", text:"Socks in deadlift:", options:{A:"Optional",B:"Must cover shins",C:"Not allowed",D:"Only knee-high"}, answer:"B" },
        { id:"cr10", text:"Chalk allowed?", options:{A:"Yes",B:"No",C:"Only bench",D:"Only squat"}, answer:"A" }
      ]
    },

    // =====================================================
    // 14. SPONSOR LOGOS
    // =====================================================
    {
      id: "sponsor_logos",
      title: "14. Sponsor Logos",
      questions: [
        { id:"sl1", text:"Logos allowed on:", options:{A:"Suit & shirt",B:"Only shirt",C:"Only belt",D:"Not allowed"}, answer:"A" },
        { id:"sl2", text:"Logo size:", options:{A:"Any size",B:"Restricted",C:"1cm only",D:"Only sleeves"}, answer:"B" },
        { id:"sl3", text:"Manufacturer logos:", options:{A:"Unlimited",B:"One per item",C:"Two per item",D:"Banned"}, answer:"B" },
        { id:"sl4", text:"Club logos:", options:{A:"Allowed",B:"Not allowed",C:"Only national",D:"Only at Worlds"}, answer:"A" },
        { id:"sl5", text:"Political slogans:", options:{A:"Allowed",B:"Allowed small",C:"Forbidden",D:"Only with jury"}, answer:"C" },
        { id:"sl6", text:"Equipment logos:", options:{A:"IPF approved only",B:"Any brand",C:"None allowed",D:"Only on plates"}, answer:"A" },
        { id:"sl7", text:"Religious statements:", options:{A:"Allowed",B:"Not allowed",C:"Only small",D:"At discretion"}, answer:"B" },
        { id:"sl8", text:"Logo placement rules:", options:{A:"Strict",B:"None",C:"Random",D:"Only referees know"}, answer:"A" },
        { id:"sl9", text:"Altered logos:", options:{A:"Allowed",B:"Forbidden",C:"Allowed if small",D:"Allowed Raw only"}, answer:"B" },
        { id:"sl10", text:"Unapproved sponsor logos:", options:{A:"Allowed",B:"Not allowed",C:"Allowed if taped",D:"Allowed if hidden"}, answer:"B" }
      ]
    },

    // =====================================================
    // 15. COACH RESPONSIBILITIES
    // =====================================================
    {
      id: "coach_responsibilities",
      title: "15. Coach Responsibilities",
      questions: [
        { id:"co1", text:"Coach may:", options:{A:"Call attempts",B:"Replace ref",C:"Set bar height personally",D:"Load bar"}, answer:"A" },
        { id:"co2", text:"Coach card used for:", options:{A:"Music",B:"Attempts",C:"Weigh-in",D:"Badge check"}, answer:"B" },
        { id:"co3", text:"Coach must not:", options:{A:"Enter platform uninvited",B:"Advise lifter",C:"Hold wrap",D:"Give liftoff"}, answer:"A" },
        { id:"co4", text:"Coach may request:", options:{A:"Clock reset",B:"Rack change",C:"Shoes",D:"Spotter change"}, answer:"B" },
        { id:"co5", text:"Coaches must wear:", options:{A:"Any clothing",B:"Team uniform",C:"Ref uniform",D:"Gym gear"}, answer:"B" },
        { id:"co6", text:"Coach area located:", options:{A:"Platform",B:"Warm-up",C:"Audience",D:"Wherever"}, answer:"B" },
        { id:"co7", text:"Coach may appeal to:", options:{A:"Spotter",B:"Jury",C:"Audience",D:"Announcer"}, answer:"B" },
        { id:"co8", text:"Coach must:", options:{A:"Study rules",B:"Lift for lifter",C:"Decide attempts only",D:"Handle scoring"}, answer:"A" },
        { id:"co9", text:"Coach interference leads to:", options:{A:"Nothing",B:"Warning",C:"Yellow card",D:"Disqualification"}, answer:"D" },
        { id:"co10", text:"Which is NOT a coach duty?", options:{A:"Attempt selection",B:"Warm-up guidance",C:"Platform coaching",D:"Alter bar load manually"}, answer:"D" }
      ]
    }

  ]
};
