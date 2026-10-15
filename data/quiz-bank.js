/* ============================================================
   quiz-bank.js — the "Build Your Own Exam" question bank.

   Structure: one entry per TOPIC, each with three question SETS.
   The page renders topics as rows and sets as columns, so a topic
   with an empty set shows a greyed-out, unselectable cell. Nothing
   breaks if a set is empty — leave it [] until you have content.

   ------------------------------------------------------------
   THE THREE SETS, AND WHAT EACH IS FOR
   ------------------------------------------------------------
   mustKnow       Tracks the bullets on must-know.html ONE FOR ONE.
                  This is a hard invariant. Cut a bullet there, the
                  question goes too — UNLESS a surviving bullet still
                  depends on it. Add a bullet, it needs a question.

   extraPractice  High-yield lecture content that is NOT on the Must
                  Know page. Must not test the same point as any
                  mustKnow question in the same topic.

   eaq            Imported from an outside question bank (a publisher's
                  adaptive quizzing product, a question app, whatever).
                  Rename the column in `columns` below to suit. If your
                  course has no such source, leave every one empty and
                  the column simply renders as disabled.

   ------------------------------------------------------------
   INVARIANTS TO CHECK AFTER ANY EDIT (see RULES.md)
   ------------------------------------------------------------
     * Every topic carries exactly 1 mustKnow SATA + 1 extraPractice
       SATA (topics with very little content are the only exception,
       and should be listed as exceptions in your CLAUDE.md).
     * No duplicate stems anywhere in the file.
     * No answer slot holds more than ~50% of a topic's questions.
       Authoring naturally puts the right answer first — rotate them
       deliberately, asserting the option SET is unchanged so no
       content drifts.
     * Every question has topic, source, and a non-empty rationale.
     * Every answer/answers index is in range.

   ------------------------------------------------------------
   ADDING A TOPIC
   ------------------------------------------------------------
   Copy a whole { id, label, week, sets } block. `label` is what shows
   in the row and in the topic-breakdown strip, and every question's
   `topic` field in that block must match it EXACTLY.
   ============================================================ */
window.QUIZ_BANK = {

  /* Column headings and the legend under the intro line. Rename these
     for your course — "EAQs" only means something in a nursing program. */
  columns: [
    { key: "mustKnow",      label: "Must Know",      blurb: "Everything the lectures explicitly stated or heavily hinted will be tested." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from an outside question bank, sorted by topic, with duplicates removed." }
  ],

  topics: [
    {
      "id": "week1-pericardial-disease",
      "label": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A 24-year-old client was diagnosed with myocarditis two weeks after a Coxsackie B viral illness. The cardiac monitor now shows an irregular rhythm. The client has no fever, no friction rub, and normal heart sounds. Which mechanism best explains the new rhythm disturbance?",
            "options": [
              "Excess fluid between the pericardial layers compressing the chambers and slowing the electrical signal",
              "Inflammation confined to the sac around the heart and the roots of the major vessels, sparing the muscle",
              "Inflammatory cytokines and T cell activation in the heart muscle disrupting electrical conduction",
              "Pericardial inflammation irritating the outer layer, producing ST elevations and depressions on the ECG"
            ],
            "answer": 2,
            "rationale": "Correct: In myocarditis, tissue changes, inflammatory cytokines and T cell activation in the myocardium can result in abnormal electrical conduction, so disrupted conduction is a common finding. Incorrect: Excess pericardial fluid (effusion) compresses the chambers and limits filling; it is not the lecture's explanation for conduction disruption, and this client has normal heart sounds rather than muffled ones. Inflammation confined to the sac describes the pericardium, not the myocardium, which is the muscle layer involved in myocarditis. ST elevations and depressions are the ECG pattern taught for pericarditis, and this client has no fever or friction rub to suggest it.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A client recovering from mild viral myocarditis says, \"I barely had any symptoms, so my heart muscle must be completely fine. Mild cases can't leave lasting damage.\" Which response by the nurse is most accurate?",
            "options": [
              "Even mild inflammation injures the muscle cells, and over time it can cause scarring that changes the heart's structure.",
              "That's right; when there is little to no discomfort, the muscle cells are not injured and no lasting change is expected.",
              "Lasting damage occurs only if fluid collects around the heart, so it depends on whether an effusion develops later.",
              "Scarring happens only after the condition reaches heart failure, so it is not a concern while symptoms stay mild."
            ],
            "answer": 0,
            "rationale": "Correct: Myocarditis ranges from a mild disorder with little to no discomfort up to heart failure, but the inflammation itself causes direct injury, degeneration and necrosis of the myocytes, and over time it can create fibrosis and scarring that lead to structural changes. Incorrect: Mild symptoms do not mean the myocytes are uninjured. Pericardial effusion is a separate process in the pericardial space, not the source of myocardial scarring. Heart failure is the severe end of the range, not a prerequisite for fibrosis.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse reviews echocardiogram reports for two clients. Client A has about 40 mL of fluid in the pericardial space. Client B has about 200 mL and a blood pressure of 86/52 mm Hg. Which interpretation is accurate?",
            "options": [
              "Both clients have a pericardial effusion, because any measurable fluid in the pericardial space is abnormal.",
              "Client A has a tamponade-level volume, while client B's volume represents only an early effusion.",
              "Client A needs urgent pericardiocentesis, while client B can be treated first with NSAIDs and reassessed.",
              "Client A's volume is within the normal lubricating range, while client B's is consistent with tamponade."
            ],
            "answer": 3,
            "rationale": "Correct: A small amount of pericardial fluid, about 15 to 50 mL, is normal and acts as a lubricant between the layers, so 40 mL is normal. About 200 mL compresses the heart and causes cardiac tamponade, and client B's hypotension is a sign of decreased cardiac output. Incorrect: Pericardial fluid is not abnormal in itself; effusion is fluid in excess of the normal amount. Calling 40 mL tamponade-level reverses the two volumes. Tamponade is a medical emergency treated with pericardiocentesis, so client B, not client A, needs the fluid drawn out quickly.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is caring for two clients with pericarditis. Client A has a temperature of 38.4 C (101.1 F), sharp chest pain that worsens with deep breathing, a pericardial friction rub, and a blood pressure of 128/76 mm Hg. Client B has a blood pressure of 84/50 mm Hg, new confusion, dizziness, jugular vein distension, and muffled heart sounds. Which action should the nurse anticipate first?",
            "options": [
              "Pericardiocentesis for client A, since the friction rub shows fluid is compressing the heart",
              "Pericardiocentesis for client B, so the fluid around the heart is drawn out without delay",
              "Colchicine for client B, then a repeat blood pressure once the NSAID trial is complete",
              "Corticosteroids for client B, then pericardiocentesis only if the next dose has no effect"
            ],
            "answer": 1,
            "rationale": "Correct: Client B shows signs of decreased cardiac output (hypotension, confusion, dizziness) with jugular vein distension and muffled heart sounds, consistent with cardiac tamponade. Tamponade is a medical emergency because the chambers cannot stretch and fill, so pericardiocentesis is done quickly to draw the fluid out. Incorrect: Client A's fever, sharp pain that worsens with deep breathing, and friction rub fit acute pericarditis with a stable blood pressure, and a friction rub is a scratching sound, not evidence of compressing fluid. Colchicine is for pericarditis not responding to NSAIDs and does not remove fluid. Corticosteroids are \"give or take\" and delaying fluid removal is unsafe in tamponade.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A nursing student is explaining why a client with cardiac tamponade has distended jugular veins. Which statement by the student shows correct understanding?",
            "options": [
              "The fluid overstretches the chambers so they overfill, and the extra volume backs up into the neck veins.",
              "The fluid keeps the chambers from stretching and filling, output falls, and blood backs up in the system.",
              "The fever from inflammation raises cardiac output, and the extra circulating volume distends the neck veins.",
              "The inflamed pericardium spreads to the neck veins, and the friction rub reflects the turbulence it creates."
            ],
            "answer": 1,
            "rationale": "Correct: In tamponade the fluid compresses the heart so the chambers cannot stretch and fill with blood; cardiac output drops, and jugular vein distension results from blood backing up in the system because of the decreased cardiac output. Incorrect: The chambers are restricted, not overstretched or overfilled, so the first option reverses the mechanism. Fever is a sign of the inflammatory process in acute pericarditis and does not raise output in tamponade. The friction rub is a scratching sound heard on auscultation, not a cause of neck vein distension.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with suspected cardiac tamponade has an arterial line in place. While watching the real-time pressure display through several breaths, which observation would the nurse recognize as pulsus paradoxus?",
            "options": [
              "Systolic pressure falls each time the client breathes out, suggesting the chambers are overfilling",
              "Systolic pressure rises each time the client breathes in, suggesting cardiac filling is impaired",
              "Diastolic pressure falls each time the client breathes in, suggesting conduction is disrupted",
              "Systolic pressure falls each time the client breathes in, suggesting cardiac filling is impaired"
            ],
            "answer": 3,
            "rationale": "Correct: Pulsus paradoxus is a decrease in systolic blood pressure with inspiration. It indicates that the heart is not pumping properly and that something is impacting cardiac filling, and an arterial line shows it most clearly because the nurse can watch the pressure change as the client breathes in. Incorrect: A drop on expiration is the wrong phase of breathing, and the chambers in tamponade are restricted rather than overfilling. A systolic rise on inspiration is not pulsus paradoxus, which is defined as a drop. The finding involves systolic, not diastolic, pressure and reflects impaired filling, not disrupted conduction.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with chest pain has an ECG showing both ST elevations and ST depressions. A nursing student says, \"ST elevation means this has to be a heart attack.\" Which response by the nurse is most accurate?",
            "options": [
              "Pericarditis can show both ST elevation and depression and may resemble an MI, but the clinical symptoms differ.",
              "Pericarditis produces ST depression only, so any ST elevation on this tracing confirms a myocardial infarction.",
              "ST changes in pericarditis appear only after tamponade develops, so this tracing rules pericarditis out for now.",
              "Pericarditis does not alter the ECG; changes like these come from the conduction disruption of myocarditis."
            ],
            "answer": 0,
            "rationale": "Correct: The ECG in pericarditis shows elements of both ST depression and ST elevation, and in some cases it looks similar to an MI; the clinical symptoms are what differ. Incorrect: Pericarditis is not limited to ST depression, so elevation alone does not confirm an MI. ECG changes are listed as a sign of acute pericarditis itself, not something that waits for tamponade. Myocarditis does disrupt conduction, but the lecture also teaches specific ST changes for pericarditis, so the ECG is not unaffected.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with acute pericarditis has taken an NSAID as prescribed for several days but still has fever and sharp chest pain that worsens with deep breathing. Colchicine is added. The client says, \"Isn't that a gout medicine? I don't have gout.\" Which response by the nurse is most accurate?",
            "options": [
              "It is used here as an antiviral, since a virus is the most common cause of inflammation in the heart.",
              "It is the first-line drug for pericarditis and is normally started before any NSAID is ever tried.",
              "It is usually for gout, but it works well for pericarditis that isn't responding to NSAIDs.",
              "It is added to draw the extra fluid out of the sac around the heart so a needle procedure is not needed."
            ],
            "answer": 2,
            "rationale": "Correct: Colchicine is typically a gout medication but has recently been found to work well for pericarditis that is not responding to NSAIDs, which matches this client's persistent fever and pain. Incorrect: Colchicine is not an antiviral; antivirals are the lecture's treatment for myocarditis, whose leading cause is viruses. NSAIDs come first, and colchicine is added when they fail, so it is not given before NSAIDs. Fluid in tamponade is removed by pericardiocentesis, a needle placed directly into the pericardium, not by a drug.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is reviewing treatment plans for two clients. Client A has viral myocarditis with moderate symptoms. Client B has acute pericarditis without tamponade. Which plan pairing is consistent with the lecture?",
            "options": [
              "Client A: anti-inflammatories only, since antivirals are reserved for pericarditis. Client B: NSAIDs.",
              "Client A: pericardiocentesis to remove fluid. Client B: antivirals to treat the underlying viral cause.",
              "Client A: antivirals. Client B: corticosteroids, since they work reliably for nearly every client.",
              "Client A: antivirals, with anti-inflammatories possible. Client B: anti-inflammatories such as NSAIDs."
            ],
            "answer": 3,
            "rationale": "Correct: Myocarditis treatment depends on symptom severity and uses antivirals, with anti-inflammatories also possible. Pericarditis is treated with anti-inflammatories such as NSAIDs (aspirin is seen occasionally). Incorrect: Antivirals are the myocarditis treatment, not something reserved for pericarditis. Pericardiocentesis is for cardiac tamponade, not myocarditis. Corticosteroids are described as \"give or take\": sometimes they work really well and sometimes not, so they are not reliably effective.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is admitted with acute pericarditis. Blood pressure is 124/78 mm Hg, and the client is alert and oriented with flat neck veins. Which findings would the nurse expect at this stage? Select all that apply.",
            "options": [
              "Sharp chest pain that worsens with a deep breath",
              "Temperature elevation related to the inflammatory process",
              "Jugular vein distension from blood backing up in the system",
              "A scratching sound heard like rubbing on a balloon",
              "Hypotension with new confusion and dizziness from low output"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "rationale": "Correct: Acute pericarditis presents with sharp chest pain that worsens with deep breathing, fever because of the inflammatory process, and a pericardial friction rub, a scratching sound almost like rubbing on a balloon. Incorrect: Jugular vein distension and hypotension with confusion and dizziness are signs of decreased cardiac output that appear once pericarditis progresses to cardiac tamponade; this client's stable blood pressure, orientation and flat neck veins show tamponade has not developed.",
            "topic": "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-acs-mi",
      "label": "Acute Coronary Syndrome &amp; Myocardial Infarction",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A 44-year-old client is awakened at 0300 by chest pain. The ECG shows ST elevation that returns to normal after a nitrate is given. A dye study of the coronary vessels shows very little narrowing. Which explanation best fits these findings?",
            "options": [
              "Rupture of a thin-capped plaque with a small clot that dissolved, fitting an unstable angina pattern",
              "Spasm of the artery, often from endothelial damage, that reduced flow without much plaque",
              "Complete clot occlusion of the vessel, fitting a STEMI that went on to reopen without any treatment",
              "Fixed plaque narrowing that limits flow during demand, fitting a stable angina pattern of symptoms"
            ],
            "answer": 1,
            "rationale": "Correct: Prinzmetal's (variant) angina is a vasospasm of the coronary artery, often from endothelial damage, that tends to occur at rest, may show ST elevation, and is oftentimes treated with nitrates because they relax the spasm; these clients may or may not have plaque, which fits the minimal narrowing. Incorrect: Unstable angina also can occur at rest, but it requires plaque rupture and thrombus, which the near-normal dye study does not support. A STEMI is complete occlusion with ECG changes that stay, not ones that resolve with a nitrate. Stable angina flares with strenuous activity, not during sleep.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a long history of stable angina calls the clinic: chest pain woke him an hour ago, it now spreads into his jaw, and it has not stopped five minutes after his first nitroglycerin. He says, \"It's easing a little, so my daughter can drive me to the ER after lunch.\" Which response by the nurse is best?",
            "options": [
              "\"Since it is easing, rest and take your next dose; this still fits your usual pattern of angina at rest.\"",
              "\"Your daughter driving you is fine, as long as you go right away and do not drive yourself there.\"",
              "\"Pain that wakes you could be heartburn; take an antacid and call back if it is no better in an hour.\"",
              "\"New features like this point to unstable angina, so hang up and call 911 now rather than ride in a car.\""
            ],
            "answer": 3,
            "rationale": "Correct: In a client with stable angina, pain that is more severe than normal (not stopping or worsening five minutes after the first nitro), different in location (jaw), or occurring at rest signals unstable angina, a medical emergency; the client should call 911 right now and should most definitely not be driven or drive to the ER. Incorrect: Being driven by a family member still delays care; the lecture's teaching is to call 911. Stable angina flares with strenuous activity, so pain that wakes him is not his usual pattern, and attributing it to heartburn is the misreading the lecture warns against.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A client admitted with new chest pain at rest had ECG changes on arrival that were back to normal on the repeat ECG. Serial troponins show no change. Which interpretation by the nurse is most accurate?",
            "options": [
              "Unstable angina; the blockage was incomplete or the clot dissolved, so no tissue infarcted",
              "NSTEMI; a normal ST segment on the repeat tracing is the defining sign of a non-ST elevation MI",
              "STEMI that has reperfused; the ECG returning to normal shows the occlusion was opened in time",
              "Stable angina; ECG changes that resolve show the pain fits a predictable pattern of exertion"
            ],
            "answer": 0,
            "rationale": "Correct: In unstable angina the ECG changes and then goes back to normal and cardiac enzymes typically do not change, because the blockage wasn't complete or the clot dissolved and there was no infarction. Incorrect: An NSTEMI can have a normal ST segment, but it is a myocardial infarction, so troponin increases and the ECG changes stay. A STEMI's ECG changes do not go back to normal on a repeat ECG. First-time chest pain at rest is treated as unstable until proven otherwise, not as stable angina, which flares with exertion.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "On day 10 after an MI, a client says, \"I feel great, and my scar must be fully healed by now, so I want to get back to my heavy lifting.\" Which response reflects what is happening in the heart muscle at this point?",
            "options": [
              "\"The scar finished forming within the first few days, so the main concern now is the risk of new clots.\"",
              "\"Necrosis has not started yet at this stage, so limits are to keep the tissue from beginning to die.\"",
              "\"Dead tissue is being cleared away now, which leaves the wall very weak and at risk of rupturing.\"",
              "\"The scar is complete by now, but it is thinner than normal muscle, so it can still stretch with effort.\""
            ],
            "answer": 2,
            "rationale": "Correct: At 1 to 2 weeks the necrotic tissue is being cleared away and the myocardium is very weak and susceptible to rupture; it is not until about 6 weeks that necrotic tissue is replaced by tough scar tissue. Incorrect: Scar formation is not complete at day 10, and the lecture describes scar as thickened and tougher, not thinner. Necrosis has already begun by about 4 hours after the occlusion, so it is not still pending at day 10.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A nursing student says, \"Necrosis doesn't begin until about 4 hours, so if this client gets to the cath lab at 3 1/2 hours, no heart muscle will be lost.\" Which correction by the nurse is most accurate?",
            "options": [
              "\"ATP runs out at once and irreversible injury can start by 30 minutes, so the ideal is far sooner.\"",
              "\"That is right; the 4-hour guideline exists because injury before that point can still be fully reversed.\"",
              "\"Heart muscle keeps a store of ATP for about 4 hours, so the earliest damage is only electrical.\"",
              "\"Loss begins only after 1 to 2 weeks, once the dead tissue is cleared, so timing mainly affects scarring.\""
            ],
            "answer": 0,
            "rationale": "Correct: With acute ischemia ATP depletes instantly, contractility falls within 1 to 2 minutes, and irreversible injury can occur from 30 minutes up to 4 hours; most guidelines say reperfusion within 4 hours, but within 30 minutes would be ideal. Incorrect: Injury becomes irreversible well before 4 hours, so the 4-hour mark is an outer limit, not a safe window. Myocardial cells cannot store ATP and must be fed continuously. Weeks 1 to 2 describe clearing of tissue that has already died.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an evolving MI asks why the team is giving oxygen and working to lower the heart's workload when \"part of my heart is already dead.\" Which statement by the client after teaching shows correct understanding?",
            "options": [
              "\"This will restore the dead center of the damage if the blood flow is opened quickly enough.\"",
              "\"The outer area cannot recover anymore, so this is only meant to protect the dead center.\"",
              "\"This keeps the injured and starved areas around the dead part from joining the dead part.\"",
              "\"Only the injured area can be saved, since the outer starved area always goes on to die.\""
            ],
            "answer": 2,
            "rationale": "Correct: The goal is to not extend the size of the infarct by increasing oxygen and decreasing demand; the injury zone can still be perfused and restored to be viable, and the outer ischemic zone can fully recover if perfused again. Incorrect: The infarction zone is necrotic and cannot recover; the goal there is only to stop it from increasing. The ischemic zone is the zone with the best chance of full recovery, so it is not lost.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients in the ED both have elevated troponin. Client A is restless and repeatedly asks for staff; the ECG shows a slight ST depression with a normal QRS. Client B is quiet and pale; the ECG shows ST elevation with a QRS that has widened over the past hours, and occlusion of the left anterior descending artery is suspected. Which conclusion should guide the nurse's priority?",
            "options": [
              "Client A, because ST depression signals the larger infarct and the poorer expected outcome of the two",
              "Client A, because extreme restlessness means that infarct is extending faster than Client B's is",
              "Neither first, because both troponins are elevated and the troponin alone decides who is seen first",
              "Client B, because that ECG and the likely vessel point to a larger, deadlier MI"
            ],
            "answer": 3,
            "rationale": "Correct: Client B's ST elevation and widening QRS indicate a STEMI, which typically has a larger infarct and worse outcomes; the LAD feeds most of the left ventricle, and an LAD MI (the widow-maker) is often very lethal if not treated very quickly. The ECG, not the troponin, helps determine the next step. Incorrect: ST depression with a normal QRS fits an NSTEMI, which is typically smaller with better outcomes. Restlessness and anxiety are signs of MI in general and do not outweigh the ECG evidence. Troponin is elevated in both STEMI and NSTEMI, so it does not separate them.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse reviews findings on four clients who each have known coronary plaque. Which client's findings indicate the plaque at highest risk of rupture?",
            "options": [
              "Small lipid core, thick fibrous cap, and a C-reactive protein that is markedly elevated",
              "Enlarged lipid core, thinning fibrous cap, and a C-reactive protein that is elevated",
              "Enlarged lipid core, thick fibrous cap, and a C-reactive protein that is within normal",
              "Small lipid core, thinning fibrous cap, and a C-reactive protein that is within normal"
            ],
            "answer": 1,
            "rationale": "Correct: Unstable plaque has a large lipid core, a fibrous cap that gets thinner as the core grows, and ongoing inflammation, which CRP measures; all three together raise rupture risk. Incorrect: A thick fibrous cap is what gives stable plaque its stability, so a high CRP alone does not outweigh a thick cap over a small core. The other combinations each contain only one or two of the three unstable features.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A 61-year-old woman with a history of heartburn reports feeling unusually tired, dizzy, and nauseated since this morning. She took antacid tablets twice with no change and says, \"This feels different from my usual reflux.\" She denies chest pain. Which hypothesis should the nurse prioritize?",
            "options": [
              "Worsening reflux, since a history of heartburn makes a digestive cause the most probable one",
              "Stable angina, since tiredness and dizziness that come and go fit a predictable exertion pattern",
              "Acute coronary syndrome, since these symptoms are often what women report and they have changed",
              "Anxiety, since dizziness and nausea without chest pain point away from a cardiac cause of illness"
            ],
            "answer": 2,
            "rationale": "Correct: Dizziness, nausea, vomiting, tiredness, and heartburn are ACS symptoms often reported by women, and many women with ACS took antacids thinking it was heartburn; the particular concern is when the experience changes or gets worse. Incorrect: Her reflux history is a red herring that the lecture specifically warns about. Stable angina flares with strenuous activity, which is not described. The absence of chest pain does not rule out ACS, because chest pain is the symptom typically associated with men.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          },
          {
            "stem": "A client arrives in the ED with chest pain that began at rest 40 minutes ago. Which findings would the nurse recognize as consistent with a myocardial infarction rather than stable angina? Select all that apply.",
            "options": [
              "Pain unrelieved by nitroglycerin, like an elephant sitting on the chest",
              "Diaphoresis and shortness of air, along with nausea and vomiting episodes",
              "Mild chest tightness that came on during strenuous activity, as it often does",
              "Statement of \"I know something's wrong\" with restless pacing in the room",
              "Pallor with weak peripheral pulses and a fist held against the sternum",
              "Brief chest tightness that has followed the same pattern for many years"
            ],
            "answers": [
              0,
              1,
              3,
              4
            ],
            "rationale": "Correct: ACS pain lasts longer, is not relieved by nitroglycerin, and feels like an elephant on the chest; diaphoresis, shortness of air, and nausea and vomiting accompany it; an impending sense of doom with extreme anxiety and restlessness, pallor and weak pulses from poor perfusion, and the Levine sign (fist to the chest) are listed signs of MI. Incorrect: Mild chest tightness brought on by strenuous activity, and brief chest tightness in a long-established pattern, describe stable angina; the concern is when the experience changes or gets worse.",
            "topic": "Acute Coronary Syndrome &amp; Myocardial Infarction",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-acute-mi-pharm",
      "label": "Acute MI Pharmacology",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client admitted with a STEMI has received aspirin, sublingual nitroglycerin and a beta blocker. The client says, \"The nitroglycerin took my chest pain away, so that must be the drug that is going to keep me alive.\" Which response by the nurse is most accurate?",
            "options": [
              "Nitroglycerin is the drug most closely tied to survival, since it lowers both preload and afterload.",
              "Oxygen is what lowers the risk of death most, so it is given to every client with an MI.",
              "Nitroglycerin and aspirin lower the risk of death equally; the beta blocker mainly treats the pain.",
              "Nitroglycerin helps limit infarct size, but aspirin is the one shown to lower deaths in this MI."
            ],
            "answer": 3,
            "rationale": "Correct: The lecture states nitroglycerin does not reduce mortality; it reduces preload and afterload to limit infarct size. Aspirin decreases mortality in STEMI, and beta blockers can also help with mortality. Incorrect: Relief of pain does not mean nitroglycerin is the survival drug, and its preload and afterload effects limit infarct size rather than lower mortality. Oxygen may not have a benefit if the client is not hypoxic, and whether it is ordered depends on the provider. Nitroglycerin and aspirin are not equal on mortality, and beta blockers reduce oxygen demand and can help with mortality, not just pain.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an acute MI rates chest pain 7/10. Blood pressure is 128/80, and the client reports a mild headache. Sublingual nitroglycerin is ordered. While gathering a history, the client mentions taking sildenafil the night before. Which action should the nurse take?",
            "options": [
              "Give the nitroglycerin, since a headache is an expected effect and the blood pressure is stable.",
              "Hold the nitroglycerin and notify the provider of the recent medication before any dose.",
              "Give the nitroglycerin IV instead of sublingually, so the dose can be adjusted to blood pressure.",
              "Give the nitroglycerin and recheck the blood pressure before giving a second dose."
            ],
            "answer": 1,
            "rationale": "Correct: Nitroglycerin is not given with sildenafil. Both vasodilate the veins and reduce preload, which can lead to really profound hypotension, so the nurse holds the dose and notifies the provider. Incorrect: Headache and flushing are common nitroglycerin effects, but a normal blood pressure now does not protect against the combined vasodilation. The IV route is used when the client can maintain blood pressure; it does not make the combination with sildenafil safe. Giving the dose and rechecking afterward allows the profound hypotension to happen first.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an acute MI reports crushing chest pain rated 9/10. Vital signs are heart rate 104, blood pressure 84/50 and respirations 9 and shallow. IV morphine is ordered as needed for pain. Which action by the nurse is most appropriate?",
            "options": [
              "Give the morphine now, since relief of severe pain is the main reason it is used in an MI.",
              "Give the morphine, then recheck respirations and blood pressure once the dose takes effect.",
              "Withhold this dose and report the low respirations and blood pressure to the provider.",
              "Give the morphine along with oxygen so that the oxygen offsets any drop in breathing."
            ],
            "answer": 2,
            "rationale": "Correct: Morphine's side effects are respiratory depression and hypotension, and the lecture stresses checking heart rate, blood pressure and respiratory effort first, because these drugs can push an unstable client over the edge. A respiratory rate of 9 and a blood pressure of 84/50 show this client may not tolerate it. Incorrect: Severe pain makes morphine an option to consider, but it does not override signs the client cannot tolerate it. Rechecking only after the dose skips the pre-administration check. Oxygen increases oxygen delivery to the myocardium; it does not reverse respiratory depression or hypotension.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client received alteplase for a STEMI at a hospital without a cath lab. The client asks, \"If that medicine already broke up the clot, why am I still getting heparin and clopidogrel?\" Which response by the nurse is accurate?",
            "options": [
              "Alteplase breaks down the clot that is there now; these drugs help stop new clots from forming.",
              "Heparin and clopidogrel convert plasminogen into plasmin, which finishes dissolving the clot.",
              "These drugs counteract the bleeding risk from alteplase, so they protect you from hemorrhage.",
              "They are given only to prepare the artery for PCI, which is still needed after any clot buster."
            ],
            "answer": 0,
            "rationale": "Correct: Anyone who has had fibrinolytic therapy is given heparin and antiplatelet therapy such as clopidogrel to help prevent new clots. Alteplase dissolves the current clot; the others keep new ones from forming. Incorrect: Converting plasminogen into plasmin is alteplase's own mechanism, not that of heparin or clopidogrel. These drugs add to clot prevention, so they do not counteract bleeding risk; bleeding remains the main adverse effect to watch for. PCI is the first choice when a cath lab is available, and fibrinolytic therapy is effective when one is not; the adjunct drugs are given after fibrinolytic therapy regardless.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A rural hospital without a cath lab admits four clients with STEMI. The provider plans fibrinolytic therapy for each. Which client's plan should the nurse question first?",
            "options": [
              "A 58-year-old who chewed aspirin in the ambulance and has a heart rate of 96",
              "A 70-year-old with diabetes who is also receiving a beta blocker for the MI",
              "A 61-year-old who was treated for a hemorrhagic stroke a few weeks ago",
              "A 49-year-old who was given sublingual nitroglycerin and now has a headache"
            ],
            "answer": 2,
            "rationale": "Correct: Thrombolytics are given only if the client is eligible with no contraindications, and the lecture's example is a recent hemorrhagic stroke. These clients are already at huge risk for bleeding. Incorrect: Aspirin is routinely given and a heart rate of 96 is not a stated contraindication. Diabetes is linked to silent MI, not to ineligibility, and a beta blocker is part of standard initial therapy. Headache is a common effect of nitroglycerin and does not affect eligibility for a clot buster.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "Ninety minutes after alteplase, a client's chest pain has resolved. The cardiac monitor then shows a run of ventricular tachycardia. The client's IV site is dry and there is no bleeding noted. How should the nurse interpret this finding?",
            "options": [
              "It is a reperfusion dysrhythmia that can occur as blood returns to ischemic muscle.",
              "It indicates alteplase has failed and the clot is still fully blocking the artery.",
              "It is the main adverse effect of alteplase, which is bleeding into the heart muscle.",
              "It is a reaction to the heparin given after alteplase, which should now be stopped."
            ],
            "answer": 0,
            "rationale": "Correct: When oxygen-deprived myocardium suddenly receives oxygenated blood, reperfusion injury can occur, and the lecture names ventricular tachycardia and ventricular fibrillation as reperfusion dysrhythmias that need close monitoring. Resolved chest pain alongside the new rhythm fits restored flow. Incorrect: Resolved chest pain does not fit a still-blocked artery. Bleeding is alteplase's main adverse effect, but it is a separate concern from a reperfusion dysrhythmia, and no bleeding is seen. Heparin is given after fibrinolytic therapy to prevent new clots; it is not linked to these dysrhythmias on the page.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "After successful reperfusion of an occluded coronary artery, a client develops signs of heart failure. A nursing student explains the cause to the nurse. Which statement by the student is accurate?",
            "options": [
              "Clot fragments released by the clot buster lodge downstream and stun the heart muscle.",
              "White blood cells drawn to the damaged tissue release free radicals that stun it.",
              "Alteplase converts plasmin into plasminogen, which then injures the reperfused tissue.",
              "Platelets that reach the reopened artery release free radicals that aspirin cannot block."
            ],
            "answer": 1,
            "rationale": "Correct: Myocardium deprived of oxygen that suddenly receives oxygenated blood can become stunned, which can cause heart failure. White blood cells come to the infarcted tissue and release oxidized free radicals that cause this reperfusion injury. Incorrect: The page does not attribute stunning to clot fragments. The alteplase option reverses its mechanism; alteplase converts plasminogen into plasmin. Platelets are the target of aspirin's antiplatelet effect, but the free radicals in reperfusion injury come from white blood cells, not platelets.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an acute MI has a heart rate of 50 and a blood pressure of 88/54, with clear respirations at 16. Orders include a beta blocker, sublingual nitroglycerin, IV morphine and aspirin. Which medication can the nurse give as ordered while clarifying the others?",
            "options": [
              "The beta blocker, to lower heart rate and myocardial oxygen demand",
              "Sublingual nitroglycerin, to reduce preload and limit infarct size",
              "IV morphine, to relieve the pain and dilate vessels to help flow",
              "Aspirin, chewed, to suppress platelet aggregation in the thrombus"
            ],
            "answer": 3,
            "rationale": "Correct: Aspirin makes platelets less sticky and suppresses aggregation, so its action does not lower heart rate or blood pressure; it is routinely given and chewed to speed absorption. Incorrect: Beta blockers reduce heart rate, contractility and blood pressure, which this client cannot afford. Nitroglycerin reduces preload and is given IV only if blood pressure can be maintained, so hypotension makes it risky. Morphine can cause hypotension. The lecture warns that these drugs can push an unstable client over the edge, so vital signs are checked first.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A 52-year-old client with a STEMI says, \"I had the chest pressure for hours but figured I was too young for a heart attack, so I waited to see if it would pass.\" Which teaching point should the nurse emphasize?",
            "options": [
              "Waiting was understandable, since most MIs occur in people who are older than 65.",
              "Delaying care drives MI deaths, and about half of people with an MI are under 65.",
              "Survival is about 50% even with care, so prevention matters more than fast care.",
              "Pain that eases on its own rules out an MI, so waiting a while is a safe first step."
            ],
            "answer": 1,
            "rationale": "Correct: A big reason for MI mortality is hesitating or delaying care, and about half of people with MI are younger than 65. With treatment, survival is about 90 to 95%, so clients should seek care when they suspect an MI. Incorrect: Age under 65 does not make waiting reasonable, because about half of MIs happen in that group. Survival with treatment is about 90 to 95%, not 50%, which is why prompt treatment matters. Symptoms are not a reliable rule-out; clients older than 65 and those with diabetes can have a silent MI with no symptoms at the time.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client arrives with a STEMI. Oxygen saturation is 98% on room air, and the provider's initial orders include aspirin, sublingual nitroglycerin and a beta blocker. Which actions by the nurse are appropriate? Select all that apply.",
            "options": [
              "Check heart rate, blood pressure and respiratory effort before giving the drugs.",
              "Have the client chew the first aspirin dose rather than swallow it whole.",
              "Start oxygen with the nitroglycerin, since it helps ischemic muscle at any saturation.",
              "Ask the client about any recent sildenafil use before giving nitroglycerin.",
              "Expect morphine to replace aspirin, since morphine is what lowers STEMI deaths.",
              "Plan to give the beta blocker to raise heart rate and improve oxygen delivery."
            ],
            "answers": [
              0,
              1,
              3
            ],
            "rationale": "Correct: Vital signs are checked before any of these drugs because they can push an unstable client over the edge. The first aspirin dose is chewed to speed absorption. Nitroglycerin is not given with sildenafil because the combined vasodilation can cause really profound hypotension. Incorrect: New research shows oxygen may not have a benefit if the client is not hypoxic, and whether it is ordered depends on the provider, so a saturation of 98% does not call for it automatically. Beta blockers reduce heart rate and contractility to lower oxygen demand; they do not raise heart rate. Aspirin, not morphine, decreases mortality in STEMI; newer data suggest morphine may inhibit antiplatelet drugs and worsen outcomes.",
            "topic": "Acute MI Pharmacology",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-aneurysms",
      "label": "Aneurysms &amp; Aortic Dissection",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A 58-year-old client with a newly found aortic aneurysm has a grandfather who had an aneurysm, a fractured pelvis from a fall 20 years ago, and blood pressure that has gone untreated for 15 years. Which factor in this history does the nurse identify as the primary driver of the aneurysm?",
            "options": [
              "The long-standing hypertension that has never been treated",
              "The hereditary pattern suggested by the grandfather's aneurysm",
              "The old pelvic fracture, as trauma damages the vessel walls",
              "The client's age, which places the client in the high-risk group"
            ],
            "answer": 0,
            "rationale": "Correct: Aneurysms are primarily a result of hypertension; prolonged, uncontrolled pressure on the arterial wall dilates and weakens it until a pouch forms. Incorrect: A hereditary component and trauma are both named risk factors, but they are contributors, not the primary driver; hypertension (with atherosclerosis) is. Older adult age is defined as over 65, so a 58-year-old client does not fall into that risk group.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a known abdominal aortic aneurysm calls the clinic reporting a sudden, severe tearing pain in the jaw and neck. The client says, \"It can't be my aorta, because my chest and belly feel fine.\" Which response by the nurse is most appropriate?",
            "options": [
              "\"Jaw pain points to a berry aneurysm in the brain, so we will plan an angiogram.\"",
              "\"Pain from an aneurysm in the aorta stays in the abdomen, so this is likely unrelated.\"",
              "\"This pain can come from a tear in the aorta; you need emergency evaluation now.\"",
              "\"Your aneurysm can grow without symptoms, so let's recheck it at your next visit.\""
            ],
            "answer": 2,
            "rationale": "Correct: Sudden, severe tearing pain is the most common manifestation of aortic dissection; it is most likely felt in the chest but can also be in the neck, jaw, back or abdomen. An existing aneurysm raises the risk of dissection, which is a medical emergency. Incorrect: The berry-aneurysm option misattributes the pain by location; nothing on the page links jaw pain to the circle of Willis. Saying aortic pain stays in the abdomen is wrong because dissection pain can occur in the neck and jaw. An aneurysm can be asymptomatic, but sudden tearing pain is a new symptom that points to dissection, not routine follow-up.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "An angiogram report for a client with severe hypertension describes a balloon-shaped pouch on one side of an artery, with a small neck at its base, located where the artery divides near the base of the brain. Which type of aneurysm does the nurse recognize from this description?",
            "options": [
              "Saccular aneurysm with a wide neck along one side of the wall",
              "Berry aneurysm at a bifurcation of the circle of Willis",
              "Fusiform aneurysm from diffuse sclerotic hardening",
              "False aneurysm from a tear in the inner artery wall"
            ],
            "answer": 1,
            "rationale": "Correct: A berry aneurysm is a subtype of saccular aneurysm with the same pouch shape but a small neck, and it is located at bifurcations, commonly the circle of Willis. Incorrect: A saccular aneurysm also involves only one side of the wall, but it has a wide neck, so the small neck rules it out. Fusiform involves the entire circumference, not one side. A false aneurysm is a localized tear with the outer walls intact, often after a vascular procedure.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who had a vascular graft placed last month is told that a false (pseudo) aneurysm has formed where the graft joins the natural artery. Which statement by the nurse about this finding is accurate?",
            "options": [
              "\"It involves all three layers of the artery wall, which makes it a true aneurysm.\"",
              "\"It developed from years of diffuse hardening and will be watched until it grows.\"",
              "\"It will need a clip placed around its base to keep it from bursting in the brain.\"",
              "\"It is a type of hematoma; some heal on their own and some need more treatment.\""
            ],
            "answer": 3,
            "rationale": "Correct: A false aneurysm is a localized tear in the inner artery wall with the outer walls still intact, is considered a type of hematoma, often follows vascular interventional procedures such as leakage between a graft and a natural artery, and sometimes heals on its own while sometimes requiring intervention. Incorrect: Involving all three layers defines a true aneurysm. Diffuse sclerotic changes and watching for growth describe a fusiform aneurysm. Clipping at the base is a surgical option for a berry aneurysm.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a fusiform aortic aneurysm asks, \"Why is the doctor only watching it? My neighbor's brain aneurysm was coiled right away.\" Which response by the nurse best reflects how this aneurysm is managed?",
            "options": [
              "\"Yours bulges from only one side of the wall, so it is less likely to burst.\"",
              "\"Yours came from a procedure, and those often heal without any treatment.\"",
              "\"Coiling is used only once an aneurysm has ruptured, and yours has not yet.\"",
              "\"Yours tends to widen gradually, so treatment may wait until it hits a size.\""
            ],
            "answer": 3,
            "rationale": "Correct: A fusiform aneurysm is usually a gradual, progressive dilation involving the whole circumference of the vessel; it is likely to be monitored to watch it grow, and intervention may not be needed until it reaches a certain size. Incorrect: Involving only one side of the wall describes a saccular aneurysm; fusiform involves the entire circumference. Arising after a procedure and sometimes healing on its own describes a false aneurysm. Coiling is a berry aneurysm surgical option to fill the aneurysm from the inside; it is not described as limited to rupture.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a confirmed aortic dissection is awaiting emergency surgery, and a beta blocker is prescribed. The client asks, \"Will this medicine heal the tear so I can skip the operation?\" Which response by the nurse is accurate?",
            "options": [
              "\"Yes. It strengthens the artery wall, so surgery may not be needed after all.\"",
              "\"No. It slows the heart and lowers pressure so the tear is less likely to extend.\"",
              "\"No. It thins the blood so that a clot cannot form between the torn layers of the wall.\"",
              "\"Yes. It stops the bleeding between the layers, so the wall can seal by itself.\""
            ],
            "answer": 1,
            "rationale": "Correct: Beta blockers decrease heart rate and blood pressure to prevent further tearing or dissection of the artery; surgery remains the most important goal of treatment. Incorrect: Nothing on the page says a beta blocker strengthens or seals the wall, and both 'yes' options wrongly suggest surgery can be skipped. The page does not describe beta blockers as preventing clots; their stated purpose in dissection is lowering heart rate and blood pressure.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client admitted with an aortic dissection had a measurable blood pressure on arrival. An hour later the nurse cannot obtain a blood pressure, and the client has become unresponsive. Which interpretation of these findings is most accurate?",
            "options": [
              "The beta blocker given on arrival is now having its intended pressure-lowering effect.",
              "The cuff reading is unreliable, so the nurse should recheck it in 15 minutes.",
              "Major bleeding has moved volume out of the arteries, signaling progression to shock.",
              "Spasm of the cerebral vessels is reducing flow, which calls for a berry clip."
            ],
            "answer": 2,
            "rationale": "Correct: In later stages of dissection, blood pressure drops and may be completely unattainable because of significant bleeding; blood between the layers of the artery wall is not in the arteries getting where it needs to go. With unresponsiveness, this signals progression toward cardiovascular collapse, shock and death without intervention. Incorrect: Beta blockers lower heart rate and pressure to prevent further tearing, but an unattainable pressure with unresponsiveness is deterioration, not a therapeutic effect. Waiting to recheck delays care in a surgical emergency where minutes matter. Vasospasm control and clipping belong to berry aneurysm management.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an abdominal aortic aneurysm asks why the team is more worried about rupture of this aneurysm than of an aneurysm in a smaller vessel. Which explanation by the nurse is most accurate?",
            "options": [
              "\"The pressure inside the aorta is very high, so a burst there bleeds out quickly.\"",
              "\"The aorta has only one layer in its wall, so a tear passes through more easily.\"",
              "\"Blood flows smoothly through the aorta, so clots cannot form to seal a small leak.\"",
              "\"Aortic aneurysms rarely give a warning, while smaller ones always produce a bruit.\""
            ],
            "answer": 0,
            "rationale": "Correct: Rupture is especially a concern in the aorta, where pressure in the vessel is very high; a ruptured AAA causes the client to bleed out very quickly with a lot of blood involved. Incorrect: The arterial wall has three layers, and a true aneurysm involves all three. Aneurysms cause turbulent, not smooth, flow, which is what makes them susceptible to rupture. A bruit may be heard over any aneurysm with turbulent flow; the page does not say smaller aneurysms always produce one.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse receives report on four clients. Which client should the nurse see first?",
            "options": [
              "A client with an aortic dissection who has just fainted and cannot move the legs",
              "A client with a fusiform aneurysm in whom a bruit is heard over the abdominal aorta",
              "A client with a pseudoaneurysm at a graft site whose outer artery walls are intact",
              "A client with a berry aneurysm who is taking medication to control blood pressure"
            ],
            "answer": 0,
            "rationale": "Correct: Syncope and paralysis of the lower extremities are manifestations of aortic dissection, a surgical emergency that can progress to cardiovascular collapse, shock and death without quick intervention. Incorrect: A bruit is an expected finding from turbulent flow in a fusiform aneurysm that is being monitored. A pseudoaneurysm with intact outer walls may heal on its own. Blood pressure control is the expected medical management for a berry aneurysm.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is performing an initial assessment on a thin older adult client with a suspected abdominal aortic aneurysm (AAA). Which actions or expectations by the nurse are appropriate? Select all that apply.",
            "options": [
              "Listen over the aorta in the abdomen for a whooshing sound",
              "Use deep palpation to define the borders of the mass",
              "Inspect the abdomen for a visible pulsating mass",
              "Expect sudden tearing pain if an AAA is truly present",
              "Expect the same findings wherever on the aorta it lies",
              "Avoid touching the abdomen at all, even with light palpation"
            ],
            "answers": [
              0,
              2
            ],
            "rationale": "Correct: A bruit (a whooshing sound from turbulent flow) heard over the abdominal aorta suggests a AAA, and in thin clients with low body fat a pulsatile mass may be visible on inspection. Incorrect: Deep palpation is a risk for rupture and should not be done. An aneurysm can be completely asymptomatic; sudden, severe tearing pain is the hallmark of aortic dissection. Manifestations depend on where along the aorta the aneurysm sits (for example above versus below the kidneys). Light palpation is acceptable and may reveal a mass, so avoiding all touch is not required.",
            "topic": "Aneurysms &amp; Aortic Dissection",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    }
  ],

  TOPIC_ORDER: [
    "Myocarditis, Pericarditis &amp; Cardiac Tamponade",
    "Acute Coronary Syndrome &amp; Myocardial Infarction",
    "Acute MI Pharmacology",
    "Aneurysms &amp; Aortic Dissection"
  ]
};

/* exam.js reads window.TOPIC_ORDER for the per-topic breakdown strip. */
window.TOPIC_ORDER = window.QUIZ_BANK.TOPIC_ORDER;
