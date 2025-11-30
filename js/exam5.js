// ===============================
// EXAM 5 – IPF Technical Rulebook
// 15 Sections × 10 Questions Each
// ===============================

window.examData = {
  title: "Exam 5 – IPF Technical Rules (Variant D)",
  sections: [

    // =====================================================
    // 1. GENERAL RULES
    // =====================================================
    {
      id: "general_rules",
      title: "1. General Rules",
      questions: [
        {
          id:"gr5_1",
          text:"What is the foundation principle behind IPF competitions?",
          options:{A:"Lifting with maximum freedom of movement",B:"Standardised judging and equal conditions",C:"Using any personal equipment desired",D:"Allowing lifters to improvise technique"},
          answer:"B"
        },
        {
          id:"gr5_2",
          text:"How many attempts per lift does each lifter receive?",
          options:{A:"1",B:"2",C:"3",D:"Unlimited"},
          answer:"C"
        },
        {
          id:"gr5_3",
          text:"A good lift is awarded when:",
          options:{A:"At least two referees give white lights",B:"All referees agree",C:"Jury says so",D:"Audience applauds"},
          answer:"A"
        },
        {
          id:"gr5_4",
          text:"A lifter is responsible for:",
          options:{A:"Following commands and technical rules",B:"Ignoring referees",C:"Setting bar heights",D:"Loading plates"},
          answer:"A"
        },
        {
          id:"gr5_5",
          text:"A competition total consists of:",
          options:{A:"Highest squat, bench and deadlift",B:"Average of all nine attempts",C:"Heaviest single lift of the day",D:"Sum of first attempts only"},
          answer:"A"
        },
        {
          id:"gr5_6",
          text:"Failure to make a successful attempt in one lift results in:",
          options:{A:"DQ only in that lift",B:"No total for the competition",C:"Bonus attempt",D:"Reduced weight class"},
          answer:"B"
        },
        {
          id:"gr5_7",
          text:"Official language for IPF World Championships:",
          options:{A:"Host language",B:"English",C:"French",D:"Any language requested"},
          answer:"B"
        },
        {
          id:"gr5_8",
          text:"Lifters must follow rules because:",
          options:{A:"Judges don’t care otherwise",B:"It ensures fairness, comparability, and safety",C:"It shortens the meet",D:"It helps coaches pick attempts"},
          answer:"B"
        },
        {
          id:"gr5_9",
          text:"Misconduct such as abuse toward officials may result in:",
          options:{A:"Immediate disqualification",B:"Changing lot numbers",C:"Only a warning",D:"Adjusted attempt order"},
          answer:"A"
        },
        {
          id:"gr5_10",
          text:"A lifter receives 3 red lights but believes it was incorrect. Who may review it?",
          options:{A:"Audience",B:"Jury",C:"Coach only",D:"Spotters"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 2. AGE & BODYWEIGHT CATEGORIES
    // =====================================================
    {
      id:"age_bodyweight",
      title:"2. Age & Bodyweight Categories",
      questions:[
        {
          id:"ab5_1",
          text:"Age categories are based on:",
          options:{A:"Date of birth exactly",B:"Calendar year lifter reaches the category age",C:"Month of birth",D:"Coach preference"},
          answer:"B"
        },
        {
          id:"ab5_2",
          text:"A lifter weighing 58.0 kg in a women's competition fits:",
          options:{A:"52 kg",B:"57 kg",C:"63 kg",D:"84 kg"},
          answer:"B"
        },
        {
          id:"ab5_3",
          text:"Junior category includes lifters who turn:",
          options:{A:"14–18",B:"18–23",C:"24–39",D:"40+"},
          answer:"B"
        },
        {
          id:"ab5_4",
          text:"Why are bodyweight classes necessary?",
          options:{A:"To create more medals",B:"To equalise competition among similarly sized lifters",C:"To shorten meet length",D:"To determine lot number"},
          answer:"B"
        },
        {
          id:"ab5_5",
          text:"A lifter who is too heavy for their nominated class:",
          options:{A:"Is automatically disqualified",B:"May move to the next class if permitted",C:"Must compete in bench only",D:"Moves to Sub-Junior"},
          answer:"B"
        },
        {
          id:"ab5_6",
          text:"A Master II lifter is someone turning:",
          options:{A:"35–39",B:"40–49",C:"50–59",D:"60–69"},
          answer:"C"
        },
        {
          id:"ab5_7",
          text:"If two lifters achieve the same total, the tie-breaker is:",
          options:{A:"Number of attempts used",B:"Lower bodyweight",C:"Earlier attempt",D:"Coach vote"},
          answer:"B"
        },
        {
          id:"ab5_8",
          text:"Final nominations help competition organisers to:",
          options:{A:"Set warm-up times",B:"Arrange flights & schedules accurately",C:"Pick winners early",D:"Choose national teams"},
          answer:"B"
        },
        {
          id:"ab5_9",
          text:"A lifter below the lightest weight class:",
          options:{A:"Competes in the lightest class",B:"Cannot lift",C:"Must declare a higher class",D:"Lifts in exhibition only"},
          answer:"A"
        },
        {
          id:"ab5_10",
          text:"Masters lifters may:",
          options:{A:"Compete only in Masters",B:"Compete in Masters or Open",C:"Never compete in Open",D:"Only bench press"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 3. EQUIPMENT & SPECIFICATIONS
    // =====================================================
    {
      id:"equipment_specs",
      title:"3. Equipment & Specifications",
      questions:[
        {
          id:"eq5_1",
          text:"All bars used in competition must:",
          options:{A:"Be chrome only",B:"Meet IPF specs for length, weight, knurl, and diameter",C:"Be power bars only",D:"Match gym bars"},
          answer:"B"
        },
        {
          id:"eq5_2",
          text:"Which plate colour corresponds to 20 kg in IPF colour codes?",
          options:{A:"Yellow",B:"Red",C:"Blue",D:"Green"},
          answer:"C"
        },
        {
          id:"eq5_3",
          text:"Why must platform surface be non-slip?",
          options:{A:"To protect plates",B:"To prevent lifter injuries and slips",C:"To speed up spotting",D:"To save money"},
          answer:"B"
        },
        {
          id:"eq5_4",
          text:"Bench pad height and firmness affect:",
          options:{A:"Stability & fair technique",B:"Timer accuracy",C:"Plate loading speed",D:"Ref seating"},
          answer:"A"
        },
        {
          id:"eq5_5",
          text:"Calibrated plates ensure:",
          options:{A:"Better livestream",B:"Exact weight accuracy",C:"Better grip",D:"Bar rotation"},
          answer:"B"
        },
        {
          id:"eq5_6",
          text:"If bar is misloaded lighter and lifter completes it:",
          options:{A:"Lift stands",B:"Lift is normally retaken with correct weight",C:"Lift becomes heavier",D:"Lift becomes opener"},
          answer:"B"
        },
        {
          id:"eq5_7",
          text:"If bar is misloaded heavier and lifter completes it:",
          options:{A:"It is failed",B:"May count at heavier weight",C:"Must be reattempted lighter",D:"Ignored"},
          answer:"B"
        },
        {
          id:"eq5_8",
          text:"Collars must weigh:",
          options:{A:"1 kg each",B:"2.5 kg each",C:"5 kg each",D:"0.5 kg each"},
          answer:"B"
        },
        {
          id:"eq5_9",
          text:"Rack height must be set:",
          options:{A:"After 'bar loaded'",B:"Before 'bar loaded'",C:"During the attempt",D:"After squat only"},
          answer:"B"
        },
        {
          id:"eq5_10",
          text:"Bar centres must have knurling because:",
          options:{A:"It helps steadiness on the back for squat",B:"It decorates the bar",C:"It helps rack loading",D:"It is optional"},
          answer:"A"
        }
      ]
    },

    // =====================================================
    // 4. PERSONAL EQUIPMENT
    // =====================================================
    {
      id:"personal_equipment",
      title:"4. Personal Equipment",
      questions:[
        {
          id:"pe5_1",
          text:"Wrist wraps are allowed in:",
          options:{A:"Classic only",B:"Equipped only",C:"Both classic and equipped",D:"Neither"},
          answer:"C"
        },
        {
          id:"pe5_2",
          text:"Underwear must be:",
          options:{A:"Supportive",B:"Non-supportive",C:"Compression",D:"Optional"},
          answer:"B"
        },
        {
          id:"pe5_3",
          text:"Why are elbow sleeves banned in classic lifting?",
          options:{A:"Fashion reasons",B:"They provide mechanical rebound",C:"They hide tattoos",D:"They reduce sweat"},
          answer:"B"
        },
        {
          id:"pe5_4",
          text:"Belts wider than IPF specifications:",
          options:{A:"Are allowed in classic",B:"Are banned",C:"Allowed with jury approval",D:"Allowed for deadlift"},
          answer:"B"
        },
        {
          id:"pe5_5",
          text:"In equipped lifting, supportive suits:",
          options:{A:"May only be non-IPF brands",B:"Must be IPF-approved",C:"Are optional but must be loose",D:"Cannot be worn"},
          answer:"B"
        },
        {
          id:"pe5_6",
          text:"Shoes must have:",
          options:{A:"Any sole",B:"Soft unstable sole",C:"Firm and stable sole",D:"Knitted fibre base"},
          answer:"C"
        },
        {
          id:"pe5_7",
          text:"Knee wraps are permitted in:",
          options:{A:"Classic and equipped",B:"Equipped only",C:"Classic only",D:"Neither"},
          answer:"B"
        },
        {
          id:"pe5_8",
          text:"Jewellery is banned mainly because:",
          options:{A:"It looks unprofessional",B:"It may get caught and cause injury",C:"It distracts audience",D:"It affects bar weight"},
          answer:"B"
        },
        {
          id:"pe5_9",
          text:"T-shirt under the singlet in classic:",
          options:{A:"Must be supportive",B:"Must be non-supportive",C:"Is banned",D:"Must match singlet colour"},
          answer:"B"
        },
        {
          id:"pe5_10",
          text:"If illegal gear is discovered mid-lift:",
          options:{A:"Attempt continues",B:"Attempt fails",C:"Attempt is retaken",D:"Coach decides"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 5. SQUAT RULES
    // =====================================================
    {
      id:"squat_rules",
      title:"5. Squat Rules",
      questions:[
        {
          id:"sq5_1",
          text:"Legal squat depth requires:",
          options:{A:"Hip crease below the knee’s top",B:"Thigh parallel",C:"Hip crease above knee",D:"Flat back only"},
          answer:"A"
        },
        {
          id:"sq5_2",
          text:"Before ‘Squat’ lifter must:",
          options:{A:"Descend early",B:"Stand motionless with knees locked",C:"Look at referee",D:"Lean forward"},
          answer:"B"
        },
        {
          id:"sq5_3",
          text:"Downward movement after ascent begins:",
          options:{A:"Allowed occasionally",B:"Always causes failure",C:"Allowed equipped only",D:"Allowed if small"},
          answer:"B"
        },
        {
          id:"sq5_4",
          text:"Bar must be positioned:",
          options:{A:"On chest",B:"Across shoulders/back",C:"Below hips",D:"On arms"},
          answer:"B"
        },
        {
          id:"sq5_5",
          text:"Racking before command results in:",
          options:{A:"Automatic pass",B:"Failure",C:"Retake option",D:"Record review"},
          answer:"B"
        },
        {
          id:"sq5_6",
          text:"Spotters may assist ONLY when:",
          options:{A:"Lifter asks",B:"Lifter is in danger/failing",C:"Lifter is slow",D:"Lifter is deep enough"},
          answer:"B"
        },
        {
          id:"sq5_7",
          text:"Double bounce is:",
          options:{A:"Legal",B:"Illegal",C:"Allowed raw only",D:"Allowed equipped only"},
          answer:"B"
        },
        {
          id:"sq5_8",
          text:"Foot movement allowed:",
          options:{A:"During ascent",B:"Only minor before command",C:"After walkout anytime",D:"Any movement"},
          answer:"B"
        },
        {
          id:"sq5_9",
          text:"Descent must be:",
          options:{A:"One continuous motion",B:"Paused halfway",C:"Performed bouncing",D:"Guided by coach"},
          answer:"A"
        },
        {
          id:"sq5_10",
          text:"One reason squat may fail:",
          options:{A:"Feet flat",B:"Bar path straight",C:"Insufficient depth",D:"Look forward"},
          answer:"C"
        }
      ]
    },

    // =====================================================
    // 6. BENCH PRESS RULES
    // =====================================================
    {
      id:"bench_rules",
      title:"6. Bench Press Rules",
      questions:[
        {
          id:"bp5_1",
          text:"Start command given when:",
          options:{A:"Spotter touches bar",B:"Bar held motionless at arm’s length",C:"Feet moving",D:"Back lifting"},
          answer:"B"
        },
        {
          id:"bp5_2",
          text:"Press command requires:",
          options:{A:"Bar motionless on chest",B:"Quick touch and go",C:"Arm bend mid-air",D:"Spotter signal"},
          answer:"A"
        },
        {
          id:"bp5_3",
          text:"Cause of failure:",
          options:{A:"Wide grip",B:"Uneven lockout with one arm not finishing",C:"Flat feet",D:"Slow descent"},
          answer:"B"
        },
        {
          id:"bp5_4",
          text:"Feet must:",
          options:{A:"Contact floor firmly",B:"Float above ground",C:"Rest on spotters",D:"Be crossed"},
          answer:"A"
        },
        {
          id:"bp5_5",
          text:"Head contact requirement:",
          options:{A:"Must stay on bench",B:"Can lift anytime",C:"Only required in equipped",D:"Optional for Open"},
          answer:"A"
        },
        {
          id:"bp5_6",
          text:"Buttocks must:",
          options:{A:"Stay on bench",B:"May lift slightly",C:"Rest on thighs",D:"Be off bench during press"},
          answer:"A"
        },
        {
          id:"bp5_7",
          text:"Downward bar movement after press command:",
          options:{A:"Permitted once",B:"Fails lift",C:"Allowed raw only",D:"Considered pause"},
          answer:"B"
        },
        {
          id:"bp5_8",
          text:"Rack command occurs when:",
          options:{A:"Bar stops moving",B:"Elbows locked and stable",C:"Coach shouts",D:"Spotter chooses"},
          answer:"B"
        },
        {
          id:"bp5_9",
          text:"Open-hand (suicide) grip:",
          options:{A:"Always allowed",B:"Forbidden if rules require thumbs-around",C:"Required for wide grip",D:"Allowed juniors only"},
          answer:"B"
        },
        {
          id:"bp5_10",
          text:"If lifter moves hands after Start command:",
          options:{A:"Lift continues",B:"Lift fails",C:"Jury decides immediately",D:"Only 1 red light"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 7. DEADLIFT RULES
    // =====================================================
    {
      id:"deadlift_rules",
      title:"7. Deadlift Rules",
      questions:[
        {
          id:"dl5_1",
          text:"Deadlift begins when:",
          options:{A:"Coach says go",B:"Bar is called loaded",C:"Spotters unload bar",D:"Timer ends"},
          answer:"B"
        },
        {
          id:"dl5_2",
          text:"Bar must be lifted:",
          options:{A:"With knees locked and shoulders back at top",B:"Any position",C:"Only with bounce",D:"Only strapped"},
          answer:"A"
        },
        {
          id:"dl5_3",
          text:"Hitching defined as:",
          options:{A:"Rolling bar pre-pull",B:"Resting bar on thighs during ascent",C:"Fast pull",D:"Wide stance"},
          answer:"B"
        },
        {
          id:"dl5_4",
          text:"At lockout lifter must wait for:",
          options:{A:"Coach clap",B:"Down command",C:"Spotter nod",D:"Lights"},
          answer:"B"
        },
        {
          id:"dl5_5",
          text:"Grip options include:",
          options:{A:"Mixed, hook, double overhand",B:"Straps only",C:"Hook only",D:"Mixed only"},
          answer:"A"
        },
        {
          id:"dl5_6",
          text:"Dropping the bar:",
          options:{A:"Allowed",B:"Fails lift",C:"Allowed equipped only",D:"Allowed sub-junior only"},
          answer:"B"
        },
        {
          id:"dl5_7",
          text:"Feet must:",
          options:{A:"Move freely",B:"Remain fixed until down command",C:"Hop mid-lift",D:"Step backwards for lockout"},
          answer:"B"
        },
        {
          id:"dl5_8",
          text:"Blood on bar must be:",
          options:{A:"Ignored",B:"Cleaned immediately",C:"Cleaned after session",D:"Left for next lifter"},
          answer:"B"
        },
        {
          id:"dl5_9",
          text:"Sumo stance means:",
          options:{A:"Feet wide, hands inside legs",B:"Feet narrow",C:"Hands wide",D:"No lockout needed"},
          answer:"A"
        },
        {
          id:"dl5_10",
          text:"Chalk allowed on:",
          options:{A:"Hands, thighs moderately",B:"Face only",C:"Barbell sleeves",D:"Shoes only"},
          answer:"A"
        }
      ]
    },

    // =====================================================
    // 8. WEIGH-IN
    // =====================================================
    {
      id:"weigh_in",
      title:"8. Weigh-In",
      questions:[
        {
          id:"wi5_1",
          text:"Weigh-in typically starts:",
          options:{A:"1 hour before lifting",B:"2 hours before lifting",C:"After squats",D:"During bench session"},
          answer:"B"
        },
        {
          id:"wi5_2",
          text:"Duration of weigh-in:",
          options:{A:"1 hour",B:"2 hours",C:"30 minutes",D:"3 hours"},
          answer:"A"
        },
        {
          id:"wi5_3",
          text:"Who may be present at weigh-in?",
          options:{A:"Anyone",B:"Referee, lifter and possibly coach",C:"Spotters",D:"Audience"},
          answer:"B"
        },
        {
          id:"wi5_4",
          text:"If overweight on first weighing:",
          options:{A:"No re-weigh",B:"Re-weigh permitted within window",C:"Switch class anytime",D:"Immediate DQ"},
          answer:"B"
        },
        {
          id:"wi5_5",
          text:"Opening attempts submitted:",
          options:{A:"During weigh-in",B:"After squats",C:"After deadlift",D:"Whenever coach wants"},
          answer:"A"
        },
        {
          id:"wi5_6",
          text:"Weigh-in performed in private to:",
          options:{A:"Avoid spectators",B:"Protect privacy and fairness",C:"Save time",D:"Support media"},
          answer:"B"
        },
        {
          id:"wi5_7",
          text:"Missing weigh-in means:",
          options:{A:"Lift anyway",B:"Cannot compete",C:"Bench only",D:"Compete at end"},
          answer:"B"
        },
        {
          id:"wi5_8",
          text:"Scales must be:",
          options:{A:"Any gym scale",B:"Checked and accurate",C:"Digital only",D:"Coach-owned"},
          answer:"B"
        },
        {
          id:"wi5_9",
          text:"Correct bodyweight ensures:",
          options:{A:"Tie-break fairness",B:"Rack height",C:"Attempt order",D:"Equipment approval"},
          answer:"A"
        },
        {
          id:"wi5_10",
          text:"Lifter refusing weigh-in:",
          options:{A:"Allowed to choose weight",B:"Cannot compete",C:"Allowed bench only",D:"Allowed DL only"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 9. ORDER OF COMPETITION
    // =====================================================
    {
      id:"order_comp",
      title:"9. Order of Competition",
      questions:[
        {
          id:"oc5_1",
          text:"Attempts progress in:",
          options:{A:"Lightest to heaviest",B:"Heaviest to lightest",C:"Alphabetical order",D:"Coach request"},
          answer:"A"
        },
        {
          id:"oc5_2",
          text:"Attempt time limit:",
          options:{A:"1 minute",B:"2 minutes",C:"30 seconds",D:"3 minutes"},
          answer:"A"
        },
        {
          id:"oc5_3",
          text:"Lifter following themselves receives:",
          options:{A:"No extension",B:"Additional minute",C:"Two extra minutes",D:"Time reset"},
          answer:"B"
        },
        {
          id:"oc5_4",
          text:"Attempt changes allowed within:",
          options:{A:"During lift",B:"Designated change periods",C:"Anytime",D:"Only after squats"},
          answer:"B"
        },
        {
          id:"oc5_5",
          text:"'Bar loaded' means:",
          options:{A:"Lifter may approach platform",B:"Changes still allowed",C:"Spotter may adjust rack",D:"Clock stops"},
          answer:"A"
        },
        {
          id:"oc5_6",
          text:"Lot numbers affect:",
          options:{A:"Bodyweight",B:"Attempt order when weights equal",C:"Bar selection",D:"Flight colour"},
          answer:"B"
        },
        {
          id:"oc5_7",
          text:"Misloaded bar lighter:",
          options:{A:"Lift stands",B:"Retake required",C:"Increase weight automatically",D:"Lower weight allowed"},
          answer:"B"
        },
        {
          id:"oc5_8",
          text:"Misloaded bar heavier, completed:",
          options:{A:"Lift invalid",B:"May count at heavier weight",C:"Decreased to opener",D:"Retake mandatory"},
          answer:"B"
        },
        {
          id:"oc5_9",
          text:"Round system improves:",
          options:{A:"Confusion",B:"Fairness and smooth flow",C:"Only record attempts",D:"Coach influence"},
          answer:"B"
        },
        {
          id:"oc5_10",
          text:"Attempt order depends on:",
          options:{A:"Coach ranking",B:"Weight requested then lot number",C:"Nationality",D:"Jury preference"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 10. REFEREES
    // =====================================================
    {
      id:"referees",
      title:"10. Referees",
      questions:[
        {
          id:"ref5_1",
          text:"Total number of referees judging platform lift:",
          options:{A:"1",B:"2",C:"3",D:"4"},
          answer:"C"
        },
        {
          id:"ref5_2",
          text:"Referees must remain:",
          options:{A:"Silent and neutral",B:"Loud",C:"Aside in warm-up room",D:"In audience"},
          answer:"A"
        },
        {
          id:"ref5_3",
          text:"Referees communicate decisions via:",
          options:{A:"Lights",B:"Shouting",C:"Hand gestures only",D:"Coach"},
          answer:"A"
        },
        {
          id:"ref5_4",
          text:"Chief referee issues:",
          options:{A:"Program",B:"Commands",C:"Coach cards",D:"Attempt changes"},
          answer:"B"
        },
        {
          id:"ref5_5",
          text:"Side referees watch primarily:",
          options:{A:"Audience",B:"Angles and infractions",C:"Timer",D:"Spotters"},
          answer:"B"
        },
        {
          id:"ref5_6",
          text:"Referees can be replaced if:",
          options:{A:"Late",B:"Incompetent or biased",C:"Audience boos",D:"Coach suggests"},
          answer:"B"
        },
        {
          id:"ref5_7",
          text:"Referees must wear:",
          options:{A:"Team kit",B:"Approved uniform",C:"Any sport clothing",D:"Casual clothes"},
          answer:"B"
        },
        {
          id:"ref5_8",
          text:"Ref may delay start if:",
          options:{A:"Lifter nervous",B:"Safety concern exists",C:"Coach asks",D:"Spotters tired"},
          answer:"B"
        },
        {
          id:"ref5_9",
          text:"Ref priority:",
          options:{A:"National loyalty",B:"Fair and safe rule application",C:"Audience excitement",D:"Coach preferences"},
          answer:"B"
        },
        {
          id:"ref5_10",
          text:"Promotion to higher ref category requires:",
          options:{A:"Referee popularity",B:"Experience & exam success",C:"Winning meets",D:"Audience vote"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 11. JURY
    // =====================================================
    {
      id:"jury",
      title:"11. Jury",
      questions:[
        {
          id:"jy5_1",
          text:"Jury consists of:",
          options:{A:"Athletes",B:"3 qualified referees",C:"Coaches",D:"Volunteers"},
          answer:"B"
        },
        {
          id:"jy5_2",
          text:"Jury may overturn:",
          options:{A:"Referee decisions where rules misapplied",B:"Lot numbers",C:"Bodyweight",D:"Uniform style"},
          answer:"A"
        },
        {
          id:"jy5_3",
          text:"Jury grants re-lift for:",
          options:{A:"Unhappy lifter",B:"Misload or referee error",C:"Better attempt",D:"Coach demand"},
          answer:"B"
        },
        {
          id:"jy5_4",
          text:"Jury interventions must be:",
          options:{A:"Constant",B:"Minimal unless required",C:"Every attempt",D:"Every session"},
          answer:"B"
        },
        {
          id:"jy5_5",
          text:"Jury may discipline:",
          options:{A:"Audience",B:"Coaches/lifters misbehaving",C:"Announcers",D:"Spotters"},
          answer:"B"
        },
        {
          id:"jy5_6",
          text:"Protests go to:",
          options:{A:"Platform crew",B:"Jury or meet director",C:"Audience",D:"Scorers"},
          answer:"B"
        },
        {
          id:"jy5_7",
          text:"Jury must stay:",
          options:{A:"Neutral and observant",B:"On platform",C:"Warm-up room",D:"Silent at home"},
          answer:"A"
        },
        {
          id:"jy5_8",
          text:"Jury may replace:",
          options:{A:"Referees failing duties",B:"Spotters",C:"Athletes",D:"Photographers"},
          answer:"A"
        },
        {
          id:"jy5_9",
          text:"Reviews consider:",
          options:{A:"Folk opinions",B:"Evidence & rules",C:"Social media",D:"Audience noise"},
          answer:"B"
        },
        {
          id:"jy5_10",
          text:"Jury authority is:",
          options:{A:"Advisory",B:"Final in technical matters",C:"Coach dependent",D:"Optional"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 12. RECORDS
    // =====================================================
    {
      id:"records",
      title:"12. Records",
      questions:[
        {
          id:"rc5_1",
          text:"World records require:",
          options:{A:"Training proof",B:"IPF-sanctioned meet",C:"Local approval",D:"Online submission"},
          answer:"B"
        },
        {
          id:"rc5_2",
          text:"Record lift must be judged:",
          options:{A:"By 1 ref",B:"By 3 suitable category refs",C:"By coach",D:"By audience"},
          answer:"B"
        },
        {
          id:"rc5_3",
          text:"Record categories include:",
          options:{A:"Lifts + total",B:"Squat only",C:"Bench only",D:"Deadlift only"},
          answer:"A"
        },
        {
          id:"rc5_4",
          text:"Record plates must be:",
          options:{A:"Any gym plates",B:"IPF-calibrated",C:"Rubber only",D:"Urethane only"},
          answer:"B"
        },
        {
          id:"rc5_5",
          text:"Fourth attempts count:",
          options:{A:"Toward total",B:"For record only",C:"As warm-up",D:"As failed attempt"},
          answer:"B"
        },
        {
          id:"rc5_6",
          text:"Bodyweight matters because:",
          options:{A:"Affects record category",B:"Determines grip width",C:"Determines squat depth",D:"Controls bench arch"},
          answer:"A"
        },
        {
          id:"rc5_7",
          text:"If classes change:",
          options:{A:"Records deleted",B:"Archived and reset",C:"Applied to new classes automatically",D:"Ignored"},
          answer:"B"
        },
        {
          id:"rc5_8",
          text:"Drug testing may be required:",
          options:{A:"Never",B:"For record validity",C:"Only for juniors",D:"Only for totals"},
          answer:"B"
        },
        {
          id:"rc5_9",
          text:"National records:",
          options:{A:"Always world records",B:"Recognised by national federation",C:"Not recognised",D:"Converted to IPF records"},
          answer:"B"
        },
        {
          id:"rc5_10",
          text:"Record paperwork usually handled by:",
          options:{A:"Lifter",B:"Meet director/team official",C:"Audience",D:"Spotter"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 13. CLASSIC (RAW) RULES
    // =====================================================
    {
      id:"classic_rules",
      title:"13. Classic (Raw) Rules",
      questions:[
        {
          id:"cr5_1",
          text:"Classic lifting excludes:",
          options:{A:"Belts",B:"Sleeves",C:"Supportive suits & shirts",D:"Shoes"},
          answer:"C"
        },
        {
          id:"cr5_2",
          text:"Knee sleeves must be:",
          options:{A:"Supportive with buckles",B:"Non-fastening & approved",C:"Made of metal",D:"Placed above thigh"},
          answer:"B"
        },
        {
          id:"cr5_3",
          text:"Classic & equipped share:",
          options:{A:"Identical commands",B:"Identical personal equipment",C:"Different lifts",D:"Different judging"},
          answer:"A"
        },
        {
          id:"cr5_4",
          text:"Classic records are:",
          options:{A:"Merged with equipped",B:"Separate",C:"Not kept",D:"Soft standards"},
          answer:"B"
        },
        {
          id:"cr5_5",
          text:"Sleeves must NOT:",
          options:{A:"Be neoprene",B:"Have fasteners/rigid parts",C:"Cover knee",D:"Be coloured"},
          answer:"B"
        },
        {
          id:"cr5_6",
          text:"Classic lifter using wraps is:",
          options:{A:"Still classic",B:"Equipped",C:"Bench-only",D:"Illegal in both"},
          answer:"B"
        },
        {
          id:"cr5_7",
          text:"Classic equipment includes:",
          options:{A:"Non-supportive singlet, belt, wrist wraps, knee sleeves",B:"Multi-ply suit",C:"Bench shirt",D:"Deadlift suit"},
          answer:"A"
        },
        {
          id:"cr5_8",
          text:"Classic popular because:",
          options:{A:"Easier logistics & raw strength emphasis",B:"More commands",C:"More equipment",D:"Shorter bar path"},
          answer:"A"
        },
        {
          id:"cr5_9",
          text:"Belts in classic:",
          options:{A:"Different rules",B:"Same rules as equipped",C:"Banned",D:"Allowed only in bench"},
          answer:"B"
        },
        {
          id:"cr5_10",
          text:"Classic lifter may hold:",
          options:{A:"No records",B:"Both classic + equipped separately",C:"Only classic",D:"Only bench"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 14. LOGOS
    // =====================================================
    {
      id:"sponsor_logos",
      title:"14. Sponsor Logos",
      questions:[
        {
          id:"sl5_1",
          text:"Logos restricted to:",
          options:{A:"Any size",B:"Allowed areas & sizes only",C:"Full body",D:"Unlimited"},
          answer:"B"
        },
        {
          id:"sl5_2",
          text:"Political slogans:",
          options:{A:"Allowed",B:"Forbidden",C:"Only for Masters",D:"Only on belts"},
          answer:"B"
        },
        {
          id:"sl5_3",
          text:"Unapproved logos must be:",
          options:{A:"Ignored",B:"Covered or removed",C:"Approved by audience",D:"Recoloured"},
          answer:"B"
        },
        {
          id:"sl5_4",
          text:"Manufacturer logos permitted:",
          options:{A:"If IPF-approved",B:"If homemade",C:"If random",D:"None allowed"},
          answer:"A"
        },
        {
          id:"sl5_5",
          text:"National emblem allowed:",
          options:{A:"Never",B:"Within allowed size rules",C:"Only on socks",D:"Only Sub-Junior"},
          answer:"B"
        },
        {
          id:"sl5_6",
          text:"Logo enforcement done at:",
          options:{A:"Warm-up only",B:"Equipment check & platform",C:"After meet",D:"Online submission"},
          answer:"B"
        },
        {
          id:"sl5_7",
          text:"Repeated violations may result in:",
          options:{A:"Nothing",B:"Disciplinary action",C:"Awards",D:"Best lifter bonus"},
          answer:"B"
        },
        {
          id:"sl5_8",
          text:"Large logos:",
          options:{A:"Are fine anywhere",B:"Must meet dimension rules",C:"Only for Open",D:"Only for men"},
          answer:"B"
        },
        {
          id:"sl5_9",
          text:"Personal sponsor logos:",
          options:{A:"Unlimited",B:"Only where rules allow",C:"Only on shirt",D:"On platform"},
          answer:"B"
        },
        {
          id:"sl5_10",
          text:"Logos matter because:",
          options:{A:"Affect equipment legality and uniformity",B:"Help livestream",C:"Set rankings",D:"Show fashion"},
          answer:"A"
        }
      ]
    },

    // =====================================================
    // 15. COACH RESPONSIBILITIES
    // =====================================================
    {
      id:"coach_responsibilities",
      title:"15. Coach Responsibilities",
      questions:[
        {
          id:"co5_1",
          text:"Coach must submit:",
          options:{A:"Attempt changes correctly & timely",B:"Rack heights only",C:"New rules",D:"Photos"},
          answer:"A"
        },
        {
          id:"co5_2",
          text:"Coach should understand:",
          options:{A:"Rules & timing",B:"Only squat rules",C:"Only bench rules",D:"Only deadlift rules"},
          answer:"A"
        },
        {
          id:"co5_3",
          text:"Coaches may be positioned:",
          options:{A:"Anywhere",B:"Designated coaching zone",C:"On platform",D:"Behind jury"},
          answer:"B"
        },
        {
          id:"co5_4",
          text:"Coach may NOT:",
          options:{A:"Encourage lifter",B:"Enter platform mid-lift",C:"Check attempt board",D:"Adjust warm-ups"},
          answer:"B"
        },
        {
          id:"co5_5",
          text:"Coaches help ensure:",
          options:{A:"Rules understood",B:"Uniform colours match",C:"Bar spins well",D:"Spotters behave"},
          answer:"A"
        },
        {
          id:"co5_6",
          text:"Protests made through:",
          options:{A:"Jury",B:"Spotters",C:"Audience",D:"Ref mid-lift"},
          answer:"A"
        },
        {
          id:"co5_7",
          text:"Coach misconduct may lead to:",
          options:{A:"Nothing",B:"Removal from competition area",C:"Extra attempts",D:"Bonus attempts"},
          answer:"B"
        },
        {
          id:"co5_8",
          text:"Coach card used for:",
          options:{A:"Attempt changes",B:"Music choice",C:"Weigh-in timing",D:"Drug testing"},
          answer:"A"
        },
        {
          id:"co5_9",
          text:"Coach interfering with lift:",
          options:{A:"Accepted",B:"May cause lifter disqualification",C:"Encouraged",D:"Spotters fix it"},
          answer:"B"
        },
        {
          id:"co5_10",
          text:"Coach’s role overall:",
          options:{A:"Override rules",B:"Support lifter while respecting rules",C:"Run the meet",D:"Pick referees"},
          answer:"B"
        }
      ]
    }

  ]
};
