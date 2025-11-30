// ===============================
// EXAM 3 – IPF Technical Rulebook
// 15 Sections × 10 Questions Each
// ===============================

window.examData = {
  title: "Exam 3 – IPF Technical Rules (Variant B)",
  sections: [

    // =====================================================
    // 1. GENERAL RULES OF POWERLIFTING
    // =====================================================
    {
      id: "general_rules",
      title: "1. General Rules",
      questions: [
        {
          id: "gr3_1",
          text: "How many different lifts are used to determine a powerlifting total?",
          options: { A:"1", B:"2", C:"3", D:"4" },
          answer: "C"
        },
        {
          id: "gr3_2",
          text: "Which of the following is part of a lifter’s official result?",
          options: {
            A:"Best squat, best bench, best deadlift and total",
            B:"All nine attempts added together",
            C:"Only their heaviest lift of the day",
            D:"Only their total without individual lifts"
          },
          answer: "A"
        },
        {
          id: "gr3_3",
          text: "A lifter’s total is valid only if they:",
          options: {
            A:"Make at least one successful squat, bench and deadlift",
            B:"Make any one successful lift",
            C:"Finish all attempts without bombing bench",
            D:"Compete in classic division"
          },
          answer: "A"
        },
        {
          id: "gr3_4",
          text: "If two lifters achieve the same total in the same class, which rule is applied first to break the tie?",
          options: {
            A:"Older lifter wins",
            B:"Lighter bodyweight wins",
            C:"First to reach total wins",
            D:"Last to lift wins"
          },
          answer: "B"
        },
        {
          id: "gr3_5",
          text: "Which of the following is normally a reason to be disqualified from the whole competition?",
          options: {
            A:"Missing a command in one attempt",
            B:"Using banned substances or serious misconduct",
            C:"Bombing out on squat only",
            D:"Turning up late for warm-up"
          },
          answer: "B"
        },
        {
          id: "gr3_6",
          text: "The IPF Technical Rules are binding on lifters, coaches and:",
          options: { A:"Spectators", B:"Only national refs", C:"All meet officials", D:"Only jury" },
          answer: "C"
        },
        {
          id: "gr3_7",
          text: "Which statement is TRUE regarding lifters’ knowledge of the rules?",
          options: {
            A:"Only coaches must know the rules",
            B:"Lifters can rely on referees to explain mid-lift",
            C:"Lifters are responsible for knowing the current rules",
            D:"Knowing rules is optional"
          },
          answer: "C"
        },
        {
          id: "gr3_8",
          text: "At IPF World Championships, which language is used for official documents and decisions?",
          options: { A:"Host language", B:"English", C:"French", D:"Any language" },
          answer: "B"
        },
        {
          id: "gr3_9",
          text: "A lifter who receives 3 red lights on all squat attempts:",
          options: {
            A:"May still bench and deadlift but will have no total",
            B:"Is immediately sent home",
            C:"Gets an automatic 4th squat attempt",
            D:"Moves to another age category"
          },
          answer: "A"
        },
        {
          id: "gr3_10",
          text: "Which of the following is TRUE regarding classic and equipped competitions?",
          options: {
            A:"They use the same basic rules of performance for the three lifts",
            B:"Only equipped competitions follow IPF rules",
            C:"Classic has no commands",
            D:"Equipped uses different lifts"
          },
          answer: "A"
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
          id: "ab3_1",
          text: "Age categories are calculated using:",
          options: {
            A:"The lifter’s exact age on competition day",
            B:"The year in which the lifter reaches a given age",
            C:"The age when they first joined a club",
            D:"The age they first lifted in training"
          },
          answer: "B"
        },
        {
          id: "ab3_2",
          text: "What is the main purpose of bodyweight classes?",
          options: {
            A:"To create more world records",
            B:"To allow fair comparison between lifters of similar body size",
            C:"To make competitions longer",
            D:"To promote specific coaching styles"
          },
          answer: "B"
        },
        {
          id: "ab3_3",
          text: "A female lifter weighing 63.05 kg must compete in which class (standard IPF classes)?",
          options: { A:"57 kg", B:"63 kg", C:"69 kg/72 kg (depending on cycle)", D:"84 kg" },
          answer: "C"
        },
        {
          id: "ab3_4",
          text: "After final nominations are submitted, changing a lifter’s bodyweight class:",
          options: {
            A:"Is generally not allowed except under specific rules",
            B:"Is always allowed if lifter asks",
            C:"Can be done during weigh-in at will",
            D:"Is decided by spectators"
          },
          answer: "A"
        },
        {
          id: "ab3_5",
          text: "If a lifter weighs under the lower limit of any recognised class:",
          options: {
            A:"They may still lift but cannot set records",
            B:"They may not compete in that competition",
            C:"They are put into the lightest class anyway",
            D:"They lift only in bench"
          },
          answer: "B"
        },
        {
          id: "ab3_6",
          text: "At international championships, lifters usually represent:",
          options: { A:"Their club", B:"Their region", C:"Their nation", D:"Their gym chain" },
          answer: "C"
        },
        {
          id: "ab3_7",
          text: "Which statement is TRUE about Masters lifters?",
          options: {
            A:"They cannot compete in Open",
            B:"They may choose to compete in Open or Masters (when eligible)",
            C:"They are required to use different bars",
            D:"They cannot set Open records"
          },
          answer: "B"
        },
        {
          id: "ab3_8",
          text: "A male lifter turning 39 this year is in which age category by IPF definition?",
          options: { A:"Junior", B:"Sub-Junior", C:"Open", D:"Master I" },
          answer: "C"
        },
        {
          id: "ab3_9",
          text: "If national rules conflict with IPF age categories at an IPF championship:",
          options: {
            A:"National rules override",
            B:"IPF age categories apply",
            C:"Host chooses",
            D:"Jury votes"
          },
          answer: "B"
        },
        {
          id: "ab3_10",
          text: "Why is the final nomination list important for age and bodyweight categories?",
          options: {
            A:"It determines which group gets more prize money",
            B:"It locks entries to plan flights and schedules",
            C:"It sets training programs",
            D:"It assigns hotel rooms"
          },
          answer: "B"
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
          id: "eq3_1",
          text: "Barbell sleeves (ends) must be designed so that:",
          options: {
            A:"Plates can spin freely as required",
            B:"Plates are fixed and cannot rotate",
            C:"Only small plates fit",
            D:"They bend under heavy loads"
          },
          answer: "A"
        },
        {
          id: "eq3_2",
          text: "The standard bar length used in IPF competitions is approximately:",
          options: { A:"1.5 m", B:"2.2 m", C:"2.5 m", D:"3.0 m" },
          answer: "B"
        },
        {
          id: "eq3_3",
          text: "The main reason for using calibrated plates is:",
          options: {
            A:"They are cheaper",
            B:"To ensure the weight on the bar is accurate and consistent",
            C:"They are easier to handle",
            D:"They look nicer on livestream"
          },
          answer: "B"
        },
        {
          id: "eq3_4",
          text: "Platform dimensions and layout are controlled because:",
          options: {
            A:"It makes competitions more expensive",
            B:"It allows consistent safety and filming angles",
            C:"It ensures consistent footing and safety for all lifters",
            D:"It helps the audience guess weights"
          },
          answer: "C"
        },
        {
          id: "eq3_5",
          text: "If the bar is obviously bent or damaged:",
          options: {
            A:"It should be replaced before further attempts",
            B:"Only heavyweights may use it",
            C:"It can be used in deadlift only",
            D:"It is fine if lifters agree"
          },
          answer: "A"
        },
        {
          id: "eq3_6",
          text: "Why are there knurling-free “smooth” sections on the bar?",
          options: {
            A:"To reduce manufacturing cost",
            B:"To help lifters find standard grip width",
            C:"To comply with IPF specifications and accommodate rack contact",
            D:"To allow hand sliding"
          },
          answer: "C"
        },
        {
          id: "eq3_7",
          text: "Bench pad firmness is regulated to:",
          options: {
            A:"Make arching impossible",
            B:"Prevent excessive sinking and provide a stable surface",
            C:"Increase lifter discomfort",
            D:"Match the carpet thickness"
          },
          answer: "B"
        },
        {
          id: "eq3_8",
          text: "Chalk is generally allowed on:",
          options: {
            A:"Hands, but not on the bar",
            B:"Hands, shoulders and back, as long as it doesn’t contaminate the bar excessively",
            C:"Only on shoes",
            D:"Only on plates"
          },
          answer: "B"
        },
        {
          id: "eq3_9",
          text: "Why must the platform surface be free of loose chalk or debris?",
          options: {
            A:"To avoid unfair advantage to heavier lifters",
            B:"To prevent slips and ensure safety",
            C:"To keep the carpet clean",
            D:"To satisfy TV broadcasters"
          },
          answer: "B"
        },
        {
          id: "eq3_10",
          text: "If the rack height is incorrectly set for a lifter in the squat:",
          options: {
            A:"They must still lift without change",
            B:"They may ask the loaders to adjust before the bar is called 'loaded'",
            C:"Only the jury can change it during the attempt",
            D:"The lift is automatically a failure"
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
          id: "pe3_1",
          text: "The singlet in IPF competition must:",
          options: {
            A:"Be any design and fabric",
            B:"Be non-supportive and of approved type",
            C:"Be knee-length",
            D:"Be loose-fitting"
          },
          answer: "B"
        },
        {
          id: "pe3_2",
          text: "Headgear such as hats or caps on the platform:",
          options: {
            A:"Is always permitted",
            B:"Is never permitted under IPF rules",
            C:"Is allowed only in deadlift",
            D:"Is allowed only for coaches"
          },
          answer: "B"
        },
        {
          id: "pe3_3",
          text: "Medical supports (e.g. braces) are:",
          options: {
            A:"Always allowed without question",
            B:"Allowed only if not giving extra mechanical advantage and often need approval",
            C:"Forbidden in all circumstances",
            D:"Allowed only if colourful"
          },
          answer: "B"
        },
        {
          id: "pe3_4",
          text: "In equipped lifting, the bench shirt must:",
          options: {
            A:"Be open-backed only",
            B:"Be of a type and brand approved by IPF",
            C:"Cover the elbows completely",
            D:"Be worn under a t-shirt"
          },
          answer: "B"
        },
        {
          id: "pe3_5",
          text: "Excessive oil or lotion on the body:",
          options: {
            A:"Is allowed if it looks good",
            B:"Is forbidden because it can affect grip or bar contact",
            C:"Is required for bigger deadlifts",
            D:"Is required in bench press"
          },
          answer: "B"
        },
        {
          id: "pe3_6",
          text: "What is the main reason jewellery (rings, bracelets, long necklaces) may be disallowed?",
          options: {
            A:"Fashion rules",
            B:"It may get caught on equipment or cause injury",
            C:"It might distract referees",
            D:"It changes bodyweight too much"
          },
          answer: "B"
        },
        {
          id: "pe3_7",
          text: "Finger taping is:",
          options: {
            A:"Always banned",
            B:"Allowed if not used to improve grip directly on bar contact surfaces",
            C:"Mandatory for deadlift",
            D:"Only allowed on thumbs"
          },
          answer: "B"
        },
        {
          id: "pe3_8",
          text: "In both classic and equipped, belts must:",
          options: {
            A:"Be Velcro-only",
            B:"Conform to IPF dimensions and not have extra padding",
            C:"Be at least 15 cm wide",
            D:"Contain metal stiffeners outside"
          },
          answer: "B"
        },
        {
          id: "pe3_9",
          text: "Shoes used in competition must:",
          options: {
            A:"Be barefoot only",
            B:"Be heeled only",
            C:"Have a stable, firm sole",
            D:"Be made of leather"
          },
          answer: "C"
        },
        {
          id: "pe3_10",
          text: "If a lifter is found wearing illegal personal equipment on the platform:",
          options: {
            A:"The attempt is automatically passed",
            B:"They must correct it and may have attempts invalidated according to rules",
            C:"They are given an extra attempt as compensation",
            D:"Only their total is removed"
          },
          answer: "B"
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
          id: "sq3_1",
          text: "Which command sequence is correct for the squat?",
          options: { A:"Start – Rack", B:"Squat – Rack", C:"Down – Up", D:"Lift – Return" },
          answer: "B"
        },
        {
          id: "sq3_2",
          text: "During the squat, the lifter may:",
          options: {
            A:"Move the feet freely during the descent",
            B:"Make minor foot adjustments before the 'Squat' command",
            C:"Step backward again after finishing the lift",
            D:"Walk around the platform after unracking"
          },
          answer: "B"
        },
        {
          id: "sq3_3",
          text: "A red light may be given in squat if:",
          options: {
            A:"Lifter’s eyes closed",
            B:"Depth is above parallel according to referees",
            C:"Lifter breathes loudly",
            D:"Bar knurl pattern is visible"
          },
          answer: "B"
        },
        {
          id: "sq3_4",
          text: "If the lifter loses balance after completing the squat and takes steps forward before 'Rack':",
          options: {
            A:"Referee should still give 'Rack' if control is regained",
            B:"Lift is automatically good",
            C:"Lift is automatically failed",
            D:"Jury decides instantly"
          },
          answer: "A"
        },
        {
          id: "sq3_5",
          text: "Squat descent must be:",
          options: {
            A:"One continuous movement downwards",
            B:"Paused halfway for two seconds",
            C:"Performed with bar moving mainly backwards",
            D:"Performed with heel lifting"
          },
          answer: "A"
        },
        {
          id: "sq3_6",
          text: "A lifter receives the 'Squat' command, then the bar begins oscillating before they descend. This is:",
          options: {
            A:"Grounds for automatic failure",
            B:"Allowed if the lifter regains control before descent",
            C:"Requires jury intervention",
            D:"Counts as two attempts"
          },
          answer: "B"
        },
        {
          id: "sq3_7",
          text: "Which of the following is NOT a normal cause of failure in squat?",
          options: {
            A:"Failure to reach proper depth",
            B:"Downward movement after starting the ascent",
            C:"Re-racking the bar before 'Rack' command",
            D:"Taking a breath at the top"
          },
          answer: "D"
        },
        {
          id: "sq3_8",
          text: "The spotters must:",
          options: {
            A:"Stand back and never touch the bar even on failure",
            B:"Assist the lifter whenever requested, including during the lift",
            C:"Intervene only to prevent injury or obvious failure",
            D:"Judge depth for the referees"
          },
          answer: "C"
        },
        {
          id: "sq3_9",
          text: "After 'Rack' is called, the lifter must:",
          options: {
            A:"Walk forward and replace the bar in the racks under control",
            B:"Drop the bar immediately",
            C:"Wait for jury instruction",
            D:"Step off the platform before re-racking"
          },
          answer: "A"
        },
        {
          id: "sq3_10",
          text: "In evaluating squat depth, referees consider:",
          options: {
            A:"The lifter’s training max",
            B:"The angle of the torso",
            C:"The position of the hip joint relative to the top of the knee",
            D:"How heavy the bar looks"
          },
          answer: "C"
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
          id: "bp3_1",
          text: "Before 'Start' is given in the bench press, the lifter must:",
          options: {
            A:"Have bar at arm’s length, elbows locked, body motionless",
            B:"Have bar on chest",
            C:"Have coach holding bar",
            D:"Be halfway to lockout"
          },
          answer: "A"
        },
        {
          id: "bp3_2",
          text: "Which contact is required throughout the bench attempt?",
          options: {
            A:"At least one foot on the bench",
            B:"Head, shoulders and buttocks on the bench; feet in firm contact with floor/blocks",
            C:"Only buttocks on the bench",
            D:"Hands on any part of the rack"
          },
          answer: "B"
        },
        {
          id: "bp3_3",
          text: "A common reason for red lights in bench press is:",
          options: {
            A:"Holding the breath",
            B:"Bar not being motionless on the chest before 'Press'",
            C:"Using a narrow grip",
            D:"Wearing a belt"
          },
          answer: "B"
        },
        {
          id: "bp3_4",
          text: "The bar must be brought down to:",
          options: {
            A:"Any point above the chest",
            B:"Touch the chest or belly as defined in the rules and remain motionless",
            C:"Stop above the chest but not touch",
            D:"Only contact the ribs"
          },
          answer: "B"
        },
        {
          id: "bp3_5",
          text: "Which of the following causes failure in bench press?",
          options: {
            A:"Bar path drifting slightly backwards",
            B:"Uneven extension of arms if one side eventually locks out",
            C:"Raising the buttocks off the bench",
            D:"Keeping feet flat on floor"
          },
          answer: "C"
        },
        {
          id: "bp3_6",
          text: "A lifter uses a dangerously open grip (thumb-less) in a competition where it is prohibited. The likely result is:",
          options: {
            A:"Lift is allowed but noted",
            B:"Lift is failed for incorrect grip according to rules",
            C:"Lift automatically becomes a record",
            D:"Referees ignore it"
          },
          answer: "B"
        },
        {
          id: "bp3_7",
          text: "If the lifter receives any downward movement after 'Press' is called and before lockout:",
          options: {
            A:"Lift is still valid if finished",
            B:"Lift is invalid and should receive red lights",
            C:"Jury can change to white lights",
            D:"It becomes an attempt on total only"
          },
          answer: "B"
        },
        {
          id: "bp3_8",
          text: "After 'Rack' in bench, the lifter should:",
          options: {
            A:"Drop the bar on the hooks",
            B:"Continue holding bar until spotters take control into the racks",
            C:"Leave the bar wherever it is",
            D:"Stand up with the bar still in their hands"
          },
          answer: "B"
        },
        {
          id: "bp3_9",
          text: "Bridge/arch in bench press is:",
          options: {
            A:"Always illegal",
            B:"Allowed if shoulders, head and buttocks remain in contact and rules are followed",
            C:"Only allowed in equipped",
            D:"Only allowed if heels are flat"
          },
          answer: "B"
        },
        {
          id: "bp3_10",
          text: "If the lifter’s hand spacing exceeds the maximum allowed (beyond the rings):",
          options: {
            A:"The lift is still valid",
            B:"Referees must warn mid-lift",
            C:"The attempt is failed for incorrect grip",
            D:"Jury will extend the rings"
          },
          answer: "C"
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
          id: "dl3_1",
          text: "In the deadlift, the lifter may begin the attempt when:",
          options: {
            A:"The bar is called 'loaded' and the clock is running",
            B:"The coach says go",
            C:"They have chalked shoes",
            D:"They hear music start"
          },
          answer: "A"
        },
        {
          id: "dl3_2",
          text: "At the completion of a good deadlift, the lifter must be:",
          options: {
            A:"Leaning forward with bent knees",
            B:"Erect, knees locked and shoulders back",
            C:"Halfway up",
            D:"Holding the bar with one hand"
          },
          answer: "B"
        },
        {
          id: "dl3_3",
          text: "Which is an allowable bar movement in a legal deadlift attempt?",
          options: {
            A:"Hitching the bar repeatedly on thighs",
            B:"Rolling the bar slightly before the initial pull",
            C:"Allowing bar to rest on thighs before lockout",
            D:"Dropping bar from top"
          },
          answer: "B"
        },
        {
          id: "dl3_4",
          text: "If the bar stops and moves downwards slightly before lockout:",
          options: {
            A:"The attempt is failed for downward movement",
            B:"It is still good if lockout is reached",
            C:"It becomes a training rep",
            D:"It is judged only on speed"
          },
          answer: "A"
        },
        {
          id: "dl3_5",
          text: "On completion of a good deadlift, the lifter must wait for:",
          options: {
            A:"A clap from the audience",
            B:"The jury’s visual signal",
            C:"The chief referee’s 'Down' command",
            D:"Coach’s shout"
          },
          answer: "C"
        },
        {
          id: "dl3_6",
          text: "Supporting the bar on the thighs is:",
          options: { A:"A form of hitching and not allowed", B:"Allowed in equipped only", C:"Allowed below 100 kg", D:"Only banned in juniors" },
          answer: "A"
        },
        {
          id: "dl3_7",
          text: "Which grips are generally legal in deadlift?",
          options: {
            A:"Hook, mixed or double overhand as long as bar is held cleanly",
            B:"Straps and hooks",
            C:"Only mixed grip",
            D:"Only hook grip"
          },
          answer: "A"
        },
        {
          id: "dl3_8",
          text: "Blood on the bar must be cleaned:",
          options: {
            A:"Only at end of session",
            B:"Immediately, using appropriate sanitising procedure",
            C:"Not necessary",
            D:"Only between deadlift and bench"
          },
          answer: "B"
        },
        {
          id: "dl3_9",
          text: "If the lifter steps backward or forward slightly at the top before 'Down':",
          options: {
            A:"Lift is always failed",
            B:"Lift may still be passed if control is maintained and rules met",
            C:"Lift becomes a warm-up",
            D:"Needs jury video review"
          },
          answer: "B"
        },
        {
          id: "dl3_10",
          text: "Which of the following is TRUE for deadlift socks?",
          options: {
            A:"They are prohibited",
            B:"They must fully cover the shins to protect them and the bar",
            C:"They may only be ankle socks",
            D:"They must be white"
          },
          answer: "B"
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
          id: "wi3_1",
          text: "The standard length of weigh-in at IPF events is typically:",
          options: { A:"30 minutes", B:"1 hour", C:"2 hours", D:"3 hours" },
          answer: "C"
        },
        {
          id: "wi3_2",
          text: "Weigh-in usually starts how long before the lifting session?",
          options: { A:"30 minutes", B:"1 hour", C:"2 hours", D:"4 hours" },
          answer: "C"
        },
        {
          id: "wi3_3",
          text: "Why is weigh-in conducted in a private room?",
          options: {
            A:"To hide the scales",
            B:"For lifter privacy and to avoid crowd interference",
            C:"To allow filming",
            D:"To test announcer equipment"
          },
          answer: "B"
        },
        {
          id: "wi3_4",
          text: "If a lifter is light enough to make a lower bodyweight class and the timetable allows:",
          options: {
            A:"They must stay in the higher class",
            B:"They may be moved to the lighter class if within rules and deadlines",
            C:"They cannot compete",
            D:"They are placed in Open automatically"
          },
          answer: "B"
        },
        {
          id: "wi3_5",
          text: "At weigh-in, opening attempts are recorded mainly to:",
          options: {
            A:"Plan warm-up room space",
            B:"Set the initial order of lifting and prepare score sheets",
            C:"Decide who lifts last in deadlift",
            D:"Determine state records"
          },
          answer: "B"
        },
        {
          id: "wi3_6",
          text: "Who typically conducts the official weigh-in?",
          options: {
            A:"Audience volunteers",
            B:"Appointed referees or officials",
            C:"Coaches only",
            D:"Media representatives"
          },
          answer: "B"
        },
        {
          id: "wi3_7",
          text: "What happens if a lifter refuses to be weighed on the official scales?",
          options: {
            A:"Their nomination bodyweight is used instead",
            B:"They cannot compete in that event",
            C:"They are given estimated bodyweight",
            D:"They can lift only in bench"
          },
          answer: "B"
        },
        {
          id: "wi3_8",
          text: "Can a lifter request re-weighing within the weigh-in period if they are overweight?",
          options: {
            A:"Yes, within the rules and time allowed",
            B:"No, weigh-in is one attempt only",
            C:"Only if jury agrees to exempt them",
            D:"Only juniors may re-weigh"
          },
          answer: "A"
        },
        {
          id: "wi3_9",
          text: "Correct bodyweight records at weigh-in help verify:",
          options: {
            A:"Flight colour scheme",
            B:"Fair tie-breaking and record eligibility",
            C:"Which bar is used",
            D:"How many spotters needed"
          },
          answer: "B"
        },
        {
          id: "wi3_10",
          text: "If a lifter arrives after weigh-in has closed:",
          options: {
            A:"They join the session at any bodyweight",
            B:"They are refused entry to that competition",
            C:"They may weigh at the end of squats",
            D:"They only deadlift"
          },
          answer: "B"
        }
      ]
    },

    // =====================================================
    // 9. ORDER OF COMPETITION & ROUND SYSTEM
    // =====================================================
    {
      id: "order_comp",
      title: "9. Order of Competition & Round System",
      questions: [
        {
          id: "oc3_1",
          text: "Flights are used in competitions to:",
          options: {
            A:"Group lifters into manageable sets and allow rest between rounds",
            B:"Determine who wins best lifter",
            C:"Decide weigh-in times only",
            D:"Decide who benches first"
          },
          answer: "A"
        },
        {
          id: "oc3_2",
          text: "Within each flight, all lifters complete:",
          options: {
            A:"Their three attempts in a row",
            B:"All squats before anyone benches",
            C:"Attempt 1, then all attempt 2, then all attempt 3",
            D:"Only two attempts"
          },
          answer: "C"
        },
        {
          id: "oc3_3",
          text: "The usual time limit for each attempt once the lifter’s name is called is:",
          options: { A:"30 seconds", B:"1 minute", C:"90 seconds", D:"2 minutes" },
          answer: "B"
        },
        {
          id: "oc3_4",
          text: "In which situation might a lifter receive additional time on the clock?",
          options: {
            A:"If they are nervous",
            B:"If they follow themselves with the same weight as previous attempt",
            C:"If they request it",
            D:"If their coach is late"
          },
          answer: "B"
        },
        {
          id: "oc3_5",
          text: "Attempt changes are restricted to:",
          options: {
            A:"Anytime during the competition",
            B:"Specified windows (such as within 1 minute of completion or special rules for third deadlift)",
            C:"Only between squats and bench",
            D:"Only on openers"
          },
          answer: "B"
        },
        {
          id: "oc3_6",
          text: "The announcer and score-table must coordinate closely to:",
          options: {
            A:"Run music",
            B:"Ensure correct lifter, weight and attempt are called",
            C:"Decide coaching strategy",
            D:"Control lighting"
          },
          answer: "B"
        },
        {
          id: "oc3_7",
          text: "If the bar is misloaded in favour of the lifter (lighter than requested) and attempt is passed:",
          options: {
            A:"The attempt must usually be retaken with correct weight",
            B:"The attempt always stands",
            C:"The lifter is disqualified",
            D:"No action is possible"
          },
          answer: "A"
        },
        {
          id: "oc3_8",
          text: "If the bar is misloaded to a heavier weight than requested and the lifter succeeds:",
          options: {
            A:"Attempt may be accepted with the heavier weight as lifted according to rules",
            B:"Attempt is invalid",
            C:"Attempt must be repeated lighter",
            D:"Attempt counts as warm-up"
          },
          answer: "A"
        },
        {
          id: "oc3_9",
          text: "The round system is designed primarily to:",
          options: {
            A:"Confuse lifters",
            B:"Standardise timing and improve fairness and safety",
            C:"Support home lifters",
            D:"Reduce jury involvement"
          },
          answer: "B"
        },
        {
          id: "oc3_10",
          text: "Which statement is TRUE regarding competition order?",
          options: {
            A:"Heaviest nominated total always lifts last in every round",
            B:"Order is determined by attempt weight and lot number, not by total",
            C:"Coaches decide order by agreement",
            D:"Referees decide based on bodyweight"
          },
          answer: "B"
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
          id: "ref3_1",
          text: "How many referees judge each attempt on the platform?",
          options: { A:"1", B:"2", C:"3", D:"4" },
          answer: "C"
        },
        {
          id: "ref3_2",
          text: "Referees must avoid conflicts of interest by:",
          options: {
            A:"Only judging lifters from their own nation",
            B:"Not judging close relatives or lifters they clearly cannot be neutral with",
            C:"Letting coaches vote",
            D:"Letting audience decide"
          },
          answer: "B"
        },
        {
          id: "ref3_3",
          text: "Which of the following is part of the referees’ duty?",
          options: {
            A:"Selecting lifters’ attempts",
            B:"Ensuring the rules are applied consistently and safely",
            C:"Coaching lifters",
            D:"Running drug tests"
          },
          answer: "B"
        },
        {
          id: "ref3_4",
          text: "The chief referee in each lift:",
          options: {
            A:"Only watches the clock",
            B:"Gives the official commands and oversees the attempt",
            C:"Loads the bar",
            D:"Manages the scoreboard"
          },
          answer: "B"
        },
        {
          id: "ref3_5",
          text: "Referees’ decisions must be shown:",
          options: {
            A:"By shouting at lifters",
            B:"By coloured lights and/or cards (white or red)",
            C:"Only to the jury",
            D:"Only on the livestream"
          },
          answer: "B"
        },
        {
          id: "ref3_6",
          text: "If a referee notices a serious safety issue before the chief referee’s command:",
          options: {
            A:"They must ignore it",
            B:"They may signal to delay the start until safe",
            C:"They must stop the entire competition",
            D:"They ask the audience"
          },
          answer: "B"
        },
        {
          id: "ref3_7",
          text: "Referees at IPF events must wear:",
          options: {
            A:"Any sportswear",
            B:"Official IPF referee uniform",
            C:"Country’s tracksuit",
            D:"Clothes matching lifters"
          },
          answer: "B"
        },
        {
          id: "ref3_8",
          text: "Referees may be evaluated and promoted based on:",
          options: {
            A:"Competition results as lifters",
            B:"Experience, knowledge of rules and performance in exams",
            C:"Number of followers on social media",
            D:"Coaching success"
          },
          answer: "B"
        },
        {
          id: "ref3_9",
          text: "If a referee consistently applies rules incorrectly:",
          options: {
            A:"Nothing can be done",
            B:"The jury may warn or replace them",
            C:"They receive a medal",
            D:"Lifters choose a different referee"
          },
          answer: "B"
        },
        {
          id: "ref3_10",
          text: "Referees’ priority during an attempt is:",
          options: {
            A:"The lifter’s personal record",
            B:"Safety and correct application of IPF rules",
            C:"Making the crowd happy",
            D:"Shortening the meet"
          },
          answer: "B"
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
          id: "jy3_1",
          text: "The jury is typically seated:",
          options: {
            A:"Backstage only",
            B:"In a position where they can clearly see the platform and referees",
            C:"In the warm-up room",
            D:"In the announcer’s booth"
          },
          answer: "B"
        },
        {
          id: "jy3_2",
          text: "A main function of the jury is to:",
          options: {
            A:"Change the rules mid-meet",
            B:"Supervise the referees and intervene where necessary",
            C:"Plan the competition timetable",
            D:"Select national teams"
          },
          answer: "B"
        },
        {
          id: "jy3_3",
          text: "Jury members must be:",
          options: {
            A:"Experienced referees with the required qualifications",
            B:"Coaches from each team",
            C:"Random volunteers",
            D:"Athletes in the session"
          },
          answer: "A"
        },
        {
          id: "jy3_4",
          text: "If the jury overturns a referee decision:",
          options: {
            A:"Nothing changes for the lifter",
            B:"The attempt result may be changed (e.g. to good or bad lift)",
            C:"The meet is cancelled",
            D:"Only team points are changed"
          },
          answer: "B"
        },
        {
          id: "jy3_5",
          text: "The jury may grant a re-lift when:",
          options: {
            A:"The lifter dislikes their attempt",
            B:"There was clear misloading or misapplication of rules affecting the attempt",
            C:"The coach shouts loudly",
            D:"The lifter requests a second chance"
          },
          answer: "B"
        },
        {
          id: "jy3_6",
          text: "The jury should remain:",
          options: {
            A:"Involved in every attempt verbally",
            B:"As neutral observers unless an issue arises",
            C:"Hidden off-site",
            D:"Standing beside the lifter"
          },
          answer: "B"
        },
        {
          id: "jy3_7",
          text: "Coaches who wish to protest a technical decision should approach:",
          options: { A:"Audience", B:"Jury or appointed official", C:"Spotters", D:"Scorer" },
          answer: "B"
        },
        {
          id: "jy3_8",
          text: "The jury may recommend disciplinary action if:",
          options: {
            A:"A lifter misses depth",
            B:"A coach or lifter behaves inappropriately",
            C:"The bar is heavy",
            D:"The scoreboard is slow"
          },
          answer: "B"
        },
        {
          id: "jy3_9",
          text: "When reviewing a protested lift, the jury will consider:",
          options: {
            A:"Only the lifter’s opinion",
            B:"Referee reports, available evidence and rules",
            C:"Social media comments",
            D:"Audience reaction"
          },
          answer: "B"
        },
        {
          id: "jy3_10",
          text: "The jury’s authority in technical matters during the competition is:",
          options: { A:"Advisory only", B:"Final", C:"Subject to team vote", D:"Subject to livestream chat" },
          answer: "B"
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
          id: "rc3_1",
          text: "World records may be set:",
          options: {
            A:"Only in training camps",
            B:"At IPF-sanctioned competitions of the right level",
            C:"In any gym as long as filmed",
            D:"Only at national meets"
          },
          answer: "B"
        },
        {
          id: "rc3_2",
          text: "For a world record, the attempt must be:",
          options: {
            A:"Part of a planned exhibition",
            B:"Judged by three referees of appropriate category with 3 white lights",
            C:"Judged by only one referee",
            D:"Done without commands"
          },
          answer: "B"
        },
        {
          id: "rc3_3",
          text: "A record in squat is valid for:",
          options: {
            A:"Any bodyweight",
            B:"The specific bodyweight class, age category and equipment division",
            C:"All lifters of similar age",
            D:"Classic and equipped combined"
          },
          answer: "B"
        },
        {
          id: "rc3_4",
          text: "National records set at IPF events:",
          options: {
            A:"Are automatically world records",
            B:"May be recognised by the lifter’s national federation under its own rules",
            C:"Cannot be recognised",
            D:"Are controlled only by jury"
          },
          answer: "B"
        },
        {
          id: "rc3_5",
          text: "Record attempts often require additional documentation such as:",
          options: {
            A:"Coach’s notes",
            B:"Official result sheets and sometimes doping control forms",
            C:"Lifter’s training log",
            D:"Video montage"
          },
          answer: "B"
        },
        {
          id: "rc3_6",
          text: "If a lifter sets a world record total:",
          options: {
            A:"Each individual lift must also be records",
            B:"It is recognised separately from individual lift records",
            C:"It cancels all other records",
            D:"It doesn’t count if lifts were small"
          },
          answer: "B"
        },
        {
          id: "rc3_7",
          text: "Who usually initiates the paperwork for record claims?",
          options: {
            A:"Spectators",
            B:"Meet director or national representative",
            C:"Random official",
            D:"Scoring software only"
          },
          answer: "B"
        },
        {
          id: "rc3_8",
          text: "Why are records separated between classic and equipped?",
          options: {
            A:"They use different lifts",
            B:"Equipment significantly affects performance potential",
            C:"Classic meets are shorter",
            D:"Equipped meets use different commands"
          },
          answer: "B"
        },
        {
          id: "rc3_9",
          text: "If rules or bodyweight classes change, old records are usually:",
          options: {
            A:"Deleted with no record kept",
            B:"Archived historically and new records started",
            C:"Carried into any new class",
            D:"Given to home federation"
          },
          answer: "B"
        },
        {
          id: "rc3_10",
          text: "A 4th attempt allowed solely for record purposes:",
          options: {
            A:"Counts toward total",
            B:"Does not count toward total but may count as a record",
            C:"Is considered a training lift",
            D:"Is added onto the 3rd attempt automatically"
          },
          answer: "B"
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
          id: "cr3_1",
          text: "Classic (raw) lifting is characterised by:",
          options: {
            A:"Absence of supportive suits and shirts",
            B:"Use of maximum supportive equipment",
            C:"Only one attempt per lift",
            D:"No technical rules"
          },
          answer: "A"
        },
        {
          id: "cr3_2",
          text: "In classic lifting, knee wraps:",
          options: { A:"Are allowed", B:"Are prohibited", C:"Are mandatory", D:"Are only for bench" },
          answer: "B"
        },
        {
          id: "cr3_3",
          text: "Knee sleeves must typically be:",
          options: {
            A:"Loose and decorative only",
            B:"Of approved thickness, non-fastening, and non-rebounding material",
            C:"Made of metal",
            D:"Up to mid-thigh"
          },
          answer: "B"
        },
        {
          id: "cr3_4",
          text: "Classic lifting allows:",
          options: {
            A:"Supportive squat suits",
            B:"Supportive bench shirts",
            C:"Non-supportive singlets with approved belt, sleeves, and wrist wraps",
            D:"Only bodyweight exercises"
          },
          answer: "C"
        },
        {
          id: "cr3_5",
          text: "Records for classic lifting:",
          options: {
            A:"Are merged with equipped records",
            B:"Are kept separately for classic categories",
            C:"Do not exist",
            D:"Only apply to bench press"
          },
          answer: "B"
        },
        {
          id: "cr3_6",
          text: "Technical rules of performance (commands, depth, pause etc.) in classic lifting:",
          options: {
            A:"Are completely different from equipped",
            B:"Are essentially the same as equipped",
            C:"Do not exist",
            D:"Apply only to bench press"
          },
          answer: "B"
        },
        {
          id: "cr3_7",
          text: "A classic lifter using a supportive bench shirt:",
          options: {
            A:"Is lifting equipped, not classic",
            B:"Is still classic",
            C:"Is allowed only in record attempts",
            D:"Must switch to deadlift only"
          },
          answer: "A"
        },
        {
          id: "cr3_8",
          text: "One advantage often cited for classic competition is:",
          options: {
            A:"Less equipment cost and simpler logistics",
            B:"More complicated weigh-in",
            C:"Longer sessions",
            D:"Different number of lifts"
          },
          answer: "A"
        },
        {
          id: "cr3_9",
          text: "Which personal equipment item is identical in rules for classic and equipped?",
          options: {
            A:"Supportive bench shirts",
            B:"The belt (dimensions and construction)",
            C:"Knee wraps",
            D:"Single-ply squat suits"
          },
          answer: "B"
        },
        {
          id: "cr3_10",
          text: "Can a lifter hold records in both classic and equipped divisions?",
          options: {
            A:"No, only one division allowed",
            B:"Yes, if they compete in and achieve records in both divisions",
            C:"Only if jury agrees",
            D:"Only in total, not individual lifts"
          },
          answer: "B"
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
          id: "sl3_1",
          text: "Logo placement and size rules mainly exist to:",
          options: {
            A:"Ensure clothing remains neat, non-offensive and uniform",
            B:"Ban sponsorship completely",
            C:"Increase equipment costs",
            D:"Promote only one brand"
          },
          answer: "A"
        },
        {
          id: "sl3_2",
          text: "Manufacturer logos on approved equipment:",
          options: {
            A:"Are not allowed",
            B:"Are allowed within specified size and number limits",
            C:"Must cover the whole item",
            D:"Must be removed"
          },
          answer: "B"
        },
        {
          id: "sl3_3",
          text: "If a lifter has an illegal logo (e.g., offensive text):",
          options: {
            A:"Referees ignore it",
            B:"They must cover or change the item before lifting",
            C:"They automatically lose medals",
            D:"Only score-table cares"
          },
          answer: "B"
        },
        {
          id: "sl3_4",
          text: "National team kit usually includes:",
          options: {
            A:"Large personal sponsors only",
            B:"Team colours and nation name/emblem within size rules",
            C:"No marking at all",
            D:"Only manufacturer marks"
          },
          answer: "B"
        },
        {
          id: "sl3_5",
          text: "Logos for companies that conflict with anti-doping or ethics policies:",
          options: {
            A:"Are permitted freely",
            B:"May be restricted or forbidden",
            C:"Must be on socks only",
            D:"Are put on the scoreboard"
          },
          answer: "B"
        },
        {
          id: "sl3_6",
          text: "During equipment check, officials may ask lifters to:",
          options: {
            A:"Show only belts",
            B:"Remove or cover non-compliant logos",
            C:"Ignore logo issues",
            D:"Exchange uniforms with others"
          },
          answer: "B"
        },
        {
          id: "sl3_7",
          text: "Clothing with slogans of a political or religious nature:",
          options: {
            A:"Is allowed if it fits colour rules",
            B:"Is not allowed under IPF rules",
            C:"Is required for national teams",
            D:"Is left to audience vote"
          },
          answer: "B"
        },
        {
          id: "sl3_8",
          text: "Why are logo rules included in the Technical Rulebook rather than a separate document?",
          options: {
            A:"They affect equipment legality on the platform",
            B:"They only concern media",
            C:"They are not important",
            D:"They apply only to coaches"
          },
          answer: "A"
        },
        {
          id: "sl3_9",
          text: "A lifter’s personal sponsor logo may appear:",
          options: {
            A:"Anywhere, unlimited",
            B:"Only where allowed by the logo and equipment regulations",
            C:"Only on the platform carpet",
            D:"Only on the scoreboard"
          },
          answer: "B"
        },
        {
          id: "sl3_10",
          text: "If logo rules are repeatedly ignored by a lifter or coach:",
          options: {
            A:"No sanction applies",
            B:"Disciplinary actions may follow according to the regulations",
            C:"Only a warning is possible",
            D:"Jury must ignore the issue"
          },
          answer: "B"
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
          id: "co3_1",
          text: "A key responsibility of coaches during competition is to:",
          options: {
            A:"Load plates for all lifters",
            B:"Manage their lifters’ attempt selections and timing",
            C:"Judge the lifts",
            D:"Run the speaker system"
          },
          answer: "B"
        },
        {
          id: "co3_2",
          text: "Coaches must respect which group’s authority on the platform?",
          options: {
            A:"Audience",
            B:"Referees and jury",
            C:"Media team",
            D:"Other teams"
          },
          answer: "B"
        },
        {
          id: "co3_3",
          text: "If a coach strongly disagrees with a referee’s decision:",
          options: {
            A:"They should protest through the official channels (jury, meet director)",
            B:"They should argue on the platform",
            C:"They may stop the meet",
            D:"They may change the decision themselves"
          },
          answer: "A"
        },
        {
          id: "co3_4",
          text: "Attempt changes are usually submitted by:",
          options: { A:"Audience", B:"Coach or lifter at the table", C:"Spotters", D:"Announcer’s assistant" },
          answer: "B"
        },
        {
          id: "co3_5",
          text: "Coaches should ensure that lifters’ equipment:",
          options: {
            A:"Is stylish only",
            B:"Complies with IPF rules before platform checks",
            C:"Matches team colours only",
            D:"Is always new"
          },
          answer: "B"
        },
        {
          id: "co3_6",
          text: "A coach shouting abuse at referees during the competition:",
          options: {
            A:"Is acceptable if they apologise later",
            B:"May result in removal from the competition area",
            C:"Is encouraged",
            D:"Has no consequence"
          },
          answer: "B"
        },
        {
          id: "co3_7",
          text: "During lifting, the coach is normally positioned:",
          options: {
            A:"Anywhere on the platform",
            B:"In a designated coaching zone or behind barriers",
            C:"In the jury chair",
            D:"On the platform beside the bar"
          },
          answer: "B"
        },
        {
          id: "co3_8",
          text: "Why should coaches understand the timing and order system?",
          options: {
            A:"To decide drug testing",
            B:"To plan warm-ups and attempt submissions properly",
            C:"To replace referees",
            D:"To change nominations"
          },
          answer: "B"
        },
        {
          id: "co3_9",
          text: "Coaches may communicate with lifters on the platform:",
          options: {
            A:"Only via microphone",
            B:"By brief verbal cues from off the platform, without interfering",
            C:"By stepping onto the platform during the attempt",
            D:"By signalling referees during the lift"
          },
          answer: "B"
        },
        {
          id: "co3_10",
          text: "Overall, the coach’s role in IPF competitions is to:",
          options: {
            A:"Override officials when necessary",
            B:"Support athletes within the rules and contribute to fair competition",
            C:"Focus only on national team ranking",
            D:"Control the jury"
          },
          answer: "B"
        }
      ]
    }

  ]
};
