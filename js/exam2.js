// ===============================
// EXAM 2 – IPF Technical Rulebook
// 15 Sections × 10 Questions Each
// ===============================

window.examData = {
  title: "Exam 2 – IPF Technical Rules (Variant A)",
  sections: [

    // =====================================================
    // 1. GENERAL RULES OF POWERLIFTING
    // =====================================================
    {
      id: "general_rules",
      title: "1. General Rules",
      questions: [
        {
          id: "gr2_1",
          text: "In a standard IPF competition, in which order are the three lifts performed?",
          options: {
            A: "Bench Press, Squat, Deadlift",
            B: "Squat, Deadlift, Bench Press",
            C: "Squat, Bench Press, Deadlift",
            D: "Deadlift, Squat, Bench Press"
          },
          answer: "C"
        },
        {
          id: "gr2_2",
          text: "What is the primary purpose of a powerlifting competition according to the IPF rules?",
          options: {
            A: "To lift the heaviest possible weight regardless of form",
            B: "To determine the strongest lifter under a defined set of technical rules",
            C: "To promote bodybuilding and aesthetics",
            D: "To select lifters for Olympic weightlifting"
          },
          answer: "B"
        },
        {
          id: "gr2_3",
          text: "Which of the following best describes a 'total' in powerlifting?",
          options: {
            A: "The sum of the lifter’s best squat and deadlift",
            B: "The sum of all nine attempts",
            C: "The sum of each lift’s heaviest successful attempt",
            D: "The heaviest individual lift performed"
          },
          answer: "C"
        },
        {
          id: "gr2_4",
          text: "A lifter bombs out (no total) if:",
          options: {
            A: "They miss all three attempts in any single lift",
            B: "They receive any red lights during the day",
            C: "They fail to make weight at the first try",
            D: "They change an attempt after the deadline"
          },
          answer: "A"
        },
        {
          id: "gr2_5",
          text: "At international competitions, which body’s technical rules must be followed?",
          options: {
            A: "Local federation rules",
            B: "IPF Technical Rules only",
            C: "Coach’s association guidelines",
            D: "Host country’s sport ministry rules"
          },
          answer: "B"
        },
        {
          id: "gr2_6",
          text: "Which statement about language at IPF World Championships is correct?",
          options: {
            A: "Only the host nation’s language may be used",
            B: "English is the official language for technical matters",
            C: "Referees must communicate only in French",
            D: "Coaches may demand interpretation into any language"
          },
          answer: "B"
        },
        {
          id: "gr2_7",
          text: "Which person is ultimately responsible for knowing and following the technical rules?",
          options: { A:"The meet director", B:"The lifter’s coach", C:"The lifter", D:"The jury" },
          answer: "C"
        },
        {
          id: "gr2_8",
          text: "In team competitions, how are team points generally awarded?",
          options: {
            A: "According to lifters’ bodyweights only",
            B: "According to placing in each bodyweight class",
            C: "According to number of records broken",
            D: "According to total attempts made"
          },
          answer: "B"
        },
        {
          id: "gr2_9",
          text: "Which of the following is NOT a recognised competition type under IPF?",
          options: {
            A: "Classic (Raw)",
            B: "Equipped",
            C: "Assisted (with lifting straps and hooks)",
            D: "Both Classic and Equipped"
          },
          answer: "C"
        },
        {
          id: "gr2_10",
          text: "If a lifter is disqualified for misconduct, what happens to their results?",
          options: {
            A: "They keep all results but lose medals",
            B: "Only their last lift is removed",
            C: "All their results are removed from the competition",
            D: "Only the total is removed"
          },
          answer: "C"
        }
      ]
    },

    // =====================================================
    // 2. AGE & BODYWEIGHT CATEGORIES
    // =====================================================
    {
      id: "age_bodyweight",
      title: "2. Age & Bodyweight Categories",
      questions: [
        {
          id: "ab2_1",
          text: "Age categories in the IPF are determined based on:",
          options: {
            A: "The exact birthday at weigh-in",
            B: "The calendar year in which the lifter reaches the given age",
            C: "The month of birth only",
            D: "The year of first competition"
          },
          answer: "B"
        },
        {
          id: "ab2_2",
          text: "Which statement is true about competing in the Open category?",
          options: {
            A: "Only lifters aged 24–39 can enter Open",
            B: "Any lifter who meets the minimum age for Open may lift there",
            C: "Only lifters without a club can enter Open",
            D: "Masters lifters cannot enter Open"
          },
          answer: "B"
        },
        {
          id: "ab2_3",
          text: "A lifter eligible for both Junior and Open wishes to compete. Which is allowed?",
          options: {
            A: "They may enter both in the same competition session",
            B: "They must choose one category per competition",
            C: "They are forced into Junior until they age out",
            D: "They may switch category after weigh-in"
          },
          answer: "B"
        },
        {
          id: "ab2_4",
          text: "Which factor primarily defines a bodyweight category?",
          options: {
            A: "Nomination bodyweight only",
            B: "Actual bodyweight at official weigh-in",
            C: "Average training bodyweight",
            D: "Coach’s choice"
          },
          answer: "B"
        },
        {
          id: "ab2_5",
          text: "If a lifter’s bodyweight is above their nominated class at weigh-in:",
          options: {
            A: "They may move to a higher class if regulations allow",
            B: "They are automatically disqualified",
            C: "They must cut weight again immediately",
            D: "The jury chooses a class for them"
          },
          answer: "A"
        },
        {
          id: "ab2_6",
          text: "At World Championships, how many competitors per nation per bodyweight class are generally allowed?",
          options: { A:"One", B:"Two", C:"Three", D:"Unlimited" },
          answer: "B"
        },
        {
          id: "ab2_7",
          text: "A male lifter weighs 74.00 kg. What class does he compete in?",
          options: { A:"66 kg", B:"74 kg", C:"83 kg", D:"Any class he chooses" },
          answer: "B"
        },
        {
          id: "ab2_8",
          text: "A female lifter is 40 by IPF definition. Which categories might she be eligible for?",
          options: { A:"Open only", B:"Master I only", C:"Open and Master I", D:"Junior" },
          answer: "C"
        },
        {
          id: "ab2_9",
          text: "A Sub-Junior turning 18 this calendar year will next be:",
          options: { A:"Junior next year", B:"Junior immediately", C:"Open immediately", D:"Master I" },
          answer: "A"
        },
        {
          id: "ab2_10",
          text: "Why must lifters compete in correct bodyweight classes?",
          options: {
            A: "Because totals & records are category-specific",
            B: "To choose attempts",
            C: "For photo consistency",
            D: "It is optional"
          },
          answer: "A"
        }
      ]
    },

    // =====================================================
    // 3. EQUIPMENT & SPECIFICATIONS
    // =====================================================
    {
      id: "equipment_specs",
      title: "3. Equipment & Specifications",
      questions: [
        {
          id: "eq2_1",
          text: "Which statement describes IPF competition plates?",
          options: {
            A: "Any gym plates if correct weight",
            B: "Calibrated, IPF-approved plates only",
            C: "Bumper plates only",
            D: "Iron plates only"
          },
          answer: "B"
        },
        {
          id: "eq2_2",
          text: "Why are colour codes used on plates?",
          options: {
            A: "To look attractive",
            B: "So referees can give faster commands",
            C: "For spectators’ entertainment",
            D: "To visually confirm bar weight quickly"
          },
          answer: "D"
        },
        {
          id: "eq2_3",
          text: "Platform surface must be:",
          options: { A:"Rubber", B:"Flat & non-slip", C:"Metal", D:"Raised mesh" },
          answer: "B"
        },
        {
          id: "eq2_4",
          text: "Purpose of collars:",
          options: {
            A: "Decoration",
            B: "Prevent plate movement",
            C: "Shorten the bar",
            D: "Increase grip friction"
          },
          answer: "B"
        },
        {
          id: "eq2_5",
          text: "Which bar type is typically used in IPF competitions?",
          options: {
            A: "Different bars for each lift",
            B: "One standard bar for all three lifts",
            C: "Deadlift bar",
            D: "Squat bar"
          },
          answer: "B"
        },
        {
          id: "eq2_6",
          text: "Why does IPF require an approved equipment list?",
          options: {
            A: "Brand visibility",
            B: "Uniformity & fairness",
            C: "To reduce lifters",
            D: "For sponsorship"
          },
          answer: "B"
        },
        {
          id: "eq2_7",
          text: "Which is checked against the approved list?",
          options: {
            A: "Platform carpet",
            B: "Racks, bars, plates",
            C: "Announcer microphone",
            D: "Coaches’ bags"
          },
          answer: "B"
        },
        {
          id: "eq2_8",
          text: "If a bar is misloaded and discovered later:",
          options: {
            A: "Attempt always stands",
            B: "Attempt always void",
            C: "Rules differ depending under/overload",
            D: "Jury chooses freely"
          },
          answer: "C"
        },
        {
          id: "eq2_9",
          text: "Bench uprights must:",
          options: {
            A: "Never adjust",
            B: "Allow safe rack/unrack",
            C: "Be tilted inward",
            D: "Lock permanently"
          },
          answer: "B"
        },
        {
          id: "eq2_10",
          text: "Bar knurling helps:",
          options: {
            A: "Reduce noise",
            B: "Improve grip & stability",
            C: "Add challenge",
            D: "Protect plates"
          },
          answer: "B"
        }
      ]
    },

    // =====================================================
    // 4. PERSONAL EQUIPMENT
    // =====================================================
    {
      id: "personal_equipment",
      title: "4. Personal Equipment",
      questions: [
        {
          id: "pe2_1",
          text: "Why must underwear be non-supportive?",
          options: {
            A: "Comfort only",
            B: "Avoid mechanical advantage",
            C: "To match singlet colour",
            D: "Prevent sweat"
          },
          answer: "B"
        },
        {
          id: "pe2_2",
          text: "T-shirts under the suit must:",
          options: {
            A:"Be sleeveless", B:"Be non-supportive & IPF-approved", C:"Be compression only", D:"Have no colour"
          },
          answer:"B"
        },
        {
          id:"pe2_3",
          text:"Why are knee sleeves allowed but knee wraps banned in Raw?",
          options:{A:"Sleeves decorative",B:"Sleeves mild support; wraps give rebound",C:"Wraps expensive",D:"Sleeves hide socks"},
          answer:"B"
        },
        {
          id:"pe2_4",
          text:"Purpose of wrist wraps:",
          options:{A:"Forearm pump",B:"Grip only",C:"Wrist stability",D:"Decoration"},
          answer:"C"
        },
        {
          id:"pe2_5",
          text:"Which item is NOT allowed on platform?",
          options:{A:"Jewellery that can catch",B:"Approved belt",C:"Approved sleeves",D:"Approved shoes"},
          answer:"A"
        },
        {
          id:"pe2_6",
          text:"Failed equipment inspection means:",
          options:{A:"Continue lifting",B:"Lifter must change equipment",C:"Disqualification",D:"Skip 1st attempt"},
          answer:"B"
        },
        {
          id:"pe2_7",
          text:"Non-approved supportive suits:",
          options:{A:"Allowed local",B:"Never allowed",C:"Jury-dependent",D:"Deadlift only"},
          answer:"B"
        },
        {
          id:"pe2_8",
          text:"Why are belts limited?",
          options:{A:"Fashion",B:"Manufacturing ease",C:"Prevent over-stiff support",D:"Encourage injury"},
          answer:"C"
        },
        {
          id:"pe2_9",
          text:"Raw permitted combo:",
          options:{A:"Supportive suit + wraps",B:"Non-supportive suit + sleeves",C:"No suit + wraps",D:"Supportive shirt"},
          answer:"B"
        },
        {
          id:"pe2_10",
          text:"Deadlift socks must:",
          options:{A:"Be ankle",B:"Cover shins",C:"Be IPF-branded",D:"Be forbidden"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 5. SQUAT RULES
    // =====================================================
    {
      id: "squat_rules",
      title: "5. Squat – Rules of Performance",
      questions: [
        {
          id: "sq2_1",
          text: "Legal squat depth is when:",
          options: {
            A:"Thigh parallel",
            B:"Hip crease below top of knee",
            C:"Knees locked early",
            D:"Bar dips slightly"
          },
          answer: "B"
        },
        {
          id:"sq2_2",
          text:"Before 'Squat' command lifter must:",
          options:{A:"Descend",B:"Stand erect motionless",C:"Balance forward",D:"Wave at ref"},
          answer:"B"
        },
        {
          id:"sq2_3",
          text:"Cause of failure:",
          options:{A:"Small shuffle",B:"Downward movement after ascent begins",C:"Deep breathing",D:"Looking down"},
          answer:"B"
        },
        {
          id:"sq2_4",
          text:"Stumble while walking in after 'Rack':",
          options:{A:"Automatic fail",B:"Still good if control maintained",C:"Re-lift required",D:"Video review mandatory"},
          answer:"B"
        },
        {
          id:"sq2_5",
          text:"Spotters’ role:",
          options:{A:"Help ascent",B:"Cue lifter",C:"Safety only",D:"Judge depth"},
          answer:"C"
        },
        {
          id:"sq2_6",
          text:"Rerack allowed:",
          options:{A:"Anytime",B:"Only after 'Rack' command",C:"If coach says",D:"After pause"},
          answer:"B"
        },
        {
          id:"sq2_7",
          text:"Descend-stop-descend again:",
          options:{A:"Allowed",B:"Always fail",C:"Raw only",D:"Depends on jury"},
          answer:"A"
        },
        {
          id:"sq2_8",
          text:"Primary depth cue:",
          options:{A:"Bar speed",B:"Knee angle",C:"Hip crease vs knee top",D:"Head angle"},
          answer:"C"
        },
        {
          id:"sq2_9",
          text:"Which is permitted?",
          options:{A:"Double-bounce",B:"Looking anywhere",C:"Spotters calling depth",D:"Ref signs depth"},
          answer:"B"
        },
        {
          id:"sq2_10",
          text:"Touch by spotters before failure:",
          options:{A:"OK",B:"Fail",C:"Retry",D:"White lights automatic"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 6. BENCH PRESS RULES
    // =====================================================
    {
      id: "bench_rules",
      title: "6. Bench Press – Rules of Performance",
      questions: [
        {
          id:"bp2_1",
          text:"Contacts required:",
          options:{A:"Head only",B:"Head/shoulders/buttocks",C:"Feet only",D:"Butt only"},
          answer:"B"
        },
        {
          id:"bp2_2",
          text:"Before 'Press' command:",
          options:{A:"Coach signals",B:"Bar motionless on chest",C:"Feet lifted",D:"Head raised"},
          answer:"B"
        },
        {
          id:"bp2_3",
          text:"Failure:",
          options:{A:"Uneven lowering",B:"Bar sinking after command",C:"Eyes closed",D:"Wide grip"},
          answer:"B"
        },
        {
          id:"bp2_4",
          text:"Hand-off permitted by:",
          options:{A:"Anyone",B:"Platform spotters only",C:"Coach",D:"Side refs"},
          answer:"B"
        },
        {
          id:"bp2_5",
          text:"Foot slip slightly:",
          options:{A:"Always fail",B:"Pass",C:"Ref discretion if position maintained",D:"Re-rack"},
          answer:"C"
        },
        {
          id:"bp2_6",
          text:"Pause required because:",
          options:{A:"Harder",B:"Standardisation, prevents bouncing",C:"For photos",D:"Record attempt only"},
          answer:"B"
        },
        {
          id:"bp2_7",
          text:"Illegal grip:",
          options:{A:"Thumbs-around grip",B:"Reverse grip",C:"Thumb-less if prohibited",D:"Narrow grip"},
          answer:"C"
        },
        {
          id:"bp2_8",
          text:"Downward movement after press:",
          options:{A:"Allowed",B:"Fail",C:"Side refs ignore",D:"Retry"},
          answer:"B"
        },
        {
          id:"bp2_9",
          text:"Moving hands after start signal:",
          options:{A:"Allowed",B:"Fail",C:"Allowed if pressed fast",D:"Allowed final attempt"},
          answer:"B"
        },
        {
          id:"bp2_10",
          text:"'Rack' given when:",
          options:{A:"Bar touches chest",B:"Bar motionless",C:"Locked out under control",D:"Coach approval"},
          answer:"C"
        }
      ]
    },

    // =====================================================
    // 7. DEADLIFT RULES
    // =====================================================
    {
      id: "deadlift_rules",
      title: "7. Deadlift – Rules of Performance",
      questions: [
        {
          id:"dl2_1",
          text:"'Down' command given when lifter:",
          options:{A:"Starts pull",B:"Bar at knees",C:"Erect, locked knees, shoulders back",D:"Stands ready"},
          answer:"C"
        },
        {
          id:"dl2_2",
          text:"Cause of failure:",
          options:{A:"Slow lockout",B:"Hitching on thighs",C:"Looking down",D:"Bar drift"},
          answer:"B"
        },
        {
          id:"dl2_3",
          text:"Dropping bar:",
          options:{A:"Allowed",B:"Fail",C:"Allowed if locked",D:"Only jury decides"},
          answer:"B"
        },
        {
          id:"dl2_4",
          text:"Feet must:",
          options:{A:"Move freely",B:"Stay fixed",C:"Tap floor",D:"Be on blocks"},
          answer:"B"
        },
        {
          id:"dl2_5",
          text:"Straps:",
          options:{A:"Allowed",B:"Not allowed",C:"Raw only",D:"Deadlift only"},
          answer:"B"
        },
        {
          id:"dl2_6",
          text:"Conventional stance:",
          options:{A:"Wide, hands inside",B:"Hip-width, hands outside",C:"Feet touching",D:"Narrow, hands wide"},
          answer:"B"
        },
        {
          id:"dl2_7",
          text:"Sumo stance:",
          options:{A:"Feet wide, hands inside",B:"Feet narrow, hands inside",C:"Feet wide, hands outside",D:"Hook grip only"},
          answer:"A"
        },
        {
          id:"dl2_8",
          text:"Passed deadlift requires:",
          options:{A:"Any lockout",B:"Lockout + control + lower after command",C:"Fast lift",D:"Coach approval"},
          answer:"B"
        },
        {
          id:"dl2_9",
          text:"Chalk may be applied to:",
          options:{A:"Shoes only",B:"Hands and thighs",C:"Arms only",D:"Back only"},
          answer:"B"
        },
        {
          id:"dl2_10",
          text:"Bar rolling before pull:",
          options:{A:"Allowed",B:"Forbidden",C:"Allowed for juniors only",D:"Automatic fail"},
          answer:"A"
        }
      ]
    },

    // =====================================================
    // 8. WEIGH-IN
    // =====================================================
    {
      id: "weigh_in",
      title: "8. Weigh-In",
      questions: [
        {
          id:"wi2_1",
          text:"Purpose of weigh-in:",
          options:{A:"Rack heights",B:"Verify class & eligibility",C:"Warm-up",D:"Drug test"},
          answer:"B"
        },
        {
          id:"wi2_2",
          text:"Weigh-in is:",
          options:{A:"Public",B:"Private with officials & lifter",C:"On platform",D:"After squats"},
          answer:"B"
        },
        {
          id:"wi2_3",
          text:"If lifter fails weight first time:",
          options:{A:"Disqualified",B:"Second chances allowed within time",C:"Must withdraw",D:"Move to any class"},
          answer:"B"
        },
        {
          id:"wi2_4",
          text:"Clothing allowed:",
          options:{A:"Full suit",B:"Underwear or minimal approved clothing",C:"Shoes required",D:"Any clothing"},
          answer:"B"
        },
        {
          id:"wi2_5",
          text:"Accuracy important because:",
          options:{A:"Photos",B:"Tie-break & record validity",C:"Music choice",D:"Spotter selection"},
          answer:"B"
        },
        {
          id:"wi2_6",
          text:"During weigh-in lifter declares:",
          options:{A:"Music",B:"Opening attempts",C:"Uniform size",D:"Coach name"},
          answer:"B"
        },
        {
          id:"wi2_7",
          text:"Faulty scale:",
          options:{A:"Ignore it",B:"Correct/re-weigh as rules specify",C:"Reweigh winners only",D:"Estimate weight"},
          answer:"B"
        },
        {
          id:"wi2_8",
          text:"Who ensures lifter attends?",
          options:{A:"Plate loaders",B:"Lifter & coach",C:"Audience",D:"Media"},
          answer:"B"
        },
        {
          id:"wi2_9",
          text:"Weigh-in times:",
          options:{A:"Always identical",B:"Can vary within rules",C:"At coach request",D:"Based on weather"},
          answer:"B"
        },
        {
          id:"wi2_10",
          text:"Miss weigh-in:",
          options:{A:"Weigh later",B:"Lift without weighing",C:"Not allowed to lift",D:"Lift in random class"},
          answer:"C"
        }
      ]
    },

    // =====================================================
    // 9. ORDER OF COMPETITION
    // =====================================================
    {
      id: "order_comp",
      title: "9. Order of Competition & Round System",
      questions: [
        {
          id:"oc2_1",
          text:"Which attempt is taken first by all lifters?",
          options:{A:"Second",B:"Third",C:"First",D:"Coach choice"},
          answer:"C"
        },
        {
          id:"oc2_2",
          text:"Why round system?",
          options:{A:"Shortens meet too much",B:"Ensures fairness by order & weight",C:"For audience",D:"Allows random lifting"},
          answer:"B"
        },
        {
          id:"oc2_3",
          text:"Same weight, who lifts first?",
          options:{A:"Heavier lifter",B:"Lower lot number",C:"Host nation",D:"Stronger lifter"},
          answer:"B"
        },
        {
          id:"oc2_4",
          text:"Change attempt allowed:",
          options:{A:"Anytime",B:"Within 1 min after lift",C:"During lift",D:"During loading"},
          answer:"B"
        },
        {
          id:"oc2_5",
          text:"Announcer role:",
          options:{A:"Judge lift",B:"Call lifters & weights",C:"Set totals",D:"Set rack heights"},
          answer:"B"
        },
        {
          id:"oc2_6",
          text:"Clock expires:",
          options:{A:"Extension",B:"Missed lift",C:"Reset",D:"Skip flight"},
          answer:"B"
        },
        {
          id:"oc2_7",
          text:"Bar weight must:",
          options:{A:"Decrease allowed",B:"Increase or stay same",C:"Random",D:"Match previous lifter"},
          answer:"B"
        },
        {
          id:"oc2_8",
          text:"Following oneself:",
          options:{A:"Lose time",B:"Get extra time",C:"No change",D:"Skip attempt"},
          answer:"B"
        },
        {
          id:"oc2_9",
          text:"Schedule important:",
          options:{A:"Set records",B:"Warm-up planning",C:"Set equipment",D:"Paint platform"},
          answer:"B"
        },
        {
          id:"oc2_10",
          text:"Change after 'bar loaded'?",
          options:{A:"Allowed",B:"Never",C:"Junior only",D:"With form"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 10. REFEREES
    // =====================================================
    {
      id: "referees",
      title: "10. Referees",
      questions: [
        {
          id:"ref2_1",
          text:"Chief referee role:",
          options:{A:"Load bar",B:"Control platform & commands",C:"Coach lifters",D:"Pick attempts"},
          answer:"B"
        },
        {
          id:"ref2_2",
          text:"Squat commands count:",
          options:{A:"1",B:"2",C:"3",D:"4"},
          answer:"B"
        },
        {
          id:"ref2_3",
          text:"Decision lights shown:",
          options:{A:"Before lift",B:"After completion",C:"Mid-lift",D:"At weigh-in"},
          answer:"B"
        },
        {
          id:"ref2_4",
          text:"Ref replacement if:",
          options:{A:"Audience dislikes",B:"Incompetent or biased",C:"Asks break",D:"Wears glasses"},
          answer:"B"
        },
        {
          id:"ref2_5",
          text:"Ref must be:",
          options:{A:"Cheering",B:"Neutral",C:"Biased",D:"Silent always"},
          answer:"B"
        },
        {
          id:"ref2_6",
          text:"Side refs watch:",
          options:{A:"Bodyweight",B:"Bar path & tech faults",C:"Records",D:"Clock"},
          answer:"B"
        },
        {
          id:"ref2_7",
          text:"Ref signals via:",
          options:{A:"Shouts",B:"Lights/cards",C:"Texts",D:"Whistles"},
          answer:"B"
        },
        {
          id:"ref2_8",
          text:"Ref avoid:",
          options:{A:"Explaining",B:"Cheering lifter",C:"Observing",D:"Issuing commands"},
          answer:"B"
        },
        {
          id:"ref2_9",
          text:"Technical break:",
          options:{A:"Keep judging",B:"Pause judging",C:"End meet",D:"Reset weights"},
          answer:"B"
        },
        {
          id:"ref2_10",
          text:"International ref must:",
          options:{A:"Be world champ",B:"Pass exam + experience",C:"Attend 1 seminar",D:"Pay extra"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 11. JURY
    // =====================================================
    {
      id: "jury",
      title: "11. Jury",
      questions: [
        {
          id:"jy2_1",
          text:"Jury function:",
          options:{A:"Coach",B:"Supervise refs & rule application",C:"Load plates",D:"Announce"},
          answer:"B"
        },
        {
          id:"jy2_2",
          text:"Protests go to:",
          options:{A:"Audience",B:"Announcer",C:"Jury",D:"Plate loaders"},
          answer:"C"
        },
        {
          id:"jy2_3",
          text:"Ref may be replaced if:",
          options:{A:"Audience boos",B:"Repeated errors",C:"Coach asks",D:"Uniform wrong"},
          answer:"B"
        },
        {
          id:"jy2_4",
          text:"Jury intervenes if:",
          options:{A:"Anytime",B:"Rules clearly misapplied",C:"After medals",D:"During weigh-in"},
          answer:"B"
        },
        {
          id:"jy2_5",
          text:"Jury panel:",
          options:{A:"Coaches",B:"3 experienced refs",C:"Volunteers",D:"Athletes"},
          answer:"B"
        },
        {
          id:"jy2_6",
          text:"Jury reviews:",
          options:{A:"Audience vote",B:"Official evidence",C:"Social media",D:"Random clips"},
          answer:"B"
        },
        {
          id:"jy2_7",
          text:"Coach misbehaves:",
          options:{A:"Ignore",B:"Remove coach",C:"Award medal",D:"Give extra attempts"},
          answer:"B"
        },
        {
          id:"jy2_8",
          text:"Jury decisions:",
          options:{A:"Advisory",B:"Final",C:"Audience approval",D:"Coach-dictated"},
          answer:"B"
        },
        {
          id:"jy2_9",
          text:"Re-lift allowed if:",
          options:{A:"Lifter wants",B:"Missload/ref error",C:"Coach angry",D:"Team request"},
          answer:"B"
        },
        {
          id:"jy2_10",
          text:"Jury should:",
          options:{A:"Be loud",B:"Stay neutral & unobtrusive",C:"Stand on platform",D:"Coach lifters"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 12. RECORDS
    // =====================================================
    {
      id: "records",
      title: "12. Records",
      questions: [
        {
          id:"rc2_1",
          text:"Valid world record requires:",
          options:{A:"Any meet",B:"IPF-sanctioned meet",C:"Home gym",D:"Online meet"},
          answer:"B"
        },
        {
          id:"rc2_2",
          text:"Records exist for:",
          options:{A:"Squat only",B:"Bench only",C:"DL only",D:"All lifts & total"},
          answer:"D"
        },
        {
          id:"rc2_3",
          text:"Record attempts must use:",
          options:{A:"Any plates",B:"Approved equipment",C:"Training plates",D:"Home bar"},
          answer:"B"
        },
        {
          id:"rc2_4",
          text:"Record forms submitted by:",
          options:{A:"Audience",B:"Lifter",C:"Meet director or delegate",D:"Platform crew"},
          answer:"C"
        },
        {
          id:"rc2_5",
          text:"If overloaded bar:",
          options:{A:"Record invalid",B:"Record may count if exceeds record",C:"Void attempt",D:"Reweigh bar only"},
          answer:"B"
        },
        {
          id:"rc2_6",
          text:"When classes change:",
          options:{A:"Records archived & reset",B:"Records unchanged",C:"Records deleted",D:"Moved randomly"},
          answer:"A"
        },
        {
          id:"rc2_7",
          text:"Record set when:",
          options:{A:"1st attempt",B:"Any attempt over record",C:"Last attempt only",D:"Warm-up"},
          answer:"B"
        },
        {
          id:"rc2_8",
          text:"Bodyweight important:",
          options:{A:"For photos",B:"Records category-specific",C:"Music choice",D:"Loading speed"},
          answer:"B"
        },
        {
          id:"rc2_9",
          text:"Drug testing:",
          options:{A:"Not needed",B:"May be required for record validity",C:"Optional",D:"Team decides"},
          answer:"B"
        },
        {
          id:"rc2_10",
          text:"National records:",
          options:{A:"Always world records",B:"Recognised by national federation",C:"IPF invalid",D:"Not allowed"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 13. CLASSIC (RAW) RULES
    // =====================================================
    {
      id: "classic_rules",
      title: "13. Classic (Raw) Rules",
      questions: [
        {
          id:"cr2_1",
          text:"Classic lifting excludes:",
          options:{A:"Belts",B:"Supportive shirts & suits",C:"Sleeves",D:"Shoes"},
          answer:"B"
        },
        {
          id:"cr2_2",
          text:"Knee sleeves:",
          options:{A:"Banned",B:"Allowed if approved",C:"Mandatory",D:"Metal only"},
          answer:"B"
        },
        {
          id:"cr2_3",
          text:"Classic & equipped records:",
          options:{A:"Combined",B:"Separate",C:"Only equipped",D:"Only classic"},
          answer:"B"
        },
        {
          id:"cr2_4",
          text:"Classic lifter may wear:",
          options:{A:"Supportive shirt",B:"Supportive briefs",C:"Non-supportive singlet",D:"Compression suit"},
          answer:"C"
        },
        {
          id:"cr2_5",
          text:"Classic popular because:",
          options:{A:"More equipment",B:"Simpler & raw strength focus",C:"Less rules",D:"Shorter meet"},
          answer:"B"
        },
        {
          id:"cr2_6",
          text:"Classic cannot:",
          options:{A:"Use belt",B:"Use wraps",C:"Use supportive suit",D:"Use sleeves"},
          answer:"C"
        },
        {
          id:"cr2_7",
          text:"Classic DL allowed:",
          options:{A:"Straps",B:"Supportive suit",C:"Singlet + belt",D:"Hook only"},
          answer:"C"
        },
        {
          id:"cr2_8",
          text:"Classic uses:",
          options:{A:"Same technical rules as equipped",B:"Different rules",C:"No commands",D:"Only 2 lifts"},
          answer:"A"
        },
        {
          id:"cr2_9",
          text:"Sleeves must NOT:",
          options:{A:"Cover knee",B:"Contain rigid fasteners",C:"Match singlet",D:"Be neoprene"},
          answer:"B"
        },
        {
          id:"cr2_10",
          text:"Classic & equipped flights:",
          options:{A:"Cannot mix",B:"May be scheduled separately",C:"Judge differently",D:"Use different commands"},
          answer:"B"
        }
      ]
    },

    // =====================================================
    // 14. SPONSOR LOGOS
    // =====================================================
    {
      id: "sponsor_logos",
      title: "14. Sponsor Logos",
      questions: [
        {
          id:"sl2_1",
          text:"Logo restrictions exist to:",
          options:{A:"Avoid clutter & maintain uniformity",B:"Ban sponsors",C:"Promote IPF only",D:"Limit lifters"},
          answer:"A"
        },
        {
          id:"sl2_2",
          text:"Non-approved logos:",
          options:{A:"Always allowed",B:"May need covering or forbidden",C:"Required",D:"Decide lot"},
          answer:"B"
        },
        {
          id:"sl2_3",
          text:"National emblems:",
          options:{A:"Not allowed",B:"Allowed within size rules",C:"Count as sponsor",D:"Replace manuf."},
          answer:"B"
        },
        {
          id:"sl2_4",
          text:"Political slogans:",
          options:{A:"Prohibited",B:"Allowed small",C:"Allowed on belt",D:"Allowed socks"},
          answer:"A"
        },
        {
          id:"sl2_5",
          text:"Oversized logos:",
          options:{A:"Ignored",B:"Lifter must fix before lifting",C:"Lose 1 attempt",D:"Auto DQ"},
          answer:"B"
        },
        {
          id:"sl2_6",
          text:"Equipment legality tied to:",
          options:{A:"Shoe brand",B:"IPF-approved manufacturer logos",C:"Gym logos",D:"Personal sponsors"},
          answer:"B"
        },
        {
          id:"sl2_7",
          text:"Multiple belt logos:",
          options:{A:"Always legal",B:"Must follow number/size rules",C:"Never legal",D:"Worlds only"},
          answer:"B"
        },
        {
          id:"sl2_8",
          text:"Organisers check logos to:",
          options:{A:"Speed up later checks",B:"Pick podium",C:"Select announcer",D:"Set rack heights"},
          answer:"A"
        },
        {
          id:"sl2_9",
          text:"Team names on tracksuits:",
          options:{A:"Allowed within rules",B:"Banned",C:"Warm-up room only",D:"Count as record"},
          answer:"A"
        },
        {
          id:"sl2_10",
          text:"Unapproved singlet logo:",
          options:{A:"Must be covered/changed",B:"Wins best lifter",C:"Immediate DQ",D:"Class change"},
          answer:"A"
        }
      ]
    },

    // =====================================================
    // 15. COACH RESPONSIBILITIES
    // =====================================================
    {
      id: "coach_responsibilities",
      title: "15. Coach Responsibilities",
      questions: [
        {
          id:"co2_1",
          text:"Coach must:",
          options:{A:"Guess attempts",B:"Submit attempts correctly/on time",C:"Change after bar loaded",D:"Ignore rules"},
          answer:"B"
        },
        {
          id:"co2_2",
          text:"Coaches ensure lifters:",
          options:{A:"Ignore refs",B:"Understand rules",C:"Use straps",D:"Lift lightly"},
          answer:"B"
        },
        {
          id:"co2_3",
          text:"Coach permitted to:",
          options:{A:"Enter platform",B:"Encourage verbally from designated area",C:"Run scoreboard",D:"Stand with refs"},
          answer:"B"
        },
        {
          id:"co2_4",
          text:"Coach violating conduct:",
          options:{A:"Promoted",B:"Ignored",C:"Removed by jury",D:"Extra attempts"},
          answer:"C"
        },
        {
          id:"co2_5",
          text:"NOT coach role:",
          options:{A:"Warm-up guidance",B:"Submit attempts",C:"Argue aggressively",D:"Check equipment"},
          answer:"C"
        },
        {
          id:"co2_6",
          text:"Protests about rulings go to:",
          options:{A:"Spotters",B:"Audience",C:"Jury",D:"Media"},
          answer:"C"
        },
        {
          id:"co2_7",
          text:"Coach card used for:",
          options:{A:"Food",B:"Attempts",C:"Music",D:"Photos"},
          answer:"B"
        },
        {
          id:"co2_8",
          text:"Encouraging lifter to ignore commands:",
          options:{A:"OK",B:"Serious breach",C:"Prize",D:"Required"},
          answer:"B"
        },
        {
          id:"co2_9",
          text:"Coach attire:",
          options:{A:"Anything",B:"Team uniform/appropriate",C:"Ref uniform",D:"No rules"},
          answer:"B"
        },
        {
          id:"co2_10",
          text:"Coaches must know rules to:",
          options:{A:"Override refs",B:"Maximise fair performance",C:"Design plates",D:"Set records"},
          answer:"B"
        }
      ]
    }

  ]
};
