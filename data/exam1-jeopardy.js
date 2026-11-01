/* ============================================================
   exam1-jeopardy.js -- the question bank for the Exam 1 3-player Jeopardy game
   (Week 1 + Week 2: 8 categories x 13 clues = 104).
   Read by assets/jeopardy-exam1.js. See PROMPTS-AND-STANDARDS.md Part 4 for the
   exact drafting prompt and rules, and reference/jeopardy-style-sample.js
   for two finished categories.

   Shape:
     categories: [ { id, name, week, clues: { "100":[...3], "200":[...3],
       "300":[...3], "400":[...2], "500":[...2] } } ]
     each clue: { q, a, rationale }   (13 clues per category)
   Category names use a literal "&" (the engine escapes at render time).
   ============================================================ */
window.JEOPARDY_EXAM1 = {
  "categories": [
    {
      "id": "w1-pericardial-disease",
      "name": "Myocarditis, Pericarditis & Cardiac Tamponade",
      "week": 1,
      "clues": {
        "100": [
          {
            "q": "A young adult who had a Coxsackie B virus infection two weeks ago now has fatigue and new abnormal beats on the monitor. Workup shows inflammation with necrosis of the cardiac muscle cells themselves, not of the sac around the heart. What condition does this client have?",
            "a": "Myocarditis.",
            "rationale": "The page defines myocarditis as inflammation of the myocardium with degeneration and necrosis of the myocytes, and names viruses, mostly Coxsackie A and B, as the leading cause in the US and Europe."
          },
          {
            "q": "A client reports sharp chest pain that gets worse every time he takes a deep breath. On auscultation the nurse hears a scratching sound, almost like rubbing on a balloon. What is the sound, and what condition does it point to?",
            "a": "A pericardial friction rub, pointing to acute pericarditis.",
            "rationale": "The page lists sharp chest pain that worsens with deep breathing and a pericardial friction rub (a scratching sound like rubbing on a balloon) as findings of acute pericarditis."
          },
          {
            "q": "On a client's arterial line tracing, the nurse watches the systolic pressure drop each time the client breathes in. What is this finding called, and why is it abnormal?",
            "a": "Pulsus paradoxus; systolic BP should rise slightly on inspiration, not fall.",
            "rationale": "The page defines pulsus paradoxus as a drop in systolic BP with inspiration, a paradox because BP normally increases a little when you breathe in, and notes it is seen most clearly on an arterial line."
          }
        ],
        "200": [
          {
            "q": "A client's myocarditis was mild and the acute inflammation has settled, yet months later imaging shows structural changes in the heart muscle. What process from the original illness explains this?",
            "a": "Fibrosis and scarring from the inflammatory injury to the myocytes.",
            "rationale": "The page says the inflammation directly injures the myocytes and, over time, can create fibrosis and scarring that lead to structural changes."
          },
          {
            "q": "A client with acute pericarditis has had little relief after several days of NSAIDs. The team weighs adding a corticosteroid versus colchicine. Based on the lecture, which agent has recently been found to work well in exactly this situation?",
            "a": "Colchicine.",
            "rationale": "The page says colchicine, typically a gout drug, was recently found to work well for pericarditis not responding to NSAIDs, while corticosteroids are 'give or take', sometimes working well and sometimes not."
          },
          {
            "q": "An echocardiogram on a client without symptoms reports about 40 mL of fluid in the pericardial space. A student charts 'pericardial effusion.' How should the nurse interpret this amount?",
            "a": "It is a normal amount of pericardial fluid, not an effusion.",
            "rationale": "The page gives the normal pericardial fluid volume as about 15 to 50 mL, acting as a lubricant between the layers; an effusion is fluid in excess of normal, caused by inflammation."
          }
        ],
        "300": [
          {
            "q": "A febrile client with sharp chest pain that worsens on deep inspiration has an ECG showing ST elevations in some leads and ST depressions in others. A new graduate wants to activate the MI pathway. Based on the full picture, what does the nurse suspect instead?",
            "a": "Acute pericarditis, which can mimic an MI on ECG but has different clinical symptoms.",
            "rationale": "The page says the pericarditis ECG shows both ST elevation and depression and can look like an MI, but the clinical symptoms differ; fever and pain that worsens with deep breathing fit acute pericarditis."
          },
          {
            "q": "Client A has acute pericarditis with a fever and sharp pain on deep breaths. Client B, also with pericarditis, is now hypotensive and dizzy with distended neck veins. Which client does the nurse see first, and what procedure should the nurse anticipate?",
            "a": "Client B, for cardiac tamponade needing emergency pericardiocentesis.",
            "rationale": "Hypotension, poor-perfusion signs and JVD mark cardiac tamponade, which the page calls a medical emergency requiring quick fluid removal by pericardiocentesis; Client A's findings are expected for acute pericarditis."
          },
          {
            "q": "A client with viral myocarditis develops a new conduction abnormality. A family member says, 'That can't be from the myocarditis, since that's a muscle problem, not an electrical one.' What should the nurse explain?",
            "a": "Myocarditis commonly disrupts conduction through inflammatory tissue changes, cytokines and T cell activation.",
            "rationale": "The page states that disrupted conduction is often seen in myocarditis because tissue changes, inflammatory cytokines and T cell activation in the myocardium cause abnormal electrical conduction."
          }
        ],
        "400": [
          {
            "q": "A client with acute pericarditis has muffled heart sounds and pulsus paradoxus, but normal BP, clear mentation and flat neck veins. A colleague says the muffled sounds and pulsus paradoxus prove tamponade. How should the nurse correct this?",
            "a": "Both findings also occur in acute pericarditis; tamponade is shown by decreased cardiac output signs and JVD, which are absent.",
            "rationale": "The page lists muffled heart sounds and pulsus paradoxus under both acute pericarditis and tamponade, so they do not separate the two; tamponade adds hypotension, confusion or dizziness, and JVD."
          },
          {
            "q": "A client with pericarditis is now hypotensive and confused, with JVD and muffled heart sounds, but the arterial line shows no inspiratory drop in systolic pressure. A colleague says, 'No pulsus paradoxus, so tamponade is ruled out.' What is the nurse's response?",
            "a": "Tamponade is not ruled out; pulsus paradoxus is present in only about 70 to 80 percent of cases, and the other signs point to tamponade.",
            "rationale": "The page says pulsus paradoxus occurs in about 70 to 80 percent of tamponade patients, so its absence does not exclude it, while hypotension, poor perfusion, JVD and muffled sounds fit tamponade."
          }
        ],
        "500": [
          {
            "q": "A client in cardiac tamponade has a low arterial blood pressure but distended jugular veins at the same time. What single underlying problem explains both low forward pressure and high venous pressure?",
            "a": "Fluid compresses the chambers so they cannot stretch and fill, dropping cardiac output and backing blood up into the veins.",
            "rationale": "The page explains that in tamponade the fluid restricts the chambers so they cannot fill, producing decreased cardiac output (hypotension, poor perfusion) while blood backs up in the system (JVD)."
          },
          {
            "q": "Client A has severe myocarditis progressing toward heart failure. Client B has cardiac tamponade. Both have a failing cardiac output. How do the underlying mechanisms differ, and how does that change what each client needs?",
            "a": "A has injury inside the muscle (antivirals/anti-inflammatories); B has outside compression limiting filling (pericardiocentesis).",
            "rationale": "The page describes myocarditis as myocyte inflammation and necrosis, mostly viral, treated with antivirals and anti-inflammatories, while tamponade is pericardial fluid compressing the heart so it cannot fill, an emergency treated by draining the fluid."
          }
        ]
      }
    },
    {
      "id": "w1-acs-mi",
      "name": "Acute Coronary Syndrome & Myocardial Infarction",
      "week": 1,
      "clues": {
        "100": [
          {
            "q": "A 58-year-old with no cardiac history had chest pain for the first time in his life this morning. It eased after about 10 minutes of rest, and he arrives saying he feels fine now and probably overreacted. How should the nurse classify this chest pain?",
            "a": "As unstable angina (a medical emergency) until proven otherwise.",
            "rationale": "The page says chest pain occurring for the first time is considered unstable immediately, until proven otherwise, because no pattern or history has been established - so resolution of the pain does not make it safe."
          },
          {
            "q": "In the ED waiting room, a client is pacing and cannot sit still, is pale and sweating, holds a clenched fist against his chest, and keeps saying, \"I know something is wrong, I just can't tell you what.\" What should the nurse recognize?",
            "a": "Signs of a myocardial infarction requiring immediate emergency evaluation.",
            "rationale": "The page lists the Levine sign (fist to the chest), extreme anxiety and restlessness, diaphoresis, pallor, and an impending sense of doom as MI signs, and says to take the sense of doom very, very seriously."
          },
          {
            "q": "A client with long-standing stable angina phones the clinic: her chest pain started 20 minutes ago, is worse than her usual pain, and has not eased since her first nitroglycerin. She says she will drive herself to the ER. What is the nurse's instruction?",
            "a": "Call 911 now; do not drive herself to the ER.",
            "rationale": "Pain more severe than usual and not stopping after the first nitro makes this unstable angina, which the page calls a medical emergency: patients should call 911 right now and most definitely not drive themselves."
          }
        ],
        "200": [
          {
            "q": "A 64-year-old woman reports feeling unusually tired and dizzy all day, with nausea, and says she took Tums this morning for what she thought was heartburn. She denies chest pain. What should the nurse suspect?",
            "a": "Acute coronary syndrome.",
            "rationale": "The page notes that dizziness, nausea, vomiting, tiredness, and heartburn (many women with ACS report taking Tums that morning) are often reported by women with ACS, so the absence of chest pain does not rule it out."
          },
          {
            "q": "A client has recurring chest pain episodes that wake him from sleep, never with exertion. During an episode the ECG shows ST elevation that returns to normal afterward, and coronary angiography shows no significant atherosclerotic plaque. What type of angina is most likely?",
            "a": "Prinzmetal's (variant or vasospastic) angina.",
            "rationale": "The page describes Prinzmetal's angina as a coronary vasospasm, often at rest or during sleep, that may show ST elevation and is not necessarily related to plaque; the clean angiogram points away from a plaque-driven process."
          },
          {
            "q": "A client with known coronary atherosclerosis has been symptom-free for years. Routine labs now show a markedly elevated C-reactive protein. What does this finding suggest about the client's coronary plaque?",
            "a": "The plaque may be becoming unstable and at higher risk of rupture.",
            "rationale": "The page says unstable plaque has an inflammatory component, that CRP is a marker of that inflammation, and that inflammation (with a large lipid core and thin fibrous cap) raises rupture risk - which is how ACS usually begins."
          }
        ],
        "300": [
          {
            "q": "A client admitted with new chest pain had ECG changes on arrival, but the repeat ECG has returned to normal, and three serial troponins have stayed flat. Is this unstable angina or a myocardial infarction?",
            "a": "Unstable angina.",
            "rationale": "The page's comparison table says unstable angina shows ECG changes that go back to normal with typically no troponin change and no infarction, whereas an MI has ECG changes that stay and troponins that trend up."
          },
          {
            "q": "Two clients have an occlusion at the same level of the same coronary artery for the same length of time. Client A has decades of coronary atherosclerosis and visible collateral vessels on angiography; Client B had no prior coronary disease. Which client is likely to have less myocardial damage?",
            "a": "Client A, the client with collateral circulation.",
            "rationale": "With location and duration matched, the page's third factor decides it: collateral circulation, which develops in people with atherosclerotic plaque, creates routes that bypass the blockage and still get some blood and oxygen to the tissue, limiting damage."
          },
          {
            "q": "A client who is 10 days post-MI feels well and tells the nurse he plans to resume heavy lifting at work this week, since \"the heart attack is over.\" What risk at this specific point in recovery should the nurse recognize?",
            "a": "The myocardium is at its weakest and susceptible to rupture.",
            "rationale": "The page's timeline says that at 1 to 2 weeks the necrotic tissue is being cleared away and the myocardium is very weak and susceptible to rupture; tough scar tissue does not replace it until about 6 weeks."
          }
        ],
        "400": [
          {
            "q": "After successful reperfusion for an MI, a client says, \"Now that my artery is open, all of the damaged heart muscle will heal back to normal.\" How should the nurse correct this?",
            "a": "The infarcted core is permanently dead; only the surrounding injury and ischemic zones can recover.",
            "rationale": "The page's zones of damage say the infarction zone is necrotic and cannot recover, the injury zone may partly recover if perfused, and the ischemic zone can fully recover - so reperfusion aims to stop the infarct from growing, not to revive it."
          },
          {
            "q": "Six months after an MI, a client is alarmed that his routine ECG still shows changes and fears he is having another heart attack. He has no symptoms and his troponin is normal. How should the nurse explain the ECG?",
            "a": "The changes are permanent effects of scar tissue from the old MI, not a new infarction.",
            "rationale": "The page says necrotic tissue is replaced by tough scar by about 6 weeks, that impulses travel poorly through scar so post-MI ECGs can show permanent changes, and that a new infarction would raise troponin."
          }
        ],
        "500": [
          {
            "q": "Two clients both have chest pain at rest that wakes them at night, with ECG changes that resolve afterward and no troponin rise. Client A's angiogram shows a ruptured plaque with a small thrombus; Client B's shows no significant plaque. What is the underlying mechanism in each?",
            "a": "A: plaque rupture with a small thrombus (unstable angina); B: coronary vasospasm (Prinzmetal's angina).",
            "rationale": "The page explains that unstable angina is plaque rupture with a clot small or transient enough to allow some flow, while Prinzmetal's is a vasospasm, often from endothelial damage, that is not necessarily plaque-related - the two can look alike at rest on the ECG."
          },
          {
            "q": "Two clients both have crushing retrosternal chest pain and rising troponins. Client A has ST elevation with a QRS that widens over several hours; Client B has a slight ST depression and a normal QRS. What does each picture reveal about the vessel, and which client has the worse expected outcome?",
            "a": "A (STEMI) has a completely occluded vessel and the worse outcome; B (NSTEMI) has a partial blockage with some flow.",
            "rationale": "The page says a STEMI is total occlusion by the clot, with a typically larger infarct and worse outcomes, while in an NSTEMI some blood still gets through, giving a smaller infarct and better outcomes than STEMI."
          }
        ]
      }
    },
    {
      "id": "w1-acute-mi-pharm",
      "name": "Acute MI Pharmacology",
      "week": 1,
      "clues": {
        "100": [
          {
            "q": "A client with an acute MI is handed the first dose of aspirin and says he'll swallow it whole with water, like the aspirin he takes at home. How should the nurse instruct him to take this dose?",
            "a": "Chew the first dose, to speed absorption.",
            "rationale": "The page says to have the patient chew the first aspirin dose to speed absorption, so it can start making platelets less sticky and keep the thrombus from forming or getting bigger."
          },
          {
            "q": "A client with an acute MI is alert with an SpO2 of 98% on room air, and the provider has not ordered oxygen. The client's spouse asks why the nurse isn't putting oxygen on. What does the nurse explain?",
            "a": "The client isn't hypoxic, and research shows oxygen may not have a benefit in a non-hypoxic patient.",
            "rationale": "Oxygen is given to increase oxygen delivery to ischemic myocardium, but the page notes newer research shows it may not help if the patient is not hypoxic, so whether it is ordered depends on the provider."
          },
          {
            "q": "An hour after receiving alteplase for a STEMI, a client has oozing at the IV site and new bleeding from the gums. What does the nurse recognize this as?",
            "a": "Bleeding, the main adverse effect of fibrinolytic therapy.",
            "rationale": "The page states the main adverse effect of fibrinolytic therapy is bleeding (we are dissolving a clot), and patients receiving thrombolytics are at huge risk for bleeding."
          }
        ],
        "200": [
          {
            "q": "A client with acute MI chest pain rated 6/10 has morphine ordered. Before giving it, the nurse finds a respiratory rate of 9 and a blood pressure of 86/50. What should the nurse do?",
            "a": "Hold the morphine and notify the provider.",
            "rationale": "Morphine's side effects are respiratory depression and hypotension, and the page says to check vital signs first and make sure the patient can tolerate it; this client already shows both, so giving it could push an unstable patient over the edge."
          },
          {
            "q": "A client with chest pain has sublingual nitroglycerin ordered. While the nurse is preparing it, the client mentions he took sildenafil (Viagra) last night. What should the nurse do?",
            "a": "Do not give the nitroglycerin; hold it and notify the provider.",
            "rationale": "Nitroglycerin is not given with sildenafil because both dilate the veins and reduce preload, leading to really profound hypotension."
          },
          {
            "q": "Shortly after reperfusion therapy restores blood flow to an occluded coronary artery, a client's monitor suddenly shows ventricular tachycardia. What does the nurse recognize this as most likely being?",
            "a": "A reperfusion dysrhythmia.",
            "rationale": "The page says to monitor reperfusion patients closely for reperfusion dysrhythmias and names ventricular tachycardia and ventricular fibrillation as examples."
          }
        ],
        "300": [
          {
            "q": "A client with a STEMI arrives at a small hospital with no cath lab. The provider orders a thrombolytic, and on review of the history the nurse sees the client had a hemorrhagic stroke last month. What should the nurse do, and why?",
            "a": "Question the thrombolytic order, because a recent hemorrhagic stroke is a contraindication.",
            "rationale": "Without a cath lab, PCI (the first choice) isn't available and fibrinolytic therapy is the effective alternative, but the page says thrombolytics are given only if the patient is eligible with no contraindications, such as a recent hemorrhagic stroke, since these patients are at huge risk for bleeding."
          },
          {
            "q": "A day after reperfusion of an infarcted area, a client develops new dyspnea and crackles consistent with heart failure, even though the artery is open. The family asks whether the treatment failed. What does the nurse recognize is most likely happening?",
            "a": "Reperfusion injury: the newly reoxygenated myocardium is stunned, causing heart failure.",
            "rationale": "The page says that when oxygen-deprived myocardium suddenly receives oxygenated blood it can become stunned, and that can cause heart failure; this is reperfusion injury, not a failure of the clot-dissolving treatment."
          },
          {
            "q": "A 70-year-old client with diabetes, who reports only feeling tired lately, is told he had an MI at some point in the past. He insists that can't be right because he never had any chest pain. What should the nurse explain?",
            "a": "People over 65 and people with diabetes can have a silent (asymptomatic) MI with no symptoms at the time.",
            "rationale": "The page states people older than 65 and people with diabetes can have an MI and not know it: a silent or asymptomatic MI, found later, with no signs or symptoms at the time. This client has both risk factors."
          }
        ],
        "400": [
          {
            "q": "A client's STEMI clot was successfully dissolved with alteplase. Now heparin and clopidogrel are running, and the client says, \"The clot is gone, so I don't need blood thinners anymore.\" How should the nurse correct this?",
            "a": "Alteplase dissolved the existing clot; heparin and clopidogrel are needed to prevent new clots from forming.",
            "rationale": "Alteplase converts plasminogen into plasmin, which dissolves the current clot, but the page says anyone who has had fibrinolytic therapy is given heparin and antiplatelet therapy like clopidogrel to keep new clots from forming. The two do different jobs."
          },
          {
            "q": "After a STEMI, a client says the nitroglycerin is clearly the drug saving his life because it took his pain away, so he'd rather skip the aspirin. Which of the two drugs actually decreases mortality in STEMI, and what does the other one do instead?",
            "a": "Aspirin decreases mortality; nitroglycerin does not, it only limits infarct size.",
            "rationale": "The page states aspirin decreases mortality in STEMI, while nitroglycerin does not reduce mortality; it dilates the veins to reduce preload (and afterload), which helps limit infarct size."
          }
        ],
        "500": [
          {
            "q": "An acute MI client has both IV nitroglycerin and a beta blocker ordered. The client says, \"These both just lower my blood pressure and protect my heart, so I'm getting the same drug twice.\" What distinguishes the two drugs in how they work and in their effect on mortality?",
            "a": "Nitroglycerin dilates veins to cut preload and afterload and does not reduce mortality; a beta blocker lowers heart rate and contractility to cut oxygen demand and can help mortality.",
            "rationale": "Both can limit infarct size, but by different mechanisms: nitroglycerin reduces preload and afterload by venous dilation, while beta blockers reduce heart rate and contractility to lower overall oxygen demand. The page lists nitroglycerin as not reducing mortality and beta blockers as able to help with mortality."
          },
          {
            "q": "A STEMI client on aspirin and clopidogrel reports chest pain of 4/10. An experienced nurse says the old-school rule is to always give morphine because it relieves pain and dilates vessels to help blood flow. What page-taught reason argues against giving morphine routinely to this client?",
            "a": "Morphine may inhibit the antiplatelet medications and worsen outcomes, so it is reserved for really severe pain.",
            "rationale": "Aspirin and clopidogrel work by suppressing platelet aggregation so the thrombus doesn't grow or re-form, and the page says newer data show morphine may inhibit antiplatelet medications and worsen outcomes; opiates are not used routinely in STEMI unless the pain is really severe, which this pain is not."
          }
        ]
      }
    },
    {
      "id": "w1-aneurysms",
      "name": "Aneurysms & Aortic Dissection",
      "week": 1,
      "clues": {
        "100": [
          {
            "q": "During a routine exam of a 70-year-old client with long-standing uncontrolled hypertension and a smoking history, the nurse hears a whooshing sound while listening over the abdominal aorta. What should the nurse suspect?",
            "a": "An abdominal aortic aneurysm (AAA).",
            "rationale": "The page says aneurysms cause turbulent blood flow that can be heard as a bruit, and a bruit over the abdominal aorta suggests a AAA. The client's hypertension, tobacco use, and age over 65 are all listed risk factors."
          },
          {
            "q": "A client with hypertension arrives in the ED describing sudden, severe pain in the chest that feels like something is tearing. What condition should the nurse recognize?",
            "a": "Aortic dissection.",
            "rationale": "The page names sudden, severe tearing pain as the most common manifestation of aortic dissection, most often felt in the chest. An uncomplicated aneurysm, by contrast, can be completely asymptomatic."
          },
          {
            "q": "A few days after a vascular graft procedure, a client has a new bulge near the graft site. Imaging shows a tear in the inner artery wall with the outer walls still intact. What type of aneurysm is this?",
            "a": "A false (pseudo) aneurysm.",
            "rationale": "The page describes a false aneurysm as a localized tear in the inner wall with the outer walls intact, considered a type of hematoma. It often results from vascular interventional procedures, such as leakage between a graft and the natural artery."
          }
        ],
        "200": [
          {
            "q": "While inspecting the abdomen of a very thin older adult, the nurse sees a pulsating mass. The nurse wants to estimate its size by palpating. What must the nurse avoid, and why?",
            "a": "Avoid deep palpation (use light palpation only) because it can cause rupture.",
            "rationale": "A pulsatile mass in a thin client with little body fat suggests a AAA. The page says that when a AAA is suspected, deep palpation is a rupture risk, so the nurse keeps to light palpation."
          },
          {
            "q": "A client with a confirmed aortic dissection has no history of angina or myocardial infarction, yet the provider orders a beta blocker. What is the purpose of the beta blocker for this client?",
            "a": "To lower heart rate and blood pressure so the artery does not tear or dissect further.",
            "rationale": "The page says beta blockers in aortic dissection decrease heart rate and blood pressure to prevent further tearing. It flags this as a different use from beta blockers in acute MI, so the absence of heart disease is a red herring."
          },
          {
            "q": "Imaging shows a client's aneurysm involves the entire circumference of the vessel, with gradual, progressive dilation and diffuse sclerotic changes. The client asks why no surgery has been scheduled. What type of aneurysm is this, and what is the usual plan?",
            "a": "A fusiform aneurysm, which is usually monitored for growth until it reaches a certain size.",
            "rationale": "The page describes fusiform aneurysms as involving the whole circumference, with gradual dilation often linked to diffuse sclerotic changes. They are likely monitored for a time, and intervention may not be needed until they reach a certain size."
          }
        ],
        "300": [
          {
            "q": "A client has a small-necked aneurysm at the circle of Willis and is waiting for coiling. Overnight, the client's blood pressure keeps climbing. Why is controlling this blood pressure a priority before the procedure?",
            "a": "It is a berry aneurysm; lowering pressure and vasospasm reduces the risk of a rupture in the brain, which can be fatal.",
            "rationale": "A small neck at a bifurcation such as the circle of Willis identifies a berry aneurysm. The page lists medical management as controlling hypertension and decreasing pressure and vasospasms, and warns that rupture, especially in the brain, can be fatal."
          },
          {
            "q": "A hypertensive client with a history of a herniated lumbar disc reports sudden, severe tearing pain in the back and now cannot move either leg. What should the nurse suspect is causing these findings?",
            "a": "Aortic dissection, not the disc.",
            "rationale": "The page says dissection pain can be felt in the back, and lists paralysis of the lower extremities among its other signs. Sudden tearing pain together with new paralysis points to a dissection, a medical emergency, rather than the old disc problem."
          },
          {
            "q": "A client with a confirmed aortic dissection receives a beta blocker, and the blood pressure comes down. The family is relieved and asks whether the danger is over. What does the nurse recognize is still the priority?",
            "a": "Emergency surgical repair; the beta blocker only limits further tearing.",
            "rationale": "The page calls aortic dissection a surgical emergency where minutes matter, with surgery as the most important goal of treatment. Beta blockers only reduce heart rate and blood pressure to prevent further dissection; they do not repair the tear."
          }
        ],
        "400": [
          {
            "q": "A 72-year-old client with a AAA and uncontrolled hypertension quit smoking last year. He says, \"Since I quit cigarettes, the thing that caused my aneurysm is gone.\" How should the nurse correct this?",
            "a": "Uncontrolled hypertension, the primary cause of aneurysms, is still present, and his age over 65 is also a risk factor.",
            "rationale": "The page says aneurysms are primarily a result of hypertension, which constantly stresses and weakens the arterial wall, and that atherosclerosis and hypertension are the primary drivers. Tobacco is only one of several listed risk factors, and older age (over 65) still applies."
          },
          {
            "q": "A client with a known AAA plans a long road trip far from any hospital. He says, \"It's just in my belly, not my heart or brain, so if it ever bursts I'll have plenty of time to drive to a hospital.\" What should the nurse explain?",
            "a": "A ruptured AAA bleeds out very quickly because of the high pressure in the aorta, so there would not be time.",
            "rationale": "The page says rupture is a special danger in the aorta, where vessel pressure is very high, and that a ruptured AAA causes very rapid, large-volume bleeding. The aorta is the body's largest vessel, so an abdominal location gives no safety margin."
          }
        ],
        "500": [
          {
            "q": "Two clients have confirmed aortic dissections. Client A is alert with tearing back pain and a BP of 196/108. Client B is syncopal, and no BP can be obtained. A family member says Client A must be fine because his pressure is high, not gone. How do both readings come from the same process?",
            "a": "Both reflect blood loss into the artery wall: high BP is early compensation, and an unobtainable BP is the late stage, so A is earlier on the same path.",
            "rationale": "The page explains that BP is elevated early as the body compensates for blood loss. Later, BP becomes unattainable because the blood sitting between the artery's layers is not circulating. Without intervention, this progresses to cardiovascular collapse, shock, and death, so a high BP is not reassuring."
          },
          {
            "q": "A client has had an asymptomatic AAA monitored for years. Today he suddenly develops severe tearing pain radiating to his back, and his blood pressure is higher than his baseline. What has happened, and how does this differ from the aneurysm he already had?",
            "a": "The weakened aneurysm wall has torn into an aortic dissection, with blood now entering between the layers of the artery wall.",
            "rationale": "The page says an aneurysm (a dilation of the wall) can be completely asymptomatic, but a weakened wall can keep weakening and tear into a dissection. In a dissection, a tear in the inner layer lets blood enter between the wall layers, and turbulent flow separates them. This causes the hallmark sudden tearing pain and an early compensatory rise in BP."
          }
        ]
      }
    },
    {
      "id": "w2-ph-and-acids",
      "name": "pH, Hydrogen & Acids",
      "week": 2,
      "clues": {
        "100": [
          {
            "q": "A client's serum pH was 7.40 this morning and is now 7.30. What has happened to the client's hydrogen ion concentration, and what acid-base state is the client in?",
            "a": "Hydrogen ions have increased; the client is in acidosis.",
            "rationale": "pH is inversely related to hydrogen ion concentration, so a falling pH means more hydrogen ions. A serum pH below 7.35 is acidosis."
          },
          {
            "q": "A client's pleural fluid sample comes back with a pH of 7.6, and a new nurse prepares to report it as alkalosis because it is above 7.45. What is the correct interpretation?",
            "a": "7.6 is the stated normal for pleural fluid; the 7.35-7.45 range applies to serum only.",
            "rationale": "The page states pH varies by site: serum 7.35 to 7.45, but pleural fluid 7.6 (saliva 6.5-7.5, liver 7.2, bone 7.4). Judging a non-serum fluid by the serum range is the error."
          },
          {
            "q": "A client in DKA has a rising beta-hydroxybutyric acid level. The client is breathing rapidly, and a family member assumes the lungs will clear this acid. Which organ does the page say is the only route for eliminating it?",
            "a": "The kidneys.",
            "rationale": "Beta-hydroxybutyric acid is a non-volatile acid (its measurement is used diagnostically in DKA), and non-volatile acids can be eliminated only by the kidneys. Only the volatile acid, carbonic acid, leaves through the lungs as CO2."
          }
        ],
        "200": [
          {
            "q": "A critically ill client's serum pH is 7.9. A family member says, \"That's less than half a point above normal, so it can't be that serious.\" What should the nurse recognize about this value?",
            "a": "A pH above 7.8 is incompatible with life.",
            "rationale": "The page sets survivable limits at 6.8 to 7.8; beyond them pH's profound effects on cellular metabolism, enzyme activity and oxygen delivery are incompatible with life. The small number hides how far outside the survivable range this is."
          },
          {
            "q": "A client with a stomach pH near 1.5 has no gastric damage, yet after the lower esophageal sphincter lets that same acid back up, the client develops esophageal erosion. What explains the difference between the two tissues?",
            "a": "Stomach mucous cells secrete mucus and bicarbonate to protect the lining; the esophagus lacks that protection.",
            "rationale": "The page says the stomach is uniquely designed for its acidity, with mucous cells secreting mucus and bicarbonate at the cell surface. Outside the stomach, acid that strong causes ulcers and erosion."
          },
          {
            "q": "A client's cells are continuously producing CO2 as a waste product of metabolism. Unlike the acids from DKA or protein breakdown, how does the body get rid of this acid load, and why is that route possible?",
            "a": "The lungs exhale it as CO2 gas, because carbonic acid is the body's only volatile acid.",
            "rationale": "Carbonic acid is the only volatile acid; with carbonic anhydrase it dissociates into CO2 and water, and it is eliminated as CO2 gas through pulmonary ventilation. Non-volatile acids cannot leave this way."
          }
        ],
        "300": [
          {
            "q": "Two ill clients both show an SpO2 of 98%. Client A's serum pH is 7.30; Client B's is 7.50. Despite identical saturations, which client is at greater risk of inadequate tissue oxygenation, and why?",
            "a": "Client B (alkalosis), because hemoglobin holds on to oxygen instead of releasing it to the tissue.",
            "rationale": "In an alkalotic environment hemoglobin holds on to oxygen, which can cause inadequate tissue oxygenation; in an acidic environment hemoglobin gives up oxygen more readily at the tissue. A normal saturation does not show delivery to the tissue."
          },
          {
            "q": "A client with a serum pH of 7.31 is alert, talking, and says, \"I feel fine, so this can wait until tomorrow's labs.\" What should guide the nurse's response?",
            "a": "The body can function outside normal only briefly; because pH affects so many systems, the goal is to return it to normal as quickly as possible.",
            "rationale": "The page says the body can function outside 7.35 to 7.45 for a short time, but pH affects neurologic, respiratory, GI and cardiovascular function and most enzymes work only in that narrow range, so correction should be prompt. Feeling fine does not mean the pH is safe."
          },
          {
            "q": "A client's serum pH has fallen to 7.28. The nurse plans to report the ABG and has not looked at the rest of the morning labs, reasoning that pH problems only matter for breathing. Besides oxygen transport and delivery, what else does the page say acid-base balance affects that the nurse should check alongside the ABG?",
            "a": "Electrolytes (sodium, potassium in particular, and chloride) and hormones.",
            "rationale": "The page lists electrolytes (sodium, potassium in particular, and chloride), hormones, and oxygen transport and delivery as things acid-base balance affects, so an abnormal pH is not only a breathing problem."
          }
        ],
        "400": [
          {
            "q": "A client's serum pH has dropped by a few tenths. A colleague says, \"pH is just like sodium: a range of numbers, and a small numeric change is a small change.\" Using what the page teaches about the pH scale, what is wrong with this reasoning?",
            "a": "The pH scale is logarithmic, so each whole number is a tenfold change in hydrogen ions and small numeric shifts mean large hydrogen ion changes.",
            "rationale": "pH is a homeostatic range like sodium, but its scale is logarithmic, not linear: going from 7 to 6 is a tenfold increase in hydrogen ions. Treating it as linear underestimates how much the hydrogen ion concentration has changed."
          },
          {
            "q": "An ill client's pH is creeping up to 7.47. A colleague argues that because the body already produces more acids than bases, leaning alkaline is the safer direction to drift. What should the nurse recognize?",
            "a": "Alkalosis is the state to avoid in an ill client: an alkaline pH is really difficult to correct (and it impairs tissue oxygen delivery).",
            "rationale": "The page says the body does produce more acids than bases at baseline (from food, drink, lipid and protein metabolism and CO2 from cells), but that alkalosis is what we want to avoid, especially if a person is ill, because hemoglobin holds on to oxygen and an alkaline pH is really difficult to correct."
          }
        ],
        "500": [
          {
            "q": "Two clients are each accumulating a non-volatile acid: one has lactic acid from anaerobic metabolism during hypoperfusion, the other has sulfuric acid from protein metabolism. Oxygen is fully restored to both clients' tissues. How does what happens to the two acids differ?",
            "a": "Lactic acid can be metabolized by the liver and kidneys and reconverted to energy; sulfuric acid can only be eliminated by the kidneys.",
            "rationale": "Both are non-volatile acids, which only the kidneys can eliminate. Lactic acid is the page's stated exception: it is metabolized by the liver and kidneys and, once oxygen returns, reused for energy. Sulfuric acid from protein metabolism has no such recovery path."
          },
          {
            "q": "A client has a load of carbonic acid and a load of sulfuric acid. A colleague says the carbonic acid is the bigger hydrogen ion threat because there is always so much more CO2. Using what the page says about acid strength and how each acid leaves the body, how do the two differ?",
            "a": "Carbonic acid is weak and volatile (carbonic anhydrase turns it into CO2 and water for the lungs); sulfuric acid is strong, readily releases its hydrogen ions, and can leave only through the kidneys.",
            "rationale": "Carbonic acid does not easily release its hydrogen ion and, with carbonic anhydrase, dissociates into CO2 and water that the lungs exhale. Most non-volatile acids, like sulfuric, are strong acids that readily release hydrogen ions and depend on the kidneys alone."
          }
        ]
      }
    },
    {
      "id": "w2-ph-defense",
      "name": "How the Body Defends Its pH",
      "week": 2,
      "clues": {
        "100": [
          {
            "q": "A client takes on a sustained acid load. Within seconds the pH barely moves, but over the next hour it keeps drifting downward even though nothing new has happened. What explains why the first response did not hold?",
            "a": "Chemical buffers act instantly but make only small, short-term corrections; the lungs and kidneys must take over.",
            "rationale": "The page lists chemical buffers as the first line of defense, acting almost instantaneously, but making only small changes that are a relatively short, not sustainable fix."
          },
          {
            "q": "A sedated, mechanically ventilated ICU client becomes acidotic and cannot change their own breathing. How can the lungs' normal correction for a low pH still be carried out?",
            "a": "Adjust the ventilator settings to increase the rate or depth of breathing so more CO2 is blown off.",
            "rationale": "The page says the lungs correct acidosis by increasing rate or depth to blow off CO2 (less carbonic acid, pH rises), and on mechanical ventilation these adjustments can be made through the ventilator settings."
          },
          {
            "q": "A client's blood pH begins to rise. Before the lungs or kidneys have time to respond, the proteins in the client's cells and blood, including hemoglobin, act on hydrogen ions to oppose the change. What do they do?",
            "a": "They release hydrogen ions to bring the pH back down.",
            "rationale": "The page says most proteins can buffer: carboxyl groups act as weak acids and release hydrogen ions, so when pH increases proteins release hydrogen ions (and hemoglobin loses hydrogen ions as pH increases); when pH decreases they accept them."
          }
        ],
        "200": [
          {
            "q": "A provider wants to know how well a client's cells are buffering their own pH, and a new nurse plans to send a blood level of the main intracellular buffer. What should the nurse recognize about this plan?",
            "a": "The main intracellular buffer is phosphate, and it can't be measured.",
            "rationale": "The page names phosphate as the main intracellular buffer, which picks up a hydrogen ion inside the cell to balance its pH, and states that it can't be measured."
          },
          {
            "q": "A client's ABG shows that both the CO2 and the bicarb have moved away from normal in response to an acid-base imbalance, and the provider remarks that the body is compensating. The pH is still below the normal range. How should this compensation be classified?",
            "a": "Partial compensation.",
            "rationale": "The page defines partial compensation as bicarb and CO2 having changed while the pH is still outside normal limits; complete compensation requires the pH to be back within normal limits."
          },
          {
            "q": "An acidotic client with renal failure has a rising serum potassium. Beyond the pH itself, what should the nurse be monitoring for, and why do this client's kidneys make it worse?",
            "a": "Dysrhythmias from hyperkalemia; potassium shifts out of cells in acidosis and failed kidneys cannot excrete it.",
            "rationale": "In acidosis hydrogen moves into cells and potassium moves out; with kidney dysfunction the kidneys can't get rid of the excess potassium, causing hyperkalemia that can cause dysrhythmias."
          }
        ],
        "300": [
          {
            "q": "Two clients are recovering from acidosis and their pH is returning to normal. Client A has normally functioning kidneys; Client B has kidney dysfunction. Which client is at greater risk for hypokalemia during recovery, and why?",
            "a": "Client A, the client with working kidneys.",
            "rationale": "As pH normalizes, potassium moves back into the cells; working kidneys will already have excreted the excess potassium, so this can lead to hypokalemia, whereas dysfunctional kidneys could not excrete it."
          },
          {
            "q": "An ICU client is acidotic and the respiratory system is not compensating. The kidneys are working but would take hours to days to correct the pH. What does the nurse anticipate being given as a quick fix?",
            "a": "Sodium bicarbonate.",
            "rationale": "The page states that when a patient is acidotic and not compensating through the respiratory system, sodium bicarb is often given as a quick fix to raise the pH, which happens a lot in the ICU; renal correction takes several hours to days."
          },
          {
            "q": "A client's lungs are failing and cannot exhale enough CO2, but the client's kidneys are healthy. Both organs use carbonic anhydrase on carbonic acid, yet they produce different products. What does the kidneys' version of this reaction produce, and how does it still let the body remove acid?",
            "a": "Hydrogen ions and bicarb; the kidneys excrete the hydrogen ions (and can generate bicarb).",
            "rationale": "The page's carbonic acid equation section says that in the lungs carbonic anhydrase breaks carbonic acid into CO2 and water for exhalation, while in the kidneys it breaks it into hydrogen ions and bicarb, and the kidneys excrete the hydrogen ions and can generate bicarb."
          }
        ],
        "400": [
          {
            "q": "Two clients with healthy kidneys both depend on renal compensation: one is acidotic, the other alkalotic. Which client's kidneys will have the harder time restoring the pH, and what explains the difference?",
            "a": "The alkalotic client; it is harder for the kidneys to excrete bicarb than to hold on to it.",
            "rationale": "The kidneys increase bicarb reabsorption and hydrogen secretion in acidosis and decrease both in alkalosis, but the page states they handle acidosis better than alkalosis because excreting bicarb is harder than retaining it."
          },
          {
            "q": "Client A's acid-base problem is metabolic; Client B's is respiratory. Both problems began one hour ago. Which client is more likely to already show compensation, and why?",
            "a": "Client A, because the lungs compensate for a metabolic problem within minutes to hours, while Client B depends on the kidneys, which take hours to days.",
            "rationale": "A metabolic problem is compensated by the respiratory system (several minutes to hours); a respiratory problem is compensated by the renal system (several hours to days), the slower long-term regulator."
          }
        ],
        "500": [
          {
            "q": "A client with a high metabolic rate is producing extra CO2. Some of that CO2 combines with water in the blood, and some binds directly to hemoglobin for transport to the lungs. Both routes carry CO2 to be exhaled. Which route protects the blood's pH along the way, and why?",
            "a": "Binding to hemoglobin as carbaminohemoglobin, because it keeps the CO2 from forming carbonic acid and releasing hydrogen ions.",
            "rationale": "CO2 plus water forms carbonic acid, which can dissociate into hydrogen ions and bicarb; the page states that carbaminohemoglobin carries CO2 to the lungs and keeps CO2, a potential acid, from dissociating into carbonic acid and releasing hydrogen ions."
          },
          {
            "q": "Two acidotic clients both show an improving pH. In Client A, the improvement came within the first few hours along with a rise in serum potassium and no change in bicarb. In Client B, bicarb rose steadily over two days with stable potassium. Which client's correction is durable, and what mechanism explains the other client's?",
            "a": "Client B's renal compensation is durable; Client A has temporary cellular compensation (hydrogen shifting into cells, potassium out).",
            "rationale": "The page calls cellular compensation a temporary correction, not a permanent solution, in which hydrogen moves into cells and potassium moves out; the kidneys are the long-term regulators that retain bicarb over hours to days."
          }
        ]
      }
    },
    {
      "id": "w2-four-disorders",
      "name": "ABGs & the Four Acid-Base Disorders",
      "week": 2,
      "clues": {
        "100": [
          {
            "q": "A dialysis client who skipped their daily bicarb tablets for several days is lethargic and confused, with warm, flushed skin. The ABG shows a low pH and a bicarb of 19. Which acid-base disorder is this?",
            "a": "Metabolic acidosis from renal failure.",
            "rationale": "pH and bicarb are both low (Metabolic Equal). The page lists renal failure as a cause because the kidneys can't excrete hydrogen ions, which is why dialysis clients take daily bicarb; warm, flushed skin and lethargy are listed manifestations."
          },
          {
            "q": "During a panic attack, a client is breathing very fast and says they feel light-headed and about to pass out. The ABG shows a high pH and a low PaCO2. Which acid-base disorder is this, and what is the primary event?",
            "a": "Respiratory alkalosis caused by hyperventilation.",
            "rationale": "pH up with CO2 down is Respiratory Opposite. The page names hyperventilation (anxiety, panic attack) as the primary event, blowing off too much CO2, with light-headedness and syncope as manifestations."
          },
          {
            "q": "A post-anesthesia client who received additional narcotic doses for pain is drowsy, with slow, shallow respirations. Which acid-base disorder should the nurse anticipate?",
            "a": "Respiratory acidosis from hypoventilation.",
            "rationale": "The page lists anesthesia/post-anesthesia (drugs take longer to metabolize) and too much narcotic as causes of hypoventilation, which retains CO2 and drops the pH; slow, shallow breathing and decreased LOC are its manifestations."
          }
        ],
        "200": [
          {
            "q": "A client with type 1 diabetes has a blood glucose far above normal, a low pH, and a low bicarb, and is breathing deeply and rapidly. What does this breathing pattern represent, and what treatment addresses the underlying acid?",
            "a": "Kussmaul respirations compensating for DKA's metabolic acidosis; give insulin.",
            "rationale": "The page describes Kussmaul respirations as compensatory hyperventilation common in DKA, the lungs blowing off CO2 to reduce the acidosis; DKA's ketones are acids, treated by lowering glucose with insulin."
          },
          {
            "q": "A calm, afebrile, sedated client on a mechanical ventilator has an ABG with a high pH and a low PaCO2. There is no anxiety, infection, or head injury. What is the most likely cause, and what is the fix?",
            "a": "Respiratory alkalosis from ventilator settings (rate or tidal volume too high); change the settings.",
            "rationale": "Low CO2 with high pH is respiratory alkalosis. With anxiety, fever/infection, and head injury ruled out, the page's remaining cause is a ventilator rate set too high or tidal volume too big, and its treatment on a ventilator is to change the settings."
          },
          {
            "q": "A client taking a loop diuretic has a pH of 7.50 and a bicarb of 33. The client denies vomiting and denies using antacids or baking soda. What is the most likely cause of this disorder?",
            "a": "Metabolic alkalosis from the loop diuretic (hydrogen ions lost in the urine).",
            "rationale": "High pH with high bicarb is metabolic alkalosis. With vomiting and excess base ruled out, the page's remaining cause is diuretics, especially loop diuretics, which lose hydrogen ions in the urine while bicarb stays the same."
          }
        ],
        "300": [
          {
            "q": "A client with prolonged NG suctioning has a high pH and a high bicarb. The cardiac monitor now shows a new dysrhythmia. Which electrolyte imbalance should the nurse suspect, and why?",
            "a": "Hypokalemia: hydrogen ions leave the cells and potassium shifts into them.",
            "rationale": "NG suction pulls hydrochloric acid from the stomach, causing metabolic alkalosis. The page explains that with a high pH, hydrogen comes out of the cell to buffer and potassium goes in, so less potassium circulates, bringing hypokalemia's cardiac issues."
          },
          {
            "q": "A client with three broken ribs is breathing shallowly because of uncontrolled pain. The ABG shows pH 7.30 and PaCO2 55. The client says they can't catch their breath. What intervention best addresses the acid-base problem?",
            "a": "Improve ventilation: encourage slow, deep breathing to blow off CO2.",
            "rationale": "Low pH with high CO2 is respiratory acidosis; the page lists uncontrolled pain causing shallow breathing (broken ribs) as a cause. Its interventions increase the rate and depth of breathing to blow off CO2, such as encouraging slow, deep breaths."
          },
          {
            "q": "A client without diabetes who has eaten almost nothing for weeks has a low pH, a low bicarb, and ketones present. A student nurse assumes DKA. What is the more likely cause of this acidosis?",
            "a": "Metabolic acidosis from starvation (ketosis from breaking down body fat), not DKA.",
            "rationale": "Ketones point to more than one cause on the page: DKA (especially in type 1 diabetes) and starvation, where breaking down body fat produces ketosis. With no diabetes and prolonged starvation, starvation ketosis is the fit."
          }
        ],
        "400": [
          {
            "q": "A client with a pH of 7.49 and a bicarb of 34 after days of vomiting has tremors and confusion, and is breathing slowly and shallowly. A colleague says the slow breathing means the client has developed respiratory acidosis. How should the nurse correct this?",
            "a": "The slow breathing is the lungs retaining CO2 to compensate for metabolic alkalosis, not respiratory acidosis.",
            "rationale": "Respiratory acidosis would drop the pH, but this pH is high with a high bicarb, so the primary disorder is metabolic alkalosis. The page lists respiratory depression as a manifestation: the lungs decrease rate and depth to hold on to CO2 and counteract the alkalosis."
          },
          {
            "q": "A client is resuscitated after a cardiac arrest. The first ABG shows a low pH, a high PaCO2, and a low bicarb. Which acid-base disorders are present, and what caused each?",
            "a": "Both respiratory acidosis (from not breathing) and metabolic (lactic) acidosis (from tissue hypoxia).",
            "rationale": "Here both values point acidic rather than one compensating. The page states that shock and cardiac arrest produce lactic acid from tissue hypoxia (metabolic acidosis) plus respiratory acidosis from not breathing."
          }
        ],
        "500": [
          {
            "q": "Two dehydrated clients have each had days of GI fluid loss: one from prolonged vomiting, the other from prolonged diarrhea. Why do their ABGs move in opposite directions?",
            "a": "Vomiting loses stomach acid (metabolic alkalosis); diarrhea loses bicarb (metabolic acidosis).",
            "rationale": "Both are metabolic, but the page explains that vomiting loses hydrochloric acid (hydrogen ions), leaving too much base, while in diarrhea the bicarb released into the intestines to neutralize stomach acid is lost, leaving a bicarb deficit."
          },
          {
            "q": "A client with COPD normally runs a PaCO2 of 60 and a bicarb of 32 with a normal pH. Now, with a respiratory infection, the PaCO2 is 75, the bicarb is still 32, and the pH has dropped. The client's bicarb is already high, so why didn't it protect the pH?",
            "a": "The baseline bicarb only balanced the old CO2; the kidneys haven't had time to compensate for the new acute rise (acute on chronic).",
            "rationale": "In chronic respiratory acidosis the kidneys raise the bicarb over time to bring the pH near normal. The page's acute-on-chronic example shows the infection pushing CO2 higher faster than the kidneys can respond, so the bicarb stays at 32 and the pH falls."
          }
        ]
      }
    },
    {
      "id": "w2-abg-interpretation",
      "name": "ABG Interpretation",
      "week": 2,
      "clues": {
        "100": [
          {
            "q": "A client who has been breathing rapidly for the past 20 minutes has an ABG of pH 7.55, PaCO2 28, HCO3 26. How should the nurse interpret this ABG?",
            "a": "Uncompensated respiratory alkalosis.",
            "rationale": "The pH is basic and the low PaCO2 lines up with it (Respiratory Opposite), so the problem is respiratory. The bicarb is in the normal column, which the tic-tac-toe method reads as uncompensated."
          },
          {
            "q": "A client's ABG returns pH 7.29, PaCO2 39, HCO3 17. How should the nurse interpret this ABG?",
            "a": "Uncompensated metabolic acidosis.",
            "rationale": "The pH and bicarb are both low (Metabolic Equal), so the problem is metabolic acidosis. The PaCO2 is still normal, so the lungs have not started compensating, matching the lecture example 7.26 / 40 / 18."
          },
          {
            "q": "A client's ABG returns pH 7.52, PaCO2 40, HCO3 34. How should the nurse interpret this ABG?",
            "a": "Uncompensated metabolic alkalosis.",
            "rationale": "The pH and bicarb are both basic and line up in the same column (Metabolic Equal), so the problem is metabolic alkalosis. Only one component is abnormal and the PaCO2 is normal, which the page defines as uncompensated."
          }
        ],
        "200": [
          {
            "q": "A client's ABG shows pH 7.50, PaCO2 28, HCO3 20. The nurse notes that the bicarb is no longer normal. How should the nurse interpret this ABG?",
            "a": "Partially compensated respiratory alkalosis.",
            "rationale": "The basic pH matches the low PaCO2, so the primary problem is respiratory alkalosis. The low bicarb is the kidneys compensating (moving in the same direction as the CO2), but because the pH is still abnormal it is only partially compensated."
          },
          {
            "q": "Yesterday a client's ABG showed a compensated acid-base imbalance. The cause has since been treated, and today's ABG is pH 7.40, PaCO2 39, HCO3 26. Which level of compensation does today's ABG represent?",
            "a": "Corrected.",
            "rationale": "Compensated means the pH is normal while the CO2 and bicarb are still abnormal but balanced. Corrected means the pH, CO2 and bicarb are all within normal limits after the cause has been fixed, which is what today's values show."
          },
          {
            "q": "A client's ABG returns pH 7.37, PaCO2 31, HCO3 18. A nurse says, 'The pH is normal, so there is no acid-base problem.' What is the correct interpretation?",
            "a": "Fully compensated metabolic acidosis.",
            "rationale": "Step 1 says a normal pH with an abnormal CO2 and bicarb means compensation has occurred. A pH of 7.37 leans acidic (7.35 to 7.40), which matches the low bicarb; the low CO2 is the lungs compensating."
          }
        ],
        "300": [
          {
            "q": "A client's ABG shows pH 7.43, PaCO2 52, HCO3 34. A nurse focuses on the high PaCO2 and documents respiratory acidosis. What is the correct interpretation?",
            "a": "Fully compensated metabolic alkalosis.",
            "rationale": "A pH of 7.43 is normal but leans basic (above 7.40), so the primary value must be the basic one: the high bicarb. A high CO2 is acidic and cannot match a basic-leaning pH, so it is the lungs compensating, not the primary problem."
          },
          {
            "q": "A client's ABG shows pH 7.31, PaCO2 54, HCO3 33. Seeing the high bicarb, a nurse suspects metabolic alkalosis. What is the correct interpretation?",
            "a": "Partially compensated respiratory acidosis.",
            "rationale": "The pH is acidic, and a high bicarb is basic, so it cannot be the primary problem; the high PaCO2 matches the acidic pH (Respiratory Opposite). The kidneys are retaining bicarb to compensate, but the pH is still abnormal, so compensation is partial, like the lecture example 7.30 / 52 / 30."
          },
          {
            "q": "A client's morning ABG was pH 7.30, PaCO2 40, HCO3 17. The afternoon ABG is pH 7.33, PaCO2 31, HCO3 17. How has the acid-base picture changed, and which organ caused the change?",
            "a": "It went from uncompensated to partially compensated metabolic acidosis; the lungs are compensating.",
            "rationale": "Both ABGs show a low pH and low bicarb (metabolic acidosis). In the afternoon the CO2 has dropped below normal while the pH is still acidic, which is partial compensation; respiratory compensation is triggered by a metabolic problem and works by hyperventilating to blow off CO2 within minutes to hours."
          }
        ],
        "400": [
          {
            "q": "A client with long-standing COPD has an ABG of pH 7.37, PaCO2 58, HCO3 34. A nurse documents, 'Acid-base imbalance corrected; pH is normal.' What correction should be made to this note?",
            "a": "It is compensated respiratory acidosis, not corrected; a COPD client's ABG will never be fully corrected.",
            "rationale": "Corrected requires the CO2 and bicarb to be normal too; here they are abnormal but balanced, so the imbalance is neutralized (compensated), with the pH leaning acidic toward the high CO2. The page states that because COPD is chronic, the CO2 stays high with a high bicarb balancing it, so a corrected ABG will never be seen."
          },
          {
            "q": "Two clients each developed an acid-base problem 1 hour ago and both have a pH of 7.30. Client A: PaCO2 31, HCO3 17. Client B: PaCO2 55, HCO3 26. Why does Client A already show compensation while Client B shows none?",
            "a": "Client A has a metabolic problem compensated by the fast-acting lungs; Client B has a respiratory problem that needs the slow kidneys (hours to days).",
            "rationale": "Client A is partially compensated metabolic acidosis: the lungs respond to a metabolic problem within minutes to hours by blowing off CO2. Client B is uncompensated respiratory acidosis: compensation for a respiratory problem comes from the kidneys, which take hours to days, so the bicarb is still normal at 1 hour."
          }
        ],
        "500": [
          {
            "q": "Two clients have the same PaCO2 of 30 and HCO3 of 19. Client A's pH is 7.37; Client B's pH is 7.43. Both pH values are normal. How does the nurse interpret each ABG, and what single finding separates them?",
            "a": "A: fully compensated metabolic acidosis; B: fully compensated respiratory alkalosis; the direction the normal pH leans from 7.40 decides it.",
            "rationale": "With compensation, the pH points the way: 7.37 leans acidic, which matches the low bicarb (metabolic acidosis, low CO2 compensating), while 7.43 leans basic, which matches the low CO2 (respiratory alkalosis, low bicarb compensating). The CO2 and bicarb alone cannot tell the two apart."
          },
          {
            "q": "Two clients both have an elevated PaCO2 and an elevated HCO3. Client A: pH 7.32, PaCO2 56, HCO3 34. Client B: pH 7.50, PaCO2 50, HCO3 36. Which organ is compensating in each client, and what is it doing?",
            "a": "A: the kidneys are retaining bicarb (compensating respiratory acidosis); B: the lungs are hypoventilating to conserve CO2 (compensating metabolic alkalosis).",
            "rationale": "In A the acidic pH matches the high CO2, so the problem is respiratory and the kidneys, which act slowly over hours to days, retain bicarb. In B the basic pH matches the high bicarb, so the problem is metabolic and the lungs, which act within minutes to hours, hypoventilate to hold on to CO2; both are partially compensated because the pH is still abnormal."
          }
        ]
      }
    }
  ]
};
