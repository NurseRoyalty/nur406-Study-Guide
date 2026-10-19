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
    },
    {
      "id": "week2-acid-base-balance",
      "label": "Acid-Base Balance",
      "week": 2,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "While reviewing pH with a nursing student, the nurse compares two solutions, one at pH 5 and one at pH 6. The student says, \"They're only one step apart, so the pH 5 solution has just a few more hydrogen ions.\" Which correction by the nurse is accurate?",
            "options": [
              "The pH 6 solution holds more hydrogen ions, since a higher number on the scale reflects more hydrogen ions.",
              "The two differ by one fixed amount of hydrogen ions, since each step on the scale is an equal linear increment.",
              "The pH 5 solution is about twice as acidic, since each step on the scale doubles the hydrogen ion concentration.",
              "The pH 5 solution is ten times more acidic, since each step on the scale is a tenfold change in hydrogen ions."
            ],
            "answer": 3,
            "rationale": "Correct: The pH scale is logarithmic, not linear; each number is 10 times more acidic or alkaline than the one before it, so a pH of 5 is 10 times more acidic than a pH of 6. Incorrect: The doubling option keeps the idea of a multiplier but uses the wrong factor; the change is tenfold. The linear option is the student's own misconception restated. The pH 6 option flips the inverse relationship: when hydrogen ions go up, pH goes down.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients have oxygen saturations in the high 90s. Client A has a serum pH of 7.52; Client B has a serum pH of 7.31. Which statement by the nurse best identifies the client at greater risk of inadequate tissue oxygenation?",
            "options": [
              "Client A, since in an alkalotic environment hemoglobin holds on to oxygen rather than giving it to the tissue.",
              "Client B, since in an acidotic environment hemoglobin holds on to oxygen rather than giving it to the tissue.",
              "Client B, since in an acidotic environment hemoglobin releases its oxygen in the lungs before reaching tissue.",
              "Neither client, since both pH values are between 6.8 and 7.8 and so oxygen delivery is not yet affected."
            ],
            "answer": 0,
            "rationale": "Correct: In an alkalotic environment hemoglobin holds on to oxygen and doesn't give it to the tissue, which can result in inadequate tissue oxygenation; a high saturation does not mean the tissue is receiving that oxygen. This is one reason the body works to avoid alkalosis, which is also difficult to correct. Incorrect: The Client B options flip the relationship; in acidosis hemoglobin gives up oxygen more readily at the tissue. The 6.8 to 7.8 values are the limits of survivability, not a range where oxygen delivery is unaffected; both clients are already outside the normal 7.35 to 7.45.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with renal failure who usually takes bicarb daily has missed several doses and now also has diabetic ketoacidosis with rising beta-hydroxybutyric acid. Which statement best explains why this client is at high risk for worsening acidosis?",
            "options": [
              "Beta-hydroxybutyric acid is a weak acid that holds on to its hydrogen ions, so the chemical buffers cannot bind it.",
              "Beta-hydroxybutyric acid is a volatile acid, and the failing kidneys cannot convert it to carbon dioxide for exhaling.",
              "Beta-hydroxybutyric acid is a non-volatile acid that only the kidneys can eliminate, and these kidneys cannot do so.",
              "Beta-hydroxybutyric acid is cleared by the liver alone, and ketoacidosis prevents the liver from metabolizing it."
            ],
            "answer": 2,
            "rationale": "Correct: Beta-hydroxybutyric acid is a non-volatile acid, and non-volatile acids can be eliminated only by the kidneys; in renal failure patients can no longer maintain a normal pH, which is why they often take bicarb daily. Incorrect: The volatile option is wrong because carbonic acid is the only volatile acid in the body, and it is carbonic anhydrase, not the kidney, that dissociates it into CO2 and water. Most non-volatile acids are strong acids that readily release hydrogen ions, so the weak-acid option is wrong. The liver produces acetoacetic acid and helps metabolize lactic acid; it is not described as the sole route for beta-hydroxybutyric acid.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "Half an hour after a client develops a sudden acid load, the nurse notes an increased rate and depth of breathing. A student asks, \"Shouldn't the kidneys have fixed this by now? They control bicarb, so they must not be working.\" Which response by the nurse is most accurate?",
            "options": [
              "The kidneys respond within seconds by releasing bicarb, so the deeper breathing confirms that they have already failed.",
              "The buffers acted within seconds, the lungs act over minutes to hours, and the kidneys need several hours to days.",
              "The buffers are the long-term regulators, so the kidneys do not respond until the buffer supply is fully used up.",
              "The lungs are the long-term regulators here, and the kidneys correct only acids that are exhaled as carbon dioxide."
            ],
            "answer": 1,
            "rationale": "Correct: The three lines of defense work on different timelines: chemical buffers almost instantaneously (seconds), the respiratory system over several minutes to hours, and renal control over several hours to days. Deeper, faster breathing at 30 minutes is the expected respiratory response, not evidence of renal failure. Incorrect: The first option gives the kidneys the buffers' timeline. Buffers make only small, short-term, unsustainable corrections, and the kidneys, not the buffers or lungs, are the long-term regulators. The lungs, not the kidneys, act on acid eliminated as CO2.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A nursing student is summarizing the body's buffer systems for a care conference. Which statement by the student requires correction by the nurse?",
            "options": [
              "The phosphate buffer is the main buffer outside the cells, and its level is measured on routine blood work.",
              "The bicarbonate-carbonic acid buffer is the main buffer in the extracellular fluid, the fluid outside the cells.",
              "Hemoglobin binds CO2 to form carbaminohemoglobin, carrying it to the lungs to be exhaled.",
              "When pH decreases, proteins accept hydrogen ions; when pH increases, proteins release them."
            ],
            "answer": 0,
            "rationale": "Correct: The phosphate buffer is the main intracellular buffer; it picks up hydrogen ions inside the cell and can't be measured, so this statement needs correcting. Incorrect: The other statements are accurate. Bicarbonate-carbonic acid is the main extracellular buffer. Hemoglobin forms carbaminohemoglobin, carrying CO2 to the lungs and keeping it from dissociating into carbonic acid. Protein carboxyl groups release hydrogen ions as pH rises, and amino groups accept them as pH falls.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who took an overdose of a narcotic has a respiratory rate of 6 breaths per minute. Using the carbonic acid equation, which change in the client's acid-base status does the nurse anticipate?",
            "options": [
              "CO2 falls because fewer breaths bring in less air, so less carbonic acid forms and the pH rises.",
              "CO2 rises, driving the equation toward bicarb so that hydrogen ions are used up and the pH rises.",
              "CO2 rises, and carbonic anhydrase in the lungs turns it into bicarb that is exhaled, so pH holds.",
              "CO2 rises, forming more carbonic acid that releases hydrogen ions, so the pH of the blood falls."
            ],
            "answer": 3,
            "rationale": "Correct: With respiratory depression, such as narcotic use or an overdose, the respiratory rate is so low the lungs can't remove the CO2. In CO2 + H2O to H2CO3 to H+ + HCO3-, more CO2 forms more carbonic acid, which releases hydrogen ions; more hydrogen ions means a lower pH. Incorrect: The option driving toward bicarb ignores that the same dissociation also produces hydrogen ions. In the lungs carbonic anhydrase breaks carbonic acid into CO2 and water for exhaling; bicarb is not exhaled. Slow breathing retains CO2 rather than lowering it.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with acidosis and normally functioning kidneys had an elevated serum potassium on admission. The client's pH has now returned to normal. Which potassium change should the nurse monitor for next?",
            "options": [
              "Continued hyperkalemia, since potassium that has shifted out of the cells stays in the blood after the pH is normal.",
              "Hypokalemia, since potassium moves back into the cells after the excess was already excreted.",
              "Worsening hyperkalemia, since hydrogen ions returning to the blood push more potassium out of the cells.",
              "No change in potassium, since cellular compensation permanently corrected the pH at the level of the cell."
            ],
            "answer": 1,
            "rationale": "Correct: In acidosis hydrogen ions move into the cell and potassium moves out, raising blood potassium. When pH returns to normal, hydrogen ions move back into the blood and potassium moves back into the cells; with working kidneys the excess potassium has already been excreted, so this can lead to hypokalemia. Incorrect: Persistent hyperkalemia is the concern with kidney dysfunction, not working kidneys. Hydrogen returning to the blood is paired with potassium moving into cells, not out. Cellular compensation is temporary, not a permanent solution.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients have healthy kidneys, but neither client's lungs are able to compensate. Client A has a persistent acidosis; client B has a persistent alkalosis. Which statement about renal correction of the two imbalances is accurate?",
            "options": [
              "Client B's will be handled better, since the kidneys excrete bicarb more easily than they hold it.",
              "Both are handled equally well, since the kidneys adjust bicarb in either direction within minutes.",
              "Client A's will be handled better, since it is harder for kidneys to excrete bicarb than hold it.",
              "Neither can be handled by the kidneys, since only the chemical buffers act on a lasting imbalance."
            ],
            "answer": 2,
            "rationale": "Correct: The kidneys control pH by adjusting bicarb: in acidosis they increase bicarb reabsorption and hydrogen ion secretion, and in alkalosis they decrease bicarb reabsorption. It is harder for the kidneys to excrete bicarb than to hold on to it, so they manage an acidotic state better than an alkalotic one. Incorrect: The client B option reverses that relationship. The kidneys are the slowest line of defense, taking several hours to days, not minutes. Chemical buffers make only small, short-term corrections; the kidneys are the long-term regulators.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with COPD who chronically retains CO2 has a serum bicarb above normal and a serum pH within normal limits. A new nurse says the high bicarb is a separate problem that needs treatment to lower it. Which response by the charge nurse is most accurate?",
            "options": [
              "Over time the lungs have produced extra bicarb to offset the retained CO2, so the lungs are protecting the pH.",
              "Over time the kidneys have excreted more bicarb into the urine, and that excretion is what raised the serum bicarb.",
              "Over time the kidneys have held on to more bicarb to balance the retained CO2, so the serum pH stays balanced.",
              "Over time the cell buffers have released bicarb as a sustained fix, so the higher bicarb will remain permanently."
            ],
            "answer": 2,
            "rationale": "Correct: A patient retaining CO2, like a COPD patient, pushes the carbonic acid equation toward more bicarb, and over time the kidneys compensate by retaining bicarb, so this patient has higher CO2 and higher bicarb to balance the serum pH. Incorrect: Excreting bicarb would lower serum bicarb; that is the kidneys' response to a pH that is too high. The kidneys, not the lungs, are the primary controller of bicarb. Buffers make only small, short-term corrections that are not sustainable.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          },
          {
            "stem": "A client's lactic acid level is elevated after a period of shock with poor tissue oxygenation. Which statements about how the body handles this acid are accurate? Select all that apply.",
            "options": [
              "It forms as a byproduct of metabolism that has no oxygen.",
              "The lungs can exhale it as CO2 if breathing rate and depth rise.",
              "The liver and kidneys metabolize it as part of its clearance.",
              "Carbonic anhydrase breaks it down into CO2 and water to exhale.",
              "Once oxygen is restored, it can be reconverted for energy.",
              "Chemical buffers can correct it as a sustained, long-term fix."
            ],
            "answers": [
              0,
              2,
              4
            ],
            "rationale": "Correct: Lactic acid is a byproduct of anaerobic metabolism (metabolism without oxygen). As a non-volatile acid it is not handled by the lungs. It is metabolized by the liver and kidneys, and once oxygen is reestablished to the tissue it can be reconverted and used for energy again. Incorrect: Respiratory control works only on volatile acids, not on non-volatile acids like lactic acid, and carbonic anhydrase acts on carbonic acid, the only volatile acid. Chemical buffers make small, short-term corrections that are not sustainable.",
            "topic": "Acid-Base Balance",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week2-abg-interpretation",
      "label": "ABGs &amp; ABG Interpretation",
      "week": 2,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client admitted after 3 days of prolonged vomiting also takes a loop diuretic at home. Respirations are slow and shallow. ABG: pH 7.51, PaCO2 48, HCO3 36. How should the nurse interpret this ABG?",
            "options": [
              "Uncompensated metabolic alkalosis, since the PaCO2 is still within normal range",
              "Partially compensated metabolic alkalosis, with the lungs retaining CO2",
              "Partially compensated respiratory acidosis, with the kidneys retaining bicarb",
              "Fully compensated metabolic alkalosis, since both the CO2 and bicarb are high"
            ],
            "answer": 1,
            "rationale": "Correct: The pH of 7.51 is basic, and the bicarb of 36 (above 24 to 29) is also basic, so the bicarb matches the pH (Metabolic Equal): metabolic alkalosis, fitting vomiting and loop diuretics as causes. The PaCO2 of 48 is abnormal (above 35 to 45) and moving in the same direction as the bicarb, so the lungs are compensating by slowing breathing to hold on to CO2. Because the pH is still abnormal, it is partially compensated. Incorrect: A PaCO2 of 48 is above the normal range, so this is not uncompensated. Respiratory acidosis would need an acidic pH to match the high CO2, but this pH is basic. Fully compensated requires the pH to be back within 7.35 to 7.45.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients have morning ABGs. Client A has long-standing COPD: pH 7.37, PaCO2 58, HCO3 34. Client B was admitted 4 days ago in DKA and has been treated: pH 7.40, PaCO2 40, HCO3 26. A nursing student says, \"Both pH values are normal, so both imbalances are corrected.\" Which response by the nurse is accurate?",
            "options": [
              "Client A is corrected and client B is compensated, because A's pH leans toward the acidic side.",
              "Both are compensated, because a normal pH always means the cause is still present.",
              "Client A is compensated and client B is corrected; only B's CO2 and bicarb are normal.",
              "Client A is partially compensated, because A's CO2 and bicarb are still abnormal."
            ],
            "answer": 2,
            "rationale": "Correct: Compensated and corrected both have a normal pH; the difference is the CO2 and bicarb. Client A's CO2 and bicarb are still abnormal but balanced (compensated respiratory acidosis, the COPD pattern of holding CO2 with a high bicarb), while client B's CO2 and bicarb are also normal after the cause was treated, which is corrected. The lecture notes a COPD client will never show a fully corrected ABG. Incorrect: Partially compensated requires an abnormal pH; client A's pH of 7.37 is normal, so abnormal CO2 and bicarb with a normal pH means compensated, not partially compensated. A leaning pH identifies the primary problem; it does not make an ABG corrected.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients are both confused and reporting muscle cramps and tremors. Client A has had an NG tube to continuous suction for 4 days. Client B has had prolonged diarrhea for 5 days. Which additional finding would the nurse expect in client B but not in client A?",
            "options": [
              "Warm, flushed skin with deep, rapid respirations",
              "Slow, shallow respirations with nausea and vomiting",
              "Light-headedness with a syncopal episode on standing",
              "Nausea, vomiting, and a change in level of consciousness"
            ],
            "answer": 0,
            "rationale": "Correct: Prolonged diarrhea loses bicarb, causing metabolic acidosis, which lists warm, flushed skin among its manifestations, and the lungs compensate with deep, rapid (Kussmaul-type) breathing to blow off CO2. Prolonged NG suctioning pulls hydrochloric acid out of the stomach, causing metabolic alkalosis, where breathing slows instead. Incorrect: Slow, shallow respirations (respiratory depression to hold on to CO2) belong to client A's metabolic alkalosis, not client B. Light-headedness and syncope are listed for respiratory alkalosis. Nausea, vomiting and changes in level of consciousness appear in both metabolic disorders, so they do not separate the two clients, just as the shared confusion, cramps and tremors do not.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with an NG tube to prolonged suction has an ABG of pH 7.53, PaCO2 43, HCO3 37. The client has no history of lung or kidney disease. Which prescription would the nurse anticipate to address the primary cause?",
            "options": [
              "Breathing into a paper bag to help the client retain CO2",
              "Daily oral bicarb to replace what the kidneys cannot hold",
              "Increasing the rate and depth of breathing to blow off CO2",
              "A proton pump inhibitor to reduce gastric acid secretion"
            ],
            "answer": 3,
            "rationale": "Correct: A basic pH with a high bicarb and a normal CO2 is uncompensated metabolic alkalosis, and NG suctioning pulls hydrochloric acid out of the stomach. Treatment targets the cause; drugs that reduce gastric hydrochloric acid secretion (H2 blockers and proton pump inhibitors) are the lecture's treatment. Incorrect: The paper bag retains CO2 and is the treatment for respiratory alkalosis from hyperventilation; this CO2 is normal, so the lungs are not the problem. Daily bicarb is for dialysis clients with metabolic acidosis and would add more base. Increasing rate and depth to blow off CO2 is the intervention for respiratory acidosis.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A mechanically ventilated client with sepsis and a fever has an ABG of pH 7.53, PaCO2 29, HCO3 26. The ventilator respiratory rate was increased 2 hours ago. Which action would the nurse anticipate?",
            "options": [
              "Increase the set tidal volume to improve ventilation",
              "Expect the kidneys to raise the bicarb within the hour",
              "Collaborate with the team on lowering the set rate",
              "Encourage slow, deep breaths to blow off more CO2"
            ],
            "answer": 2,
            "rationale": "Correct: A high pH with a low CO2 (opposite directions) and a normal bicarb is uncompensated respiratory alkalosis. Sepsis and fever can drive it, but a ventilator respiratory rate set too high is a listed cause, and the treatment on a ventilator is changing the settings to decrease respirations so CO2 is retained. Incorrect: Increasing tidal volume (too big a tidal volume is also a listed cause) would blow off even more CO2. Kidney compensation takes hours to days and would lower, not raise, the bicarb to offset an alkalosis. Deep breathing to blow off CO2 is the respiratory acidosis intervention and would worsen this alkalosis.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with COPD has a known baseline ABG of PaCO2 60 and HCO3 32 with a normal pH. Today the client has pneumonia and is more short of breath; the ABG is pH 7.28, PaCO2 75, HCO3 32. Which interpretation is most accurate?",
            "options": [
              "A new metabolic acidosis, since the pH fell while the bicarb stayed the same",
              "An acute rise in CO2 that the kidneys have not yet had time to offset",
              "Kidney failure, since the bicarb did not rise as the CO2 increased",
              "A metabolic problem the lungs are now compensating for by retaining CO2"
            ],
            "answer": 1,
            "rationale": "Correct: This is the lecture's acute-on-chronic COPD pattern. At baseline the high bicarb balances the chronically high CO2. With the infection, breathing worsens and CO2 rises quickly, but the bicarb is still 32 because the kidneys take hours to days and haven't had a chance to compensate, so the pH drops. Incorrect: Metabolic acidosis would require a low bicarb matching the low pH; this bicarb is high. An unchanged bicarb this soon reflects the slow timing of kidney compensation, not kidney failure. The primary change is the high CO2 moving opposite the pH (Respiratory Opposite), so the lungs are the problem, not the compensating system.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A client's ABG is pH 7.43, PaCO2 31, HCO3 19. Two nurses disagree on whether the primary problem is respiratory or metabolic. Which interpretation is correct?",
            "options": [
              "Fully compensated metabolic acidosis, with the lungs blowing off CO2",
              "Partially compensated respiratory alkalosis, since the CO2 and bicarb are both low",
              "Corrected respiratory alkalosis, since the pH is within normal limits",
              "Fully compensated respiratory alkalosis, with the kidneys excreting bicarb"
            ],
            "answer": 3,
            "rationale": "Correct: The pH is normal while the CO2 and bicarb are both abnormal, so compensation has occurred and the pH points the way. Treating 7.40 as neutral, 7.43 leans basic. A low CO2 is basic and matches the pH lean (Respiratory Opposite), so the primary problem is respiratory alkalosis, and the low bicarb is the kidneys compensating. Incorrect: Metabolic acidosis would need the pH to lean acidic (7.35 to 7.40) to match the low bicarb. Partially compensated requires an abnormal pH. Corrected requires the CO2 and bicarb to be normal too, and both are still abnormal here.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with three fractured ribs is splinting, rates pain 9/10, and says, \"I can't catch my breath.\" Respirations are shallow. ABG: pH 7.31, PaCO2 53, HCO3 26. Which intervention best addresses the acid-base imbalance?",
            "options": [
              "Encourage slow, deep breaths to blow off the retained CO2",
              "Have the client breathe into a paper bag to slow breathing",
              "Calm the client and give an anti-anxiety drug to slow the rate",
              "Expect the kidneys to correct it, so ventilation can stay as is"
            ],
            "answer": 0,
            "rationale": "Correct: A low pH with a high CO2 and a normal bicarb is uncompensated respiratory acidosis, and uncontrolled pain causing shallow breathing (as with broken ribs) is a listed cause. The intervention is to improve ventilation by increasing the rate and depth of breathing to blow off CO2, such as encouraging slow, deep breathing. Incorrect: The paper bag and anti-anxiety drugs are respiratory alkalosis treatments meant to retain CO2 and decrease respirations, which would worsen this acidosis; the client's report of not catching their breath reflects respiratory acidosis, not panic. The kidneys compensate but do not correct the cause, and they take hours to days.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with type 1 diabetes in DKA is breathing deeply and rapidly. ABG: pH 7.27, PaCO2 29, HCO3 14. A nursing student says, \"The low CO2 shows the fast breathing is the real problem, so we should slow it down.\" Which response by the nurse is best?",
            "options": [
              "\"This is respiratory alkalosis, so a paper bag will help the client retain CO2.\"",
              "\"The breathing is compensating for metabolic acidosis; insulin treats the cause.\"",
              "\"This is respiratory alkalosis that the kidneys are offsetting by lowering bicarb.\"",
              "\"The breathing is compensating, so the kidneys will correct the pH in minutes.\""
            ],
            "answer": 1,
            "rationale": "Correct: The pH is acidic and the bicarb is low in the same direction (Metabolic Equal), so the primary disorder is metabolic acidosis from the ketone acids of DKA. The deep, rapid Kussmaul respirations are compensatory hyperventilation blowing off CO2, which is why the CO2 is low; the pH is still abnormal, so it is partially compensated. Treatment is insulin to bring the glucose down and decrease the acid. Incorrect: Respiratory alkalosis requires a high pH; this pH is low, so slowing the breathing (paper bag) would remove the compensation. The kidneys do not act in minutes; kidney compensation takes hours to days, and the lungs are doing the compensating here.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is reviewing assignments on a medical unit. For which clients would the nurse anticipate an ABG showing a low pH with a high PaCO2? Select all that apply.",
            "options": [
              "A client found down after taking too many opioid pills",
              "A client with sepsis, a fever, and a respiratory rate of 30",
              "A client with Guillain-Barré whose breathing is weakening",
              "A client still drowsy in recovery after general anesthesia",
              "A client with 3 days of NG suction and slow, shallow breaths",
              "A client with ALS whose breathing is now slow and shallow"
            ],
            "answers": [
              0,
              2,
              3,
              5
            ],
            "rationale": "Correct: A low pH with a high CO2 is respiratory acidosis, primarily caused by hypoventilation. Listed causes include overdose or a client found down after too much narcotic, neuromuscular problems such as Guillain-Barré and ALS, and anesthesia and post-anesthesia, when the body can take longer to metabolize the drugs. Incorrect: Increased metabolic demand from fever, infection and sepsis drives faster breathing and respiratory alkalosis, with a high pH and low CO2. Prolonged NG suction causes metabolic alkalosis; the slow, shallow breathing there is the lungs compensating by holding on to CO2, so the CO2 may be high but the pH is high, not low.",
            "topic": "ABGs &amp; ABG Interpretation",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week3-migraines",
      "label": "Migraines",
      "week": 3,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client reports a headache that has lasted 10 hours. The pain is on both sides of the head, throbbing, rated 7 out of 10, and worse when climbing stairs. The client has kept the curtains closed all day because light is unbearable, and denies nausea or vomiting. How should the nurse interpret these findings against the diagnostic criteria for migraine?",
            "options": [
              "They meet the criteria: more than two pain features are present plus one associated symptom, even though the pain is not one-sided.",
              "They do not meet the criteria, because unilateral pain is a required feature and this client's pain is felt on both sides of the head.",
              "They do not meet the criteria, because nausea and vomiting must be present along with light or sound sensitivity.",
              "They do not meet the criteria yet, because the headache must continue past 72 hours before a migraine can be diagnosed."
            ],
            "answer": 0,
            "rationale": "Correct: A migraine headache lasts 4 to 72 hours and needs at least two of unilateral pain, throbbing pain, pain that worsens with activity, or moderate to severe pain, plus at least one of nausea and vomiting, photophobia or phonophobia. This client has throbbing, moderate to severe pain that worsens with activity, plus photophobia, and a 10-hour duration. Incorrect: Unilateral pain is characteristic but is only one of the 'at least two' features, so bilateral pain does not rule it out. Nausea and vomiting is one option in the 'at least one' group, not a requirement when photophobia is present. Seventy-two hours is the upper end of the 4-to-72-hour range, not a minimum.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who has migraine without aura says, \"The day before a migraine I am exhausted, snappy, cannot concentrate, and I crave sweets. Since I never get auras, those warning signs can't have anything to do with my migraines.\" Which response by the nurse is most accurate?",
            "options": [
              "Those symptoms are an aura, so your migraine type should be changed from migraine without aura to migraine with aura instead.",
              "Those symptoms are most likely the recovery phase of an earlier attack, which can linger for a few days afterward.",
              "You are right that they are unrelated, because warning symptoms before the headache occur only in people with auras.",
              "Those symptoms fit the premonitory phase, which can occur hours or days before the headache and is separate from an aura."
            ],
            "answer": 3,
            "rationale": "Correct: Fatigue, irritability, loss of concentration, stiff neck and food cravings hours or days before the headache describe the premonitory phase, which is a different phase from the aura. Incorrect: An aura is visual (shimmering lights, flashing spots, blind spots), sensory (numbness, tingling) or motor (weakness, speech or coordination difficulty), so these symptoms do not reclassify the client as migraine with aura. The recovery phase follows the headache and brings irritability, fatigue and depression, but the client describes these symptoms before a new attack, and food cravings and loss of concentration are premonitory features. Premonitory symptoms are not limited to people who have auras; only the aura phase is.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse reviews two clients' headache diaries. Client A has had migraines on about 15 days of every month for the past 3 months. Client B had 6 migraines last month, each lasting about 5 hours. Which statement by the nurse is accurate?",
            "options": [
              "Only Client A qualifies for preventive therapy, because Client B's attacks each last less than 12 hours.",
              "Client A meets the definition of chronic migraine, and both clients meet a criterion for preventive therapy.",
              "Client B meets the definition of chronic migraine, because the attacks occur more than 4 times each month.",
              "Neither client has chronic migraine yet, because that requires about 15 days a month for at least 6 months in a row."
            ],
            "answer": 1,
            "rationale": "Correct: Chronic migraine is migraine on about 15 days a month over 3 months, which describes Client A. Preventive therapy is used for more than 4 migraines a month OR migraines lasting longer than 12 hours, so Client B's 6 attacks a month qualify even though each lasts only 5 hours, and Client A's frequency qualifies too. Incorrect: The 12-hour duration is an alternative criterion, not a requirement that must be met alongside frequency. More than 4 a month is the preventive-therapy threshold, not the chronic-migraine definition. The chronic threshold is measured over 3 months, not 6.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client whose migraines cluster right before and during menstruation is planning a pregnancy and asks how pregnancy is likely to affect the headaches. Which response by the nurse reflects the lecture content?",
            "options": [
              "Migraines tend to get worse in pregnancy, since estrogen and progesterone levels are higher than they are during a menstrual cycle.",
              "Pregnancy is unlikely to change them, since a menstrual pattern reflects family history rather than any hormonal effect.",
              "Migraines often decrease in pregnancy; the cyclical drop in estrogen and progesterone across the cycle is the suspected trigger.",
              "Hormones influence only migraine with aura, so the effect of pregnancy depends on whether the client experiences an aura."
            ],
            "answer": 2,
            "rationale": "Correct: Estrogen and progesterone make females more susceptible; migraines can occur more right before and during menstruation and often decrease during pregnancy and menopause. The theory is that cyclical withdrawal of these hormones over the menstrual cycle triggers migraines. Incorrect: The page says migraines often decrease, not worsen, in pregnancy. Family history is a separate risk factor and does not replace the hormonal explanation for a menstrual pattern. Nothing on the page limits the hormonal effect to migraine with aura.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with migraines reports an attack on Sunday afternoon. On Saturday the client slept about 15 hours, which is unusual, then skipped breakfast on Sunday during a cold, rainy morning. The client says, \"The long sleep should have protected me, so it must have been the weather.\" Which interpretation by the nurse is most accurate?",
            "options": [
              "Only the weather fits; catching up on sleep relieves fatigue, and fatigue is the sleep-related trigger for migraine.",
              "Only the skipped meal fits; weather changes and sleeping longer than usual are not listed as migraine triggers.",
              "The unusually long sleep, the missed meal and the cold, wet weather are each recognized migraine triggers.",
              "Only the long sleep fits; a missed meal triggers migraine only when combined with alcohol or with overexertion."
            ],
            "answer": 2,
            "rationale": "Correct: Sleep disturbance is a trigger in both directions, too little or too much sleep (for example 15 hours when that is not normal), and missing a meal and weather changes such as rainy, cold weather are also listed triggers. Incorrect: The client's belief that extra sleep is protective is the misconception to correct; an unusually long sleep is itself a sleep disturbance. Weather changes are on the trigger list. Missing a meal is a trigger on its own and does not require alcohol or overexertion.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client newly prescribed sumatriptan asks, \"How is this supposed to stop my migraine?\" Which explanation by the nurse is accurate?",
            "options": [
              "Released excitatory neurotransmitters dilate blood vessels; the drug constricts intracranial vessels and blocks the pain pathway.",
              "Migraine pain comes from constricted brain vessels; the drug dilates intracranial vessels so that blood flow can return to normal.",
              "Migraine starts with reduced neuronal depolarization; the drug stimulates the neurons back to their normal level of activity.",
              "The drug blocks calcitonin gene-related peptide, which is the one confirmed cause of the vasodilation behind every migraine."
            ],
            "answer": 0,
            "rationale": "Correct: Current theory is that increased neuronal depolarization causes hyperactivity, excitatory neurotransmitters are released, and they stimulate vasodilation, resulting in the migraine. Triptans are serotonin 1B/1D receptor agonists that promote vasoconstriction of the intracranial vessels, suppress inflammatory neuropeptides and block the pain pathway. Incorrect: The dilation option flips the mechanism; vasodilation contributes to migraine and triptans constrict. Depolarization is increased, not reduced. Blocking calcitonin gene-related peptide describes the CGRP antagonist rimegepant, not a triptan, and the page states migraine has no well-established, identifiable pathology.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a history of angina presents with a moderate to severe migraine and no nausea or vomiting. Basic analgesics have not helped. Which prescription should the nurse expect to be the most appropriate choice?",
            "options": [
              "Subcutaneous sumatriptan, since the subcutaneous route relieves the headache the most quickly",
              "Oral sumatriptan combined with naproxen, since the combination is more effective than either alone",
              "Intranasal sumatriptan, since the nasal spray causes fewer side effects than the subcutaneous route",
              "Oral rimegepant, with a review of the client's other drugs for any inhibitors or inducers of CYP"
            ],
            "answer": 3,
            "rationale": "Correct: Triptans constrict blood vessels and are avoided in ischemic stroke, heart disease or angina. A CGRP antagonist such as rimegepant (Nurtec) is used when triptans are ineffective or contraindicated; it is given PO and is a CYP substrate, so inhibitors and inducers call for caution. Incorrect: Each of the other options is a true statement about a triptan route or combination, but the route does not change the vasoconstricting action, so every triptan form is avoided in a client with angina.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client describes a migraine that began 30 minutes ago as mild to moderate, but reports vomiting repeatedly since it started. The client plans to \"wait and see if it gets worse before taking anything.\" Which plan is most appropriate?",
            "options": [
              "Give a triptan alone, since severe vomiting means the migraine itself should now be treated as a severe attack.",
              "Take a basic analgesic now, with an antiemetic such as ondansetron added for the severe vomiting.",
              "Give an antiemetic such as promethazine alone, and hold all analgesics until the vomiting has fully settled.",
              "Wait for the pain to peak, then take a basic analgesic, since analgesics work best once pain is at its worst."
            ],
            "answer": 1,
            "rationale": "Correct: Basic analgesics (aspirin, acetaminophen, NSAIDs or a combination) are tried first for mild to moderate migraine, antiemetics such as ondansetron or promethazine are added when there is severe nausea and vomiting at any severity, and abortive therapy is more effective when given early in the headache. Incorrect: Severe vomiting calls for adding an antiemetic; it does not by itself make the migraine severe or call for a triptan alone. Antiemetics are added to symptomatic therapy, not given instead of it. Waiting for the pain to peak is the opposite of the teaching that abortive therapy works better early.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who uses subcutaneous sumatriptan for migraines reports flushing and chest pressure after doses and asks about switching routes. Which client statement indicates correct understanding of the teaching?",
            "options": [
              "\"The tablet works the fastest of all the forms, so I will take it for my worst attacks from now on.\"",
              "\"The tablet causes completely different side effects from the shot, so the flushing will go away.\"",
              "\"Flushing and chest pressure mean I'm allergic, since vessel constriction would not cause them.\"",
              "\"The nasal spray may leave a bad taste, but it tends to cause fewer side effects than the shot.\""
            ],
            "answer": 3,
            "rationale": "Correct: Nasal triptans have fewer side effects than subcutaneous ones, and a bad taste is a side effect of the nasal form. Incorrect: The subcutaneous route, not the tablet, works most quickly. Oral triptans cause side effects similar to subcutaneous ones, just less often, so they are not completely different. Chest pressure, flushing, weakness and headache are expected triptan side effects that make sense for a drug that constricts blood vessels; they do not by themselves signal an allergy.",
            "topic": "Migraines",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who has more than 4 migraines a month is starting propranolol as preventive therapy. Which statements by the nurse are appropriate? Select all that apply.",
            "options": [
              "\"Take a dose as soon as you notice a headache starting, since that is when it stops the attack.\"",
              "\"A goal is to reduce how often your attacks occur, how severe they are and how long they last.\"",
              "\"This treatment may help your acute attacks respond better to the medicines you take for them.\"",
              "\"Once this drug is working, you will no longer need to take any medicine at all for an acute migraine attack.\"",
              "\"One aim is to keep your episodic attacks from progressing to chronic migraine over time.\""
            ],
            "answers": [
              1,
              2,
              4
            ],
            "rationale": "Correct: The goals of preventive therapy are to reduce migraine frequency, severity and duration, improve the response to treatment of acute attacks, improve function and reduce disability, and prevent episodic migraines from becoming chronic. Incorrect: Treating a headache at onset describes abortive (symptomatic) therapy, which is most effective early; propranolol is a beta blocker listed as a preventive drug. Because one goal is a better response to acute-attack treatment, abortive medicines are still expected to be needed, so stopping them is not taught.",
            "topic": "Migraines",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week3-parkinsons",
      "label": "Parkinson's Disease &amp; Parkinson's Pharmacology",
      "week": 3,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A 66-year-old client who farmed for 30 years and does not drink coffee was started on an antiemetic for persistent nausea. Two weeks later the client has a new resting tremor and slowed movements. Which statement by the nurse best reflects the expected course of these signs?",
            "options": [
              "They likely reflect idiopathic disease, given the client's age and years of farm work.",
              "They will likely keep worsening, since the dopamine-producing cells are being destroyed.",
              "They will usually go away once the drug that interferes with dopamine is stopped.",
              "They likely reflect a familial form, which explains about 10% of primary parkinsonism."
            ],
            "answer": 2,
            "rationale": "Correct: A defining event (starting a drug) preceded the symptoms, which points to secondary parkinsonism. Some antiemetics and antidepressants are its most common cause, any drug that interferes with dopamine transmission can cause it, and symptoms usually go away after the medication is stopped. Incorrect: Age, farm work and not drinking coffee are real risk factors (coffee is protective), but they are red herrings here; primary (idiopathic) disease is defined by no defining event. Progressive destruction of dopamine-producing cells describes primary disease, and the roughly 10% familial share applies to primary parkinsonism, not to drug-induced symptoms.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client newly diagnosed with Parkinson's disease says, \"My muscles stay stiff and sore because my brain is now making too much dopamine.\" Which response by the nurse correctly addresses the misunderstanding?",
            "options": [
              "\"Too little acetylcholine is left to let your muscles relax, so they stay contracted.\"",
              "\"Dopamine is low, so acetylcholine is relatively high and keeps muscles contracting.\"",
              "\"Dopamine is high, and it overstimulates its excitatory receptors in your muscles.\"",
              "\"Acetylcholine is low, so dopamine's inhibitory effects on movement go unopposed.\""
            ],
            "answer": 1,
            "rationale": "Correct: Destruction of the substantia nigra lowers dopamine, creating a relative excess of acetylcholine. Acetylcholine is excitatory, so it stimulates the muscles continuously and they never relax (sustained contraction), which causes rigidity and the soreness and aches clients report. Incorrect: Every distractor flips part of the imbalance. Acetylcholine is in relative excess, not low, and dopamine is decreased, not high. Dopamine's inhibitory effects, which normally block unnecessary movements, are the ones that are lacking in Parkinson's disease.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is evaluated for a hand tremor. Which combination of findings most strongly supports a Parkinson's tremor rather than an essential tremor?",
            "options": [
              "The tremor worsens while buttoning a shirt, and no other neurologic findings are seen.",
              "The tremor appears mainly while writing and eases at rest, and the gait is shuffling.",
              "The tremor eases when the client concentrates on it, and the face is mask-like.",
              "The tremor eases when the client reaches for a cup, and elbow flexion is jerky."
            ],
            "answer": 3,
            "rationale": "Correct: A Parkinson's tremor occurs at rest and tends to improve with movement, and it comes with the other manifestations of Parkinson's, such as cogwheel rigidity (slow, jerky movement when the elbow is flexed). Incorrect: A tremor that occurs with motor function, makes fine motor tasks like buttoning very difficult, and has no other Parkinson's signs fits essential tremor. A tremor brought on by writing and easing at rest is the essential pattern even if another sign is present. A Parkinson's tremor gets worse, not better, with stress or concentration.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "The spouse of a client with Parkinson's disease asks why the client now has dry, irritated eyes and drools often. Which explanation by the nurse is accurate?",
            "options": [
              "Automatic movements such as blinking and swallowing saliva are being lost.",
              "Constant muscle contraction is keeping the eyelids and throat from relaxing.",
              "The resting tremor is spreading from the hands into the face and the throat.",
              "Lewy bodies are spreading into the brain areas that control eyes and saliva."
            ],
            "answer": 0,
            "rationale": "Correct: Bradykinesia is the loss of automatic movement. Less blinking leads to dry eyes that are more susceptible to abrasion, and less automatic swallowing of saliva leads to drooling; it is arguably the major cause of disability in Parkinson's disease. Incorrect: Sustained contraction from excess acetylcholine explains rigidity and muscle aches, not lost blinking or swallowing. The tremor is a rest tremor of a body part, not the cause of these findings. Lewy bodies spreading into memory and cognition areas explain dementia and hallucinations, not dry eyes or drooling.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client started levodopa-carbidopa (Sinemet) 3 weeks ago and tells the nurse, \"My tremor is no better, so this drug is not working for me and I want to stop it.\" Which response by the nurse is most appropriate?",
            "options": [
              "\"This sounds like wearing off; ask about taking your doses closer together.\"",
              "\"Improvement can take several months while your dopamine level builds up.\"",
              "\"This sounds like on-off loss; your high-protein meals may be the cause.\"",
              "\"Few dopamine terminals are left to use it, so a new drug will be needed.\""
            ],
            "answer": 1,
            "rationale": "Correct: Sinemet is one of the most effective Parkinson's drugs, but it takes several months for symptoms to improve while dopamine builds up, so clients are taught it can take up to months. Incorrect: Wearing off and on-off loss describe a drug that was working and then loses its effect; this client has not yet had time to respond. Loss of effect because fewer dopaminergic terminals survive happens as the disease progresses over long-term use, not 3 weeks after starting.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who has taken Sinemet for several years reports that each dose now controls symptoms for a shorter time, with symptoms creeping back before the next dose, even after the last dose increase. Which change does the nurse anticipate?",
            "options": [
              "A medication reconciliation, since this pattern points to on-off loss",
              "Stopping the drug, since this pattern shows levodopa no longer works",
              "Taking doses more often, or adjusting the amount in each dose",
              "Adding vitamin B6 to strengthen and lengthen the effect of each dose"
            ],
            "answer": 2,
            "rationale": "Correct: Each dose wearing off sooner and sooner, with symptoms returning gradually even as the dose is increased, is the gradual loss of effect called wearing off. It is managed with shorter dosing intervals (taking it more often) or changes in the dose amount. Incorrect: Medication reconciliation and diet teaching address the on-off phenomenon, which is an abrupt, unpredictable switch from working to not working, not a predictable gradual return of symptoms. The drug still works for part of each interval, so stopping it is not indicated. Vitamin B6 (pyridoxine) decreases levodopa's effect.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is scheduled to begin Sinemet. Today's exam shows a regular heart rhythm, mild constipation, and two raised, irregular moles on the upper back that the client says are new. Which action is the nurse's priority before the first dose?",
            "options": [
              "Complete a full skin assessment and report any suspicious lesions",
              "Obtain baseline cardiac monitoring, since dysrhythmias appear at the start",
              "Teach the client to take each dose with a high-protein snack to limit nausea",
              "Teach that darkened sweat and urine are harmful and must be reported at once"
            ],
            "answer": 0,
            "rationale": "Correct: Sinemet can activate malignant melanoma, so a good skin assessment is done before starting it to identify suspicious lesions; new, raised, irregular moles must be reported. Incorrect: Cardiac function is monitored for dysrhythmias especially when the dose has been increased over time, and the rhythm is regular today. Nausea is managed with a small amount of food, and high-protein food should be avoided because protein decreases levodopa's effect. Darkened sweat and urine are not harmful, only annoying because they can stain clothing.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with advanced Parkinson's disease is being prepared to start Duopa. While reviewing the medication history, which finding should the nurse report because it creates a risk of levodopa toxicity?",
            "options": [
              "A vitamin B6 (pyridoxine) supplement the client takes every day",
              "An antipsychotic recently prescribed for the client's hallucinations",
              "A high-protein breakfast the client has eaten every morning for years",
              "An MAOI for depression the client stopped taking 5 days ago"
            ],
            "answer": 3,
            "rationale": "Correct: Duopa should not be taken within 2 weeks of an MAOI for depression because it can cause levodopa toxicity; MAOIs increase levodopa's effect to toxicity, and 5 days is inside that window. Incorrect: Vitamin B6, antipsychotics and protein are all real interactions to address in the medication reconciliation, but each decreases levodopa's effect rather than pushing it toward toxicity.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "The provider is considering pramipexole (Mirapex) monotherapy for two clients recently diagnosed with Parkinson's disease. Client A is 42 and reports pins-and-needles leg discomfort at night that is relieved only by moving the legs. Client B is 45 and has a history of compulsive gambling. Which statement by the nurse is accurate?",
            "options": [
              "Client B's past behavior is a concern with this drug; Client A is a reasonable candidate.",
              "Client A's leg symptoms are a concern with this drug; Client B is a reasonable candidate.",
              "Neither is a candidate, since this drug is reserved for older clients with advanced disease.",
              "Both are candidates, since profound orthostatic hypotension is the main risk when used alone."
            ],
            "answer": 0,
            "rationale": "Correct: Pramipexole alone can cause unusual compulsive behaviors such as pathologic gambling, making it a poor choice for a client who already has compulsive behaviors. Client A is a younger client early in the disease, the usual monotherapy candidate, and the leg symptoms describe restless leg syndrome, which pramipexole also treats. Incorrect: Restless leg symptoms are a reason the drug may help, not a concern. Pramipexole is usually monotherapy in younger clients early in PD and is combined with levodopa-carbidopa as the disease advances. Really profound orthostatic hypotension is a risk when pramipexole is combined with levodopa; alone, the adverse effects are nausea, sleep attacks and compulsive behaviors.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client taking oral levodopa-carbidopa will soon transition to a Duopa infusion. The nurse reviews teaching about both forms. Which client statements indicate understanding? Select all that apply.",
            "options": [
              "\"If my pills upset my stomach, I'll take them with a small amount of food.\"",
              "\"I'll keep the protein in my meals low so the medication works better.\"",
              "\"If my urine turns darker, it isn't harmful, though it can stain my clothes.\"",
              "\"New jerky movements are harmless, so I won't need to mention them to anyone.\"",
              "\"The infusion can run up to 16 hours a day and be stopped while I sleep.\"",
              "\"Once the infusion keeps my level steady, I can keep driving my truck for work.\""
            ],
            "answers": [
              0,
              1,
              2,
              4
            ],
            "rationale": "Correct: Taking Sinemet with a small amount of food helps nausea and keeps clients taking the drug, even though eating reduces absorption somewhat. High-protein meals reduce the drug's effect. Darkened sweat and urine are not harmful but can stain clothing. Duopa is a continuous infusion for up to 16 hours a day that can be stopped while sleeping at night. Incorrect: Dyskinesias are an adverse effect that ranges from annoying to disabling, sometimes so disabling the client needs a different drug, so they should be reported. Duopa can cause falling asleep without warning, so it is not for clients who drive a truck or pilot an aircraft for a living, even though it keeps a steadier blood level.",
            "topic": "Parkinson's Disease &amp; Parkinson's Pharmacology",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week3-myasthenia-gravis",
      "label": "Myasthenia Gravis",
      "week": 3,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client newly diagnosed with myasthenia gravis says, \"The doctor said my nerves and muscles aren't communicating. I guess my body just stopped making enough acetylcholine, so I need pills to replace it.\" Which response by the nurse best corrects the client's understanding?",
            "options": [
              "\"Your nerves are damaged, so they can no longer release acetylcholine onto the muscle at all.\"",
              "\"Your supply is fine; antibodies block and then destroy the receptors acetylcholine needs.\"",
              "\"Your muscles make too much of an enzyme, so the acetylcholine you produce never reaches them.\"",
              "\"Antibodies attack the acetylcholine itself, so less of it is left in the junction for the muscle.\""
            ],
            "answer": 1,
            "rationale": "Correct: In MG the body makes enough acetylcholine, but antibodies form against the nicotinic acetylcholine receptors on the postsynaptic membrane, block them from binding acetylcholine, and eventually destroy them, so too few sites remain and transmission to the muscle is diminished. Incorrect: The antibodies target the receptor sites, not the acetylcholine molecule itself; the nerve still releases acetylcholine; and cholinesterase is the normal enzyme that breaks acetylcholine down, not an overproduced cause of MG (blocking it is how the drugs help).",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who is 4 weeks postpartum reports that by late afternoon her eyelids feel heavy, chewing dinner tires her jaw, and she sometimes drools, but after a nap these symptoms ease. Her shoulders and hips feel normal. She says, \"It's just new-baby exhaustion.\" Which interpretation by the nurse is most appropriate?",
            "options": [
              "The pattern fits myasthenia gravis, which often first appears after birth, and jaw fatigue raises aspiration risk.",
              "The normal shoulder and hip strength makes myasthenia gravis unlikely, since limb weakness is its most typical early sign.",
              "Symptoms that ease with rest point away from myasthenia gravis, which causes weakness that stays fixed throughout the day.",
              "The drooling suggests excessive cholinergic stimulation, so a cholinergic crisis is the most likely explanation for her signs."
            ],
            "answer": 0,
            "rationale": "Correct: MG has an insidious onset with fluctuating weakness that returns to strength after rest; the eye, face, mouth, throat and neck muscles are often affected first (drooling, difficulty chewing and swallowing, which raises aspiration risk), and manifestations often first appear during pregnancy or postpartum. Incorrect: Shoulders and hips are not typically affected, so their normal strength does not rule MG out; weakness that improves with rest is the classic MG pattern, not a reason to dismiss it; and cholinergic crisis arises from anticholinesterase drug toxicity, which this untreated client has not received.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is caring for two clients with myasthenia gravis. Client A has had a cold for 2 days, now speaks in short phrases, and says it is hard to take a deep breath; she reports taking every neostigmine dose on time. Client B is drooling and coughing weakly while eating lunch. Which action should the nurse take first?",
            "options": [
              "Stop Client B's meal and position him upright, since difficulty swallowing is the earliest sign of a crisis in MG.",
              "Reassure Client A that her dosing is adequate, so her breathing change is most likely due to the cold itself.",
              "Assess Client A's breathing first, since an infection can trigger myasthenic crisis and respiratory insufficiency.",
              "Hold Client A's next neostigmine dose, since her breathing problem is most consistent with cholinergic crisis."
            ],
            "answer": 2,
            "rationale": "Correct: Myasthenic crisis is an acute exacerbation of weakness typically triggered by a stressor such as an infection (a simple cold in the lecture video); the big concern is the respiratory muscles, with a higher risk of respiratory arrest, so Client A takes priority. Incorrect: Taking medication on schedule does not rule out a crisis, because infection alone is a trigger; Client B's swallowing difficulty raises aspiration risk but is a common MG manifestation, not the more urgent respiratory threat; and nothing in Client A's picture (no excessive muscarinic signs, no drug toxicity) points to cholinergic crisis.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A nursing student explains to the nurse how neostigmine helps a client with myasthenia gravis. Which statement by the student indicates correct understanding?",
            "options": [
              "\"It calms the immune response so the antibodies stop forming against the acetylcholine receptors.\"",
              "\"It stimulates the nerve to release more acetylcholine, which overwhelms the antibodies at the junction.\"",
              "\"It rebuilds the receptor sites the antibodies destroyed, which is why it is considered a cure for MG.\"",
              "\"It blocks the enzyme that breaks down acetylcholine, so it lasts longer and finds undamaged receptors.\""
            ],
            "answer": 3,
            "rationale": "Correct: Neostigmine is a cholinesterase inhibitor; blocking cholinesterase lets acetylcholine stay in the synaptic junction longer so it can find a receptor the antibodies haven't damaged, and it intensifies the acetylcholine's effects. Incorrect: Calming the immune response is the role of immunosuppressants such as steroids, a different drug class; the problem in MG is not acetylcholine release, since the body makes enough; and drug therapy for MG is not a cure and does not rebuild receptors.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with myasthenia gravis and a long history of asthma is prescribed neostigmine. The client asks why the provider \"thought twice\" before ordering it. Which explanation by the nurse is accurate?",
            "options": [
              "Its nicotinic action on skeletal muscle can strengthen the diaphragm too much and stiffen breathing.",
              "Its anticholinergic action dries airway secretions, which can thicken mucus and trigger an asthma attack.",
              "Its immunosuppressant action lowers resistance to the respiratory infections that worsen asthma.",
              "Its muscarinic action can constrict the bronchi, which is a concern for clients with lung disease."
            ],
            "answer": 3,
            "rationale": "Correct: At therapeutic levels neostigmine stimulates muscarinic as well as nicotinic receptors; muscarinic stimulation causes most of its side effects, including bronchial constriction, so it is considered carefully in clients with asthma or other lung disease. Incorrect: Increased skeletal muscle contraction is the desired nicotinic effect, not a lung concern; neostigmine is cholinergic, so it increases rather than dries secretions (drying is an anticholinergic effect such as atropine's); and it is a cholinesterase inhibitor, not an immunosuppressant.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse reviews four clients. For which client would the nurse expect a prescription for atropine?",
            "options": [
              "A client taking neostigmine for MG who reports increased muscle strength after each dose",
              "A client in hospice care who is choking on oral secretions that he can no longer swallow",
              "A client in myasthenic crisis after surgery whose weakness improved after edrophonium",
              "A client with MG whose heart rate is 112/min and who reports constipation for 3 days"
            ],
            "answer": 1,
            "rationale": "Correct: Atropine is an anticholinergic that dries secretions; the lecture gives clients on comfort care or hospice who are choking on secretions they cannot swallow as an example use (it is also used to raise the heart rate in symptomatic bradycardia). Incorrect: A heart rate of 112/min with constipation reflects the anticholinergic direction already (increased heart rate, decreased motility), so atropine would worsen it; increased muscle strength is neostigmine's desired nicotinic effect; and improvement after edrophonium confirms myasthenic crisis, which needs more acetylcholine, not an anticholinergic.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with myasthenia gravis whose neostigmine dose was recently increased now has extreme generalized weakness and labored breathing. The nurse also notes a heart rate of 48/min, pinpoint pupils, profuse sweating, excessive saliva, and abdominal cramping with diarrhea. Which conclusion is best supported by these cues?",
            "options": [
              "Excess acetylcholine from drug toxicity is overstimulating and wearing out the muscles: a cholinergic crisis.",
              "Too little acetylcholine stimulation is leaving the weakened muscles unable to contract: a myasthenic crisis.",
              "The increased dose is working as intended, and the muscarinic signs reflect expected therapeutic drug levels.",
              "The antibodies have destroyed the remaining receptors, so no amount of acetylcholine can act on them."
            ],
            "answer": 0,
            "rationale": "Correct: Extreme weakness plus signs of excessive muscarinic stimulation (bradycardia, pupil constriction, lots of saliva, diaphoresis, increased intestinal motility) after a dose increase indicates cholinergic crisis, a drug toxicity from excessive acetylcholine; overstimulated muscles wear out and can fail. Incorrect: Myasthenic crisis shares the respiratory insufficiency and weakness but comes from too little acetylcholine stimulation (a stressor or inadequate medication) and does not explain the muscarinic signs; a toxic dose decreases rather than increases contraction, so this is not a therapeutic response; and receptor destruction is the underlying MG process, not the explanation for the new muscarinic signs.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with myasthenia gravis arrives with severe weakness and respiratory insufficiency, and it is unclear which crisis is occurring. The provider gives edrophonium, and within minutes the client's grip strength and breathing improve. How should the nurse interpret this response?",
            "options": [
              "The client is in cholinergic crisis, because edrophonium blocked the excess acetylcholine causing the weakness.",
              "The test is inconclusive, because both crises improve briefly whenever acetylcholine levels rise in the junction.",
              "The client is in myasthenic crisis, because a temporary rise in acetylcholine helped where too little was available.",
              "The client is in myasthenic crisis, because edrophonium suppressed the antibodies that had been blocking the receptors."
            ],
            "answer": 2,
            "rationale": "Correct: Edrophonium is a very short-acting cholinesterase inhibitor that temporarily raises acetylcholine; improvement means myasthenic crisis, where the problem is not enough acetylcholine stimulation. Incorrect: A client in cholinergic crisis already has too much acetylcholine and worsens after edrophonium, so the test does discriminate between the two; edrophonium raises acetylcholine rather than blocking it; and it works by inhibiting cholinesterase, not by suppressing antibodies.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with myasthenia gravis says, \"When my legs feel weak, I take an extra neostigmine tablet. More of the drug always means more acetylcholine, so my muscles can only get stronger.\" Which response by the nurse is most accurate?",
            "options": [
              "\"That is true for your limb muscles, but extra doses mainly put your heart at risk by speeding up your heart rate.\"",
              "\"At toxic doses, overstimulated muscles wear out and weaken, which can lead to failure of breathing muscles.\"",
              "\"Extra doses are safe, since your body makes enough acetylcholine and the antibodies limit how much can act.\"",
              "\"Extra doses are only a concern for constipation, since the drug slows the movement of your intestines.\""
            ],
            "answer": 1,
            "rationale": "Correct: At a therapeutic dose neostigmine's nicotinic effect increases muscle contraction, but at a toxic dose contraction decreases because overstimulated muscles wear out and can fail, leading to a cholinergic crisis with risk of respiratory arrest. Incorrect: Cholinergic stimulation slows the heart rate and increases GI motility (diarrhea), so a fast heart rate and constipation are the wrong direction; and having enough acetylcholine does not make extra doses safe, because excessive acetylcholine accumulation is exactly what causes the toxicity.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with myasthenia gravis is taking neostigmine. Which findings would the nurse attribute to the drug's stimulation of muscarinic receptors? Select all that apply.",
            "options": [
              "Increased grip strength 1 hour after a dose",
              "Heavy sweating with no fever or exertion",
              "Heart rate rising from 72/min to 104/min",
              "Frequent loose stools with abdominal cramping",
              "Dry mouth and difficulty producing saliva",
              "Eyelid drooping that eases after a short rest"
            ],
            "answers": [
              1,
              3
            ],
            "rationale": "Correct: Neostigmine stimulates muscarinic receptors (sweat and other glands, GI tract, heart, bladder, lungs, eyes), which causes most of its side effects: diaphoresis and GI distress with increased motility and diarrhea are part of the SLUDGE pattern. Incorrect: Increased grip strength is the desired nicotinic (skeletal muscle) effect, not muscarinic; cholinergic stimulation slows the heart rate and increases secretions, so a rising heart rate and dry mouth are anticholinergic-direction findings like those of atropine; and eyelid drooping that eases with rest is the fluctuating weakness of MG itself.",
            "topic": "Myasthenia Gravis",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week3-multiple-sclerosis",
      "label": "Multiple Sclerosis",
      "week": 3,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "Two clients with multiple sclerosis (MS) are seen after a flare. Client A reports her left leg feels a little weaker and slower than usual but still works. Client B has had no movement return in a limb for many months. Which explanation of the difference is most accurate?",
            "options": [
              "Client A reflects lost oligodendrocytes, while client B reflects inflammation that has not yet reached the axon.",
              "Client A reflects axon death, while client B reflects myelin that has detached but left the axon intact.",
              "Both reflect gliosis of the peripheral nerves, differing only in how far the scar tissue has spread.",
              "Client A reflects an inflamed but intact fiber, while client B reflects detached myelin and a damaged axon."
            ],
            "answer": 3,
            "rationale": "Correct: In the early, inflamed stage the nerve fiber is intact, so impulses are still transmitted, maybe a little slower, and the client may notice some weakness. Once the myelin detaches and the underlying axon is damaged, scarring and axon death follow and the impulse is completely blocked, a permanent loss of function. Incorrect: The axon-death option reverses the two clients; axon death is the permanent end stage, not the milder one. Loss of oligodendrocytes is part of the demyelinating process, not an earlier stage than inflammation. MS affects the central nervous system; peripheral nerve demyelination describes Guillain-Barre.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A 32-year-old man who lives in the northern United States is newly diagnosed with MS. He says, \"MS is mostly a women's disease, so as a man mine will probably be mild.\" Which response by the nurse is most accurate?",
            "options": [
              "\"MS is more common in women, and at 32 you are outside the usual age of onset, so your course is hard to predict.\"",
              "\"MS is equally common in men and women, but living in a cool northern climate makes a milder course more likely.\"",
              "\"MS is more common in women, but men who develop it typically have a more severe, progressive course.\"",
              "\"MS is more common in men, and men usually have a relapsing course that returns to baseline after each flare.\""
            ],
            "answer": 2,
            "rationale": "Correct: MS is more common in females, but males who get MS typically have a more severe, progressive course, so the client's assumption needs correcting. Incorrect: Onset is typically between 20 and 40, so 32 is within the usual range, not outside it. A moderately cool climate (above the 40th parallel north) is linked to higher prevalence of MS, not a milder course, and MS is not equally common in both sexes. Returning to baseline after each flare describes benign MS, not the typical male course.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A 45-year-old client's history shows years of exacerbations followed by remissions, with some loss of function after each one. Over the past two years her symptoms have worsened steadily and she has had no remissions. She also reports new constipation. Which type of MS does this pattern most closely match?",
            "options": [
              "Secondary progressive MS",
              "Primary progressive MS",
              "Progressive relapsing MS",
              "Relapsing-remitting MS"
            ],
            "answer": 0,
            "rationale": "Correct: Secondary progressive MS starts with relapses and remissions, with some loss of function each time, then shifts to a more progressive course without remissions, which matches this history. The constipation is a common MS bowel symptom and does not point to a specific type. Incorrect: Primary progressive MS has gradual, steady progression from the start with no periods of remission or exacerbation, but this client clearly had relapses and remissions first. Progressive relapsing MS shows gradual progression with continuing exacerbations and fewer remissions, not a relapsing phase that later gives way to steady progression. Relapsing-remitting MS has long remissions and is fairly stable between exacerbations, not two years of steady worsening without remission.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with relapsing-remitting MS started interferon beta (Avonex) six months ago. Before treatment her relapses lasted about a month; her most recent relapse lasted five days. She says, \"I still had a flare, so the drug failed.\" Which interpretation by the nurse is most accurate?",
            "options": [
              "A flare on therapy means the disease has shifted to primary progressive MS, which these drugs cannot affect.",
              "Shorter relapses since starting suggest the drug is working; interferon lowers relapse rates but does not end them.",
              "Any relapse on interferon beta signals failure, so natalizumab should be added to her current interferon beta regimen.",
              "Relapses lasting under a week occur only in benign MS, so the drug has most likely changed the type of her MS."
            ],
            "answer": 1,
            "rationale": "Correct: If relapses get shorter after starting treatment (for example, from a month down to a week or less), that suggests the medication is working. There is no cure; interferon beta decreases relapse rates by up to 30% and lengthens remission rather than eliminating relapses. Incorrect: Primary progressive MS has no flare-ups at all, so a flare does not indicate a shift to that type. Natalizumab is used only as monotherapy, so adding it to interferon is not appropriate. Benign MS is defined by returning to baseline after each flare, not by relapse length; short relapses (under a week) occur in about 20% of people.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with relapsing-remitting MS who receives natalizumab infusions through the TOUCH program is admitted with an acute relapse. The covering provider orders high-dose IV glucocorticoids, 1 g daily for 3 days. Which concern should the nurse raise with the provider before giving the first dose?",
            "options": [
              "Adding steroids to natalizumab significantly raises the risk of progressive multifocal leukoencephalopathy.",
              "Glucocorticoid doses for an MS relapse are 40 to 60 mg daily, so a 1 g order is likely a prescribing error.",
              "Natalizumab should be stopped during any relapse because the relapse is a sign of its hepatic toxicity.",
              "Glucocorticoids are reserved for primary progressive MS, so they are not indicated for a relapse at all."
            ],
            "answer": 0,
            "rationale": "Correct: The big risk with natalizumab is progressive multifocal leukoencephalopathy (PML), which is debilitating and possibly fatal, and the PML risk is significantly higher with other immunosuppressants such as steroids, so this combination warrants clarification. Incorrect: Pulse-dose steroids for an MS relapse are very high, about 500 mg to 1 g daily for 3 to 5 days; 40 to 60 mg is the asthma dose, so 1 g is not an error in itself. Hepatic toxicity with natalizumab is monitored with LFTs and is not what causes an MS relapse. High-dose IV glucocorticoids are the usual treatment for an acute exacerbation, and primary progressive MS has no exacerbations to treat.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with type 1 diabetes is on day 2 of a 5-day course of high-dose IV glucocorticoids for an MS relapse. The client tolerated the first dose without problems, and the morning blood glucose is 310 mg/dL. Which action by the nurse is most appropriate?",
            "options": [
              "Request that the remaining IV doses be replaced with a long-term, lower-dose oral steroid to protect glucose control.",
              "Expect the glucose to fall on its own as the relapse resolves, so no change to the insulin plan is needed.",
              "Request ACTH gel instead, since it is the preferred relapse treatment for any client who has diabetes.",
              "Anticipate a need for extra insulin or an insulin infusion while the pulse-dose steroids continue."
            ],
            "answer": 3,
            "rationale": "Correct: Pulse-dose steroids raise blood glucose, so a diabetic client may need extra insulin or an insulin infusion while the short course is completed. Incorrect: High-dose glucocorticoids are not for long-term or frequent use and are reserved for exacerbations, so switching to long-term steroids is the wrong direction. The hyperglycemia is a drug effect, not a feature of the relapse that will resolve on its own, so ignoring it is unsafe. ACTH gel is for clients who cannot tolerate glucocorticoids or when steroids are not effective, not for every client with diabetes; this client tolerated the dose.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients with MS report bladder problems. Client A has urinary frequency and urgency. Client B voids only small amounts and has a palpable, distended bladder after voiding. Which medication plan does the nurse anticipate?",
            "options": [
              "Client A: a cholinergic; client B: an anticholinergic",
              "Client A and client B: an anticholinergic for both",
              "Client A: an anticholinergic; client B: a cholinergic",
              "Client A and client B: a cholinergic for both"
            ],
            "answer": 2,
            "rationale": "Correct: MS symptoms are managed according to the presentation: urinary frequency is treated with an anticholinergic, and urinary retention is treated with a cholinergic. Client B's small voids with a distended bladder indicate retention. Incorrect: The first option reverses the two drug classes. Giving one class to both clients ignores that MS bladder dysfunction can be either incontinence/frequency or retention, which need opposite approaches.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with MS who has fatigue managed with amantadine is newly prescribed donepezil (Aricept). The client's spouse says, \"That's an Alzheimer's drug. Does this mean my wife is getting dementia?\" Which response by the nurse is most accurate?",
            "options": [
              "\"It is given because MS mainly destroys the brain's memory centers, in the same way that Alzheimer's disease does.\"",
              "\"It is used in MS for severe trouble thinking clearly and concentrating, which is not mainly a memory problem.\"",
              "\"It is given in MS to treat her fatigue, so planning her day around rest periods will no longer be needed.\"",
              "\"It is given in MS to relax the muscle spasms that are making it harder for her to concentrate and think.\""
            ],
            "answer": 1,
            "rationale": "Correct: Donepezil, normally an Alzheimer's medication, is used for severe cognitive dysfunction in MS (\"cog fog\"), which is difficulty thinking clearly and concentrating, not necessarily a memory problem. Incorrect: MS is demyelination of CNS white and gray matter, not a targeted destruction of memory centers. Fatigue is treated with amantadine plus teaching to plan the day around rest periods, so rest planning remains part of care. Muscle spasms are treated with muscle relaxants, not donepezil.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with MS gave a glatiramer acetate (Copaxone) injection five minutes ago. The client now reports flushing, palpitations, and chest pain and has a new rash on the chest. Which action by the nurse is most appropriate?",
            "options": [
              "Hold all future doses, since this reaction points to liver toxicity that must first be confirmed with LFTs.",
              "Treat this as the flu-like reaction to the drug and plan an antipyretic before the next scheduled dose.",
              "Stay with the client and watch the airway, since this is usually brief but the larynx can constrict.",
              "Obtain blood counts at once, since this reaction signals bone marrow suppression from the injection."
            ],
            "answer": 2,
            "rationale": "Correct: A reaction right after a glatiramer injection (flushing, palpitations, chest pain, rash, laryngeal constriction) is usually transient, lasting about 10 to 20 minutes, and usually needs no treatment, but severe laryngeal constriction must be monitored and may need other medications. Incorrect: Flu-like reactions, liver toxicity, and bone marrow suppression are adverse effects of interferon beta, not of this post-injection reaction to glatiramer, so the LFT, antipyretic, and blood-count options apply the right monitoring to the wrong drug.",
            "topic": "Multiple Sclerosis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client newly diagnosed with relapsing-remitting MS asks how the disease-modifying drugs work. Which statements by the nurse are accurate? Select all that apply.",
            "options": [
              "Fingolimod keeps lymphocytes in the lymph nodes so they do not migrate across the blood-brain barrier.",
              "Natalizumab can be safely combined with interferon beta to strengthen the overall effect on relapse rates.",
              "Interferon beta keeps pro-inflammatory T cells from crossing the blood-brain barrier.",
              "Glatiramer acetate decreases anti-inflammatory T cells so fewer of them enter the brain.",
              "Natalizumab keeps circulating T cells from leaving the blood vessels to enter the CNS.",
              "Dimethyl fumarate stimulates immune cells so that damaged myelin can be regrown."
            ],
            "answers": [
              0,
              2,
              4
            ],
            "rationale": "Correct: Fingolimod retains lymphocytes in the lymph nodes so they do not cross the blood-brain barrier. Interferon beta keeps pro-inflammatory T cells from crossing the blood-brain barrier, reducing inflammation. Natalizumab keeps circulating T cells from leaving the blood vessels, so they cannot cross the blood-brain barrier. Incorrect: Natalizumab is used as monotherapy only and is tightly regulated through the TOUCH program, so it is not added to interferon. Glatiramer increases anti-inflammatory T cells, which cross the blood-brain barrier and suppress inflammation; it does not decrease them. Dimethyl fumarate is thought to inhibit immune cells, decreasing inflammation and preventing nerve damage; it does not stimulate them, and there is no cure that regrows myelin.",
            "topic": "Multiple Sclerosis",
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
    "Aneurysms &amp; Aortic Dissection",
    "Acid-Base Balance",
    "ABGs &amp; ABG Interpretation",
    "Migraines",
    "Parkinson's Disease &amp; Parkinson's Pharmacology",
    "Myasthenia Gravis",
    "Multiple Sclerosis"
  ]
};

/* exam.js reads window.TOPIC_ORDER for the per-topic breakdown strip. */
window.TOPIC_ORDER = window.QUIZ_BANK.TOPIC_ORDER;
