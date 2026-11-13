/* ============================================================
   exam2-jeopardy.js -- the question bank for the Exam 2 3-player Jeopardy game
   (Week 3 + Week 4: 8 categories x 13 clues = 104).
   Read by assets/jeopardy-exam2.js. See PROMPTS-AND-STANDARDS.md Part 4 for the
   exact drafting prompt and rules, and reference/jeopardy-style-sample.js
   for two finished categories.

   Shape:
     categories: [ { id, name, week, clues: { "100":[...3], "200":[...3],
       "300":[...3], "400":[...2], "500":[...2] } } ]
     each clue: { q, a, rationale }   (13 clues per category)
   Category names use a literal "&" (the engine escapes at render time).
   ============================================================ */
window.JEOPARDY_EXAM2 = {
  "categories": [
    {
      "id": "w3-migraines",
      "name": "Migraines",
      "week": 3,
      "clues": {
        "100": [
          {
            "q": "A client describes a 10-hour headache on the left side of the head that throbs, is rated 7/10, and gets worse when she climbs stairs. She has been lying in a dark room with the curtains pulled. What does this presentation meet the criteria for?",
            "a": "A migraine.",
            "rationale": "The page defines migraine as a 4 to 72 hour headache with at least two pain features (unilateral, throbbing, worse with activity, moderate to severe) plus at least one of nausea/vomiting, photophobia or phonophobia. She has all four pain features plus photophobia."
          },
          {
            "q": "A client's headache diary shows migraines on a Sunday after sleeping 15 hours, the morning after drinking red wine at dinner, and after an afternoon in a store with strong perfume odors. What do these three entries have in common?",
            "a": "Each is a common migraine trigger (too much sleep, alcohol, strong smells).",
            "rationale": "The page lists sleep disturbances (too little or too much sleep, e.g. 15 hours), alcohol (red wine is a common one), and bright lights or strong smells as common triggers. Oversleeping counts as a sleep disturbance, not just sleep loss."
          },
          {
            "q": "Before each headache, a client sees shimmering lights and a blind spot for about 30 minutes, then develops a throbbing one-sided headache. How should the nurse classify this client's migraines?",
            "a": "Migraine with aura.",
            "rationale": "Shimmering lights and blind spots are visual aura symptoms, and the aura phase lasts up to about an hour. Migraine with aura occurs in about a third of people with migraines; migraine without aura is the more common type."
          }
        ],
        "200": [
          {
            "q": "A client has a moderate migraine with mild queasiness but no vomiting. She has acetaminophen and ibuprofen at home and asks whether she needs a triptan prescription before trying anything. What should the nurse tell her to try first?",
            "a": "Basic analgesics (acetaminophen, an NSAID, or a combination) first.",
            "rationale": "For mild to moderate migraine without severe nausea or vomiting, basic analgesics are tried first because they can be very effective, are readily available and are inexpensive; a triptan is tried if they do not work alone."
          },
          {
            "q": "A client's migraine pain is only mild, but she has vomited four times in the past two hours and cannot keep fluids down. What should the nurse anticipate being added to her abortive therapy?",
            "a": "An antiemetic, such as ondansetron or promethazine.",
            "rationale": "The page adds antiemetics for severe nausea and vomiting with any severity of migraine. The mild pain level does not remove the need; the vomiting is the deciding detail."
          },
          {
            "q": "Two days after a migraine's throbbing pain resolved, a client reports she still feels fatigued, irritable and down, and worries the migraine is starting again. How should the nurse interpret these symptoms?",
            "a": "Expected recovery phase symptoms, not a new migraine.",
            "rationale": "The recovery phase follows the headache and lasts a few hours up to a few days, with irritability, fatigue and depression. Without new throbbing pain, these fit recovery rather than a returning headache phase."
          }
        ],
        "300": [
          {
            "q": "A client says she always knows a migraine is coming a day ahead: she gets irritable, can't concentrate, has a stiff neck and craves sweets, but has never had any visual, sensory or motor changes. Which migraine phase is she describing, and does it mean she has migraine with aura?",
            "a": "The premonitory phase; it does not mean she has aura.",
            "rationale": "The premonitory phase occurs hours or days before the headache with fatigue, irritability, poor concentration, stiff neck and food cravings. Aura is a separate phase of visual, sensory or motor symptoms lasting up to about an hour, which she has never had."
          },
          {
            "q": "A client with no cardiac history uses subcutaneous sumatriptan, which works fast for him, but he dislikes the injection site reactions and other side effects. He says he would accept slower relief for fewer side effects. Which triptan route should the nurse expect the provider to consider, and what side effect should he be told to expect?",
            "a": "Intranasal; expect a bad taste.",
            "rationale": "The page states nasal spray has fewer side effects than subQ, while subQ works most quickly and causes injection site reactions. The nasal form's characteristic side effect is a bad taste."
          },
          {
            "q": "Client A has 3 migraines a month, each lasting about 6 hours and relieved by naproxen. Client B has 2 migraines a month, each lasting about 18 hours. Which client meets the criteria for preventive therapy?",
            "a": "Client B, because the migraines last longer than 12 hours.",
            "rationale": "Preventive therapy is used for more than 4 migraines a month or migraines lasting longer than 12 hours. Client A meets neither criterion; Client B has fewer attacks but meets the duration criterion."
          }
        ],
        "400": [
          {
            "q": "A client says, \"My sumatriptan doesn't work well, so I wait until the headache is really bad so I don't waste a dose, and I never take it with my naproxen because doubling up seems risky.\" What two points should the nurse correct?",
            "a": "Take abortive therapy early in the headache, and the triptan plus naproxen combination is more effective.",
            "rationale": "The page states abortive therapy is more effective when given early in the course of the headache, and that triptans are often combined with an analgesic (e.g. sumatriptan with naproxen) because the combination is more effective than either alone."
          },
          {
            "q": "A client on propranolol for migraine prevention for 3 months now has 3 migraines a month instead of 8, and they are shorter and respond better to her abortive drug. She wants to stop propranolol because \"it obviously isn't working, I still get migraines.\" How should the nurse reframe what the drug is meant to do?",
            "a": "Preventive therapy reduces migraine frequency, severity and duration (and improves acute response); it is not expected to eliminate migraines, and it is working.",
            "rationale": "The page's goals of preventive therapy are reducing frequency, severity and duration, improving response to acute treatment, improving function, and preventing episodic migraines from becoming chronic. Her drop from 8 to 3 shorter, more treatable attacks shows those goals being met."
          }
        ],
        "500": [
          {
            "q": "Two clients each have a moderate to severe migraine with no nausea. Client A has no cardiac history but felt chest pressure and flushing after her last subQ sumatriptan dose. Client B has angina and has never taken a triptan. Which client should not receive a triptan, what should the nurse anticipate for that client instead, and how is Client A's chest pressure explained?",
            "a": "Client B (angina) should not get a triptan and should get a CGRP antagonist such as rimegepant; Client A's chest pressure is an expected triptan side effect from vasoconstriction.",
            "rationale": "Triptans work by vasoconstriction, so they are avoided in ischemic stroke, heart disease or angina, and rimegepant is used when triptans are contraindicated. Chest pressure and flushing are listed triptan side effects that make sense for a vessel-constricting drug, not a contraindication by themselves."
          },
          {
            "q": "A client's migraines cluster right before and during her menstrual period, nearly disappeared during her pregnancy, and returned once her cycles resumed. Her older sister says her own migraines decreased after menopause. What single mechanism from the lecture explains all of these patterns?",
            "a": "Cyclical withdrawal of estrogen and progesterone over the menstrual cycle triggers migraines.",
            "rationale": "The page states migraines occur more right before and during menstruation and often decrease during pregnancy and menopause, with the theory that cyclical hormone withdrawal is the trigger. Pregnancy and menopause both remove that monthly withdrawal cycle."
          }
        ]
      }
    },
    {
      "id": "w3-parkinsons",
      "name": "Parkinson's Disease & Parkinson's Pharmacology",
      "week": 3,
      "clues": {
        "100": [
          {
            "q": "A client started on Sinemet two weeks ago calls, alarmed that his urine and sweat have turned dark and are staining his shirts. He worries he is bleeding internally. What should the nurse recognize this as?",
            "a": "An expected, harmless adverse effect of levodopa (darkened sweat and urine).",
            "rationale": "The page lists darkened sweat and urine as a levodopa adverse effect that is not harmful, only annoying because it can stain clothing. No other bleeding signs are described, so the nurse can reassure him."
          },
          {
            "q": "The daughter of a client with Parkinson's disease says her father drools constantly, so his body must be making too much saliva. Which Parkinson's manifestation actually explains the drooling?",
            "a": "Bradykinesia: loss of automatic swallowing of saliva.",
            "rationale": "The page lists drooling as a result of bradykinesia, the loss of automatic movements like swallowing saliva. It is not caused by making too much saliva."
          },
          {
            "q": "After several days on an antiemetic, a client develops a tremor and slowed movements and is terrified he now has Parkinson's disease for life. What does this presentation most likely represent?",
            "a": "Drug-induced secondary parkinsonism, which usually resolves after the drug is stopped.",
            "rationale": "Secondary parkinsonism has a defining event, and the page names some antiemetics and antidepressants as the most common cause. Symptoms usually go away once the medication is stopped, unlike idiopathic Parkinson's disease."
          }
        ],
        "200": [
          {
            "q": "A 62-year-old has a hand tremor that makes handwriting and buttoning his shirt very difficult, but it disappears when his hands rest in his lap. He has no rigidity, a normal gait, and normal facial expression. Which tremor fits this picture?",
            "a": "Essential tremor, not a Parkinson's tremor.",
            "rationale": "The page's comparison says essential tremor occurs with motor function, makes fine motor movements difficult, and comes without other Parkinson's manifestations. A Parkinson's tremor occurs at rest, improves with movement, and comes with other signs."
          },
          {
            "q": "A client started Sinemet three weeks ago. She says her tremor and stiffness are no better, so the drug obviously is not working and she wants to stop it. What should the nurse explain?",
            "a": "Improvement can take months while dopamine builds up, so she should keep taking it.",
            "rationale": "The page says Sinemet is one of the most effective PD drugs but takes several months to improve symptoms as dopamine builds up, and clients should be taught this. Three weeks is too early to call it a failure."
          },
          {
            "q": "During the assessment before a client's first dose of Sinemet, the nurse finds an irregular, darkly pigmented lesion on the client's back. The client says it has been there for years and is nothing. What should the nurse do?",
            "a": "Report the lesion to the provider before Sinemet is started, because Sinemet can activate malignant melanoma.",
            "rationale": "The page warns that Sinemet can activate malignant melanoma and calls for a good skin assessment before starting, to identify suspicious lesions. The client's dismissal does not change that."
          }
        ],
        "300": [
          {
            "q": "A client has taken Sinemet for several years. Each dose used to last until the next one, but now symptoms gradually creep back sooner before each dose, even after a dose increase. What is happening, and what adjustment typically helps?",
            "a": "Wearing off (gradual loss of effect); shorter dosing intervals help.",
            "rationale": "The page describes wearing off as each dose wearing off sooner and sooner, even with dose increases, and says shorter dosing intervals or dose changes help. This differs from the sudden, unpredictable on-off phenomenon."
          },
          {
            "q": "A client whose symptoms were well controlled on Sinemet has worsening tremor and rigidity. Over the past month he started a vitamin B6 supplement a friend recommended, and he was prescribed an antipsychotic for nightmares and paranoia. What best explains the loss of control?",
            "a": "Both the vitamin B6 and the antipsychotic decrease levodopa's effect.",
            "rationale": "The page lists vitamin B6 (pyridoxine), antipsychotics, and protein as substances that decrease levodopa's effect. Two new interfering agents, not disease progression, best explain the sudden change, so a medication reconciliation is needed."
          },
          {
            "q": "A 48-year-old is newly diagnosed with early Parkinson's disease. The provider plans pramipexole monotherapy, the usual choice for a younger client early in the disease. His history includes treatment for compulsive gambling. What should the nurse flag?",
            "a": "Pramipexole can cause compulsive behaviors such as pathologic gambling, so it is a poor choice for him.",
            "rationale": "The page says pramipexole is usually monotherapy in younger, early-PD clients, but it can cause unusual compulsive behaviors such as pathologic gambling. That makes it a poor choice for a client who already has compulsive behaviors."
          }
        ],
        "400": [
          {
            "q": "A client stable on Sinemet for years had pramipexole added last week. Today he nearly faints getting out of bed and reports seeing strangers in his room. His daughter fears his dementia has started. What should the nurse recognize instead?",
            "a": "Adverse effects of combining pramipexole with levodopa: profound orthostatic hypotension and a doubled risk of hallucinations.",
            "rationale": "The page says that with levodopa, pramipexole causes really profound orthostatic hypotension and doubles the risk of hallucinations. The new drug together with the near-fainting points to the combination rather than new-onset dementia."
          },
          {
            "q": "A client with longer and more frequent off periods is scheduled to begin a Duopa infusion tomorrow. He stopped his MAOI antidepressant 6 days ago and says it is out of his system now, and that an antidepressant cannot affect a Parkinson's drug anyway. How should the nurse respond?",
            "a": "Duopa should not start until at least 2 weeks after the MAOI, because the combination can cause levodopa toxicity.",
            "rationale": "The page says not to take Duopa within 2 weeks of an MAOI for depression because it can cause levodopa toxicity, and it lists MAOIs among drugs that increase levodopa's effect. Six days is not enough, and the client's belief about the interaction is wrong."
          }
        ],
        "500": [
          {
            "q": "A client on Sinemet says: 'My problem is not enough dopamine, so a drug that blocks acetylcholine cannot help me. And since it works a different way, it must be safe to add.' Using the page's mechanism, how should the nurse correct both statements?",
            "a": "PD is a dopamine-acetylcholine imbalance, so blocking acetylcholine helps restore balance, but anticholinergics also raise levodopa's effect toward toxicity.",
            "rationale": "The page explains that losing dopamine causes a relative excess of acetylcholine, and that therapy corrects the imbalance either by enhancing dopamine or by blocking acetylcholine. It also lists anticholinergics among the drugs that increase levodopa's effect to toxicity, so adding one is not automatically safe."
          },
          {
            "q": "Two clients on Sinemet both have off episodes. In Client A, symptoms suddenly returned an hour ago in the middle of a dosing interval and need control now. In Client B, the oral doses no longer last long enough and the off periods keep getting more frequent and longer. Which drug fits each client, and why?",
            "a": "Client A: apomorphine (short-acting subQ rescue). Client B: Duopa (continuous intestinal infusion for consistent levels).",
            "rationale": "The page describes apomorphine as a short-acting subQ injection for fast relief during an off phase, and Duopa as a continuous infusion that keeps blood levels consistent for clients whose oral dose does not last or who have more or longer off periods. One drug rescues a single episode; the other prevents them."
          }
        ]
      }
    },
    {
      "id": "w3-myasthenia-gravis",
      "name": "Myasthenia Gravis",
      "week": 3,
      "clues": {
        "100": [
          {
            "q": "A client with MG who takes neostigmine is going on a week-long solo trip and says, \"I'll carry my pill bottle, so if I get into trouble anyone will know what's wrong.\" If she develops a crisis and can't speak for herself, what teaching point protects her best?",
            "a": "Wear a medical alert bracelet at all times.",
            "rationale": "The page teaches clients with MG to wear a medical alert bracelet at all times; a crisis brings severe weakness and respiratory compromise, and responders need to know about MG and the anticholinesterase drug right away."
          },
          {
            "q": "A client just diagnosed with myasthenia gravis asks, \"So this will just keep getting worse every year, right?\" What should the nurse honestly explain about the course of MG?",
            "a": "The course is unpredictable: it can remit, plateau, relapse, or progress.",
            "rationale": "The page says MG varies from person to person: it can spontaneously remit, stabilize, cycle through relapses and symptom-free periods, or progress rapidly, so being honest up front about that unpredictability is key."
          },
          {
            "q": "A client with MG started on neostigmine says his arms feel stronger, but he now sweats more, has extra saliva, and has loose stools. How should the nurse interpret these new symptoms?",
            "a": "Expected muscarinic (SLUDGE) side effects of neostigmine, not a crisis.",
            "rationale": "Neostigmine stimulates muscarinic as well as nicotinic receptors, and that muscarinic stimulation causes most of its side effects (increased secretions, diaphoresis, GI motility); his improving strength shows the nicotinic effect is still therapeutic."
          }
        ],
        "200": [
          {
            "q": "A 29-year-old woman, eight weeks after a cesarean birth under anesthesia, reports slow speech and trouble chewing that worsen as she uses those muscles and return after she rests. Her shoulder and hip strength is normal. Which condition does this picture suggest?",
            "a": "Myasthenia gravis.",
            "rationale": "The page describes MG as fluctuating skeletal muscle weakness that recovers with rest, often first in the face, mouth, and throat, sparing the shoulders and hips, and notes that it often first appears postpartum or after certain anesthesia."
          },
          {
            "q": "A client with myasthenia gravis who also has asthma is about to start neostigmine. Which adverse effect makes the nurse consider this order carefully?",
            "a": "Bronchoconstriction.",
            "rationale": "Neostigmine's muscarinic stimulation causes bronchial constriction, and the page says to consider carefully before giving it to clients with asthma or other lung disease."
          },
          {
            "q": "A client with MG on long-term prednisone says, \"My problem is weak muscles, so why am I on a steroid?\" What should the nurse explain?",
            "a": "MG is autoimmune, so steroids calm the immune attack on the receptors.",
            "rationale": "The page says MG is caused by an antibody-mediated attack at the neuromuscular junction, and immunosuppressants, particularly steroids, are used to calm that immune response; drug therapy alleviates symptoms rather than curing."
          }
        ],
        "300": [
          {
            "q": "A client with MG taking neostigmine has good muscle strength and easy breathing but reports dizziness; the heart rate is 42. Which type of drug should the nurse anticipate, and why?",
            "a": "An anticholinergic such as atropine, to raise the heart rate.",
            "rationale": "Slowed heart rate is a muscarinic side effect of neostigmine; with strength and breathing intact this is symptomatic bradycardia rather than a crisis, and the page says to use an anticholinergic like atropine to raise the heart rate."
          },
          {
            "q": "A client with MG who caught a cold three days ago is anxious, has slurred speech and trouble swallowing pills, and is breathing shallowly at 28 per minute with a weak cough. Which finding is the nurse's priority?",
            "a": "The shallow breathing and weak cough (respiratory insufficiency).",
            "rationale": "A cold can trigger myasthenic crisis, and the page says the big concern in crisis is the respiratory muscles, since these clients are at higher risk for respiratory arrest; the speech and swallowing changes matter but are not the immediate threat."
          },
          {
            "q": "A client with MG ran out of neostigmine four days ago and now has extreme weakness and difficulty breathing, with a normal heart rate, no diarrhea, and no excess sweating or saliva. Which crisis is most likely?",
            "a": "Myasthenic crisis from inadequate medication.",
            "rationale": "Inadequate pharmacotherapy is a listed trigger of myasthenic crisis (not enough acetylcholine stimulation); the absence of bradycardia, diarrhea, and excess secretions argues against the excessive muscarinic stimulation of a cholinergic crisis."
          }
        ],
        "400": [
          {
            "q": "A client with MG says, \"My body doesn't make enough acetylcholine, so neostigmine must be replacing it.\" Which two points should the nurse correct?",
            "a": "Acetylcholine production is normal; neostigmine blocks its breakdown rather than replacing it.",
            "rationale": "The page says the body makes enough acetylcholine but antibodies block and destroy the receptor sites; neostigmine inhibits cholinesterase so acetylcholine stays in the junction longer to find undamaged receptors."
          },
          {
            "q": "A client in cholinergic crisis receives atropine. Afterward, the secretions dry and the heart rate rises, but the client remains profoundly weak with shallow respirations. What should the nurse recognize?",
            "a": "Atropine reverses only the muscarinic signs; respiratory failure risk persists and ventilation may be needed.",
            "rationale": "The page names atropine as the antidote for the muscarinic signs of cholinergic crisis, while the muscle weakness and paralysis carry a risk of respiratory arrest that may require mechanical ventilation."
          }
        ],
        "500": [
          {
            "q": "A client with MG had an upper respiratory infection last week, and her neostigmine dose was raised two days ago. She now has extreme weakness and respiratory insufficiency. After an edrophonium dose, her weakness worsens. Which crisis is this, and why did she worsen?",
            "a": "Cholinergic crisis: edrophonium added acetylcholine to an excess that was already there.",
            "rationale": "The infection is a red herring pointing toward myasthenic crisis, but edrophonium temporarily raises acetylcholine: a myasthenic client improves, while a cholinergic client, already toxic from too much anticholinesterase drug, worsens."
          },
          {
            "q": "A client with MG had his neostigmine increased each time his weakness worsened. He now has profound weakness, respiratory insufficiency, cramping, and diaphoresis. His family asks how a drug meant to strengthen muscles could cause this. What underlying difference should the nurse explain?",
            "a": "At toxic doses, excess acetylcholine overstimulates the muscles until they wear out and fail.",
            "rationale": "At therapeutic doses neostigmine's nicotinic effect increases contraction, but toxic doses cause overstimulated muscles to fail (cholinergic crisis); this is the opposite of myasthenic crisis, where muscles fail from too little stimulation, even though both end in respiratory failure."
          }
        ]
      }
    },
    {
      "id": "w3-multiple-sclerosis",
      "name": "Multiple Sclerosis",
      "week": 3,
      "clues": {
        "100": [
          {
            "q": "A client with MS who started interferon beta (Avonex) this week calls a few hours after an injection reporting fever, chills, and body aches. She has no cough and no sick contacts. What should the nurse recognize these symptoms as?",
            "a": "An expected flu-like reaction to interferon beta.",
            "rationale": "The page lists flu-like reactions (fever, chills, aches) as an adverse effect of interferon beta; the timing after injection and the absence of infectious cues point to the drug rather than an illness."
          },
          {
            "q": "A client with MS reports that her relapses used to last about a month, but since starting a disease-modifying drug six months ago, her last two relapses resolved in under a week. How should the nurse interpret this change?",
            "a": "The medication is working.",
            "rationale": "The page states that relapses getting shorter after treatment starts (for example, from a month down to a week or less) suggests the medication is working."
          },
          {
            "q": "A client with MS reports constipation and asks for a laxative. On review, she drinks very little water and eats almost no fiber. What should the nurse recommend first?",
            "a": "Increase hydration and fiber before adding a bulk-forming laxative.",
            "rationale": "Constipation is the most common MS bowel problem, and the page's management is hydration and fiber first, then a bulk-forming laxative; her low intake makes the first step the obvious gap."
          }
        ],
        "200": [
          {
            "q": "A client with MS has taken an anticholinergic for urinary frequency for months. She now reports a weak stream and a feeling of incomplete emptying, and a bladder scan shows a large residual volume. What type of drug does the nurse anticipate the client now needs?",
            "a": "A cholinergic, because the problem is now urinary retention.",
            "rationale": "MS can cause either bladder incontinence or retention; the page treats frequency with an anticholinergic but retention with a cholinergic, so the new objective finding of retention changes the drug class."
          },
          {
            "q": "A client with MS and type 1 diabetes, well controlled at home on her usual insulin, is admitted for an acute relapse and started on a high-dose IV glucocorticoid at 1 g daily. What should the nurse anticipate regarding her diabetes?",
            "a": "Rising blood glucose requiring extra insulin or an insulin infusion.",
            "rationale": "Pulse-dose steroids (500 mg to 1 g daily for 3 to 5 days) raise blood glucose, and the page notes diabetic clients may need extra insulin or an insulin infusion despite prior good control."
          },
          {
            "q": "A client on interferon beta for six months feels well and has no complaints, but routine labs show a low white blood cell count and low platelets. What should the nurse recognize?",
            "a": "Bone marrow suppression from interferon beta.",
            "rationale": "The page lists bone marrow suppression as an interferon beta adverse effect and says to monitor blood counts; the objective lab finding matters even though the client reports feeling well."
          }
        ],
        "300": [
          {
            "q": "Minutes after a glatiramer acetate (Copaxone) injection, a client reports flushing, palpitations, and chest pain, and then says her throat feels tight and her voice sounds hoarse. Which finding requires the nurse's closest monitoring?",
            "a": "The throat tightness (laryngeal constriction).",
            "rationale": "Flushing, palpitations, and chest pain after glatiramer are usually transient (about 10 to 20 minutes) and need no treatment, but the page says severe laryngeal constriction must be monitored and may need other medications."
          },
          {
            "q": "A client receiving natalizumab for relapsing-remitting MS is admitted with an acute relapse, and the provider orders high-dose IV glucocorticoids. What concern should the nurse raise?",
            "a": "Adding steroids to natalizumab significantly raises the risk of PML.",
            "rationale": "Natalizumab is monotherapy only, and the page states the PML risk is much higher with other immunosuppressants such as steroids, even though steroids are the usual relapse treatment."
          },
          {
            "q": "A client with MS received pulse-dose steroids for her last relapse and tolerated them, but they did not improve her symptoms. She now has a new relapse. Between IVIG and ACTH gel, which option fits her situation, and why?",
            "a": "ACTH gel (H.P. Acthar Gel), because it is used when steroids were not effective.",
            "rationale": "The page reserves IVIG for clients who cannot tolerate high-dose glucocorticoids, while ACTH gel is for clients who cannot tolerate them or when steroids are or were not effective; this client tolerated them, so only ACTH fits."
          }
        ],
        "400": [
          {
            "q": "A client with MS is prescribed donepezil (Aricept). Her husband is upset: \"So she has Alzheimer's too? Her memory is fine, she just can't concentrate or think clearly anymore.\" How should the nurse respond?",
            "a": "Donepezil is being used for severe MS cog fog, not because she has Alzheimer's.",
            "rationale": "The page describes cog fog as difficulty thinking clearly and concentrating, not necessarily a memory problem, and lists donepezil, normally an Alzheimer's drug, for severe MS cognitive dysfunction; the husband's description matches cog fog exactly."
          },
          {
            "q": "A client had MS relapses and remissions for years, losing some function each time. Over the past year she has worsened steadily with no remissions. Her daughter says, \"So it's primary progressive MS now.\" How should the nurse correct this?",
            "a": "It is secondary progressive MS; primary progressive progresses from the start with no flares.",
            "rationale": "The page defines PPMS as steady progression from onset with no exacerbations or remissions, while SPMS starts with relapses and remissions, with some loss of function each time, then shifts to a progressive course; a relapsing history rules out PPMS."
          }
        ],
        "500": [
          {
            "q": "A client switching from interferon beta to glatiramer acetate says, \"They do the same thing, right? Both just stop T cells from getting into my brain.\" How should the nurse correct the client's understanding of the two mechanisms?",
            "a": "Interferon blocks pro-inflammatory T cells from crossing the blood-brain barrier; glatiramer increases anti-inflammatory T cells that do cross it and suppress inflammation.",
            "rationale": "Both reduce CNS inflammation with similar efficacy, but the page explains interferon keeps pro-inflammatory T cells out, while glatiramer works the other way, raising anti-inflammatory T cells that cross the blood-brain barrier."
          },
          {
            "q": "Two clients with MS each have leg weakness during a relapse. Client A's weakness was mild and fully resolved once the relapse ended. Client B's weakness persisted after the relapse ended and has not returned. What nerve-level difference explains the two outcomes?",
            "a": "Client A's fibers were inflamed but intact; Client B's myelin detached and the axon was damaged, blocking the impulse permanently.",
            "rationale": "The page explains that an inflamed but intact fiber still transmits, perhaps more slowly, causing some weakness, while detached myelin with axon damage, scarring, and axon death completely blocks the impulse, a permanent loss of function."
          }
        ]
      }
    },
    {
      "id": "w4-als-gbs",
      "name": "ALS & Guillain-Barré Syndrome",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A client admitted with Guillain-Barré syndrome has uncoordinated movements and difficulty walking, and insists on getting up to the bathroom alone because 'my arms still work fine.' What is the nurse's primary safety concern?",
            "a": "High fall risk; the client needs assistance to ambulate.",
            "rationale": "The page lists uncoordinated movements, loss of strength, and difficulty walking in GBS as a high fall risk; the weakness starts in the lower extremities, so arm strength does not make walking safe."
          },
          {
            "q": "During a skin check, the nurse finds a large blister on the foot of a client with Guillain-Barré syndrome, who says they had no idea it was there. What explains this, and what does it mean for care?",
            "a": "Decreased sensation from GBS lets injuries go unnoticed, so the nurse must inspect the skin routinely.",
            "rationale": "The page lists decreased sensation as a GBS manifestation, so clients may not notice injury; the client cannot be relied on to report it."
          },
          {
            "q": "A client with ALS taking riluzole reports mild dizziness, and today's labs show elevated liver enzymes. Which finding is the priority to report to the provider?",
            "a": "The elevated liver enzymes.",
            "rationale": "Dizziness is a listed riluzole side effect, but the page flags riluzole as hepatotoxic and says to watch liver function, so abnormal liver labs take priority."
          }
        ],
        "200": [
          {
            "q": "A client recovering from Guillain-Barré syndrome now has good arm strength and is breathing well without support, but the legs are still weak. The family fears the recovery has stalled. How should the nurse respond?",
            "a": "This is expected: GBS recovery goes from the top down, so the legs recover last.",
            "rationale": "The page says recovery goes the opposite direction of the ascending weakness, with strength returning to the upper body, then the lungs, then the legs."
          },
          {
            "q": "A client with ALS whose symptoms began as hand weakness and frequent tripping now has new difficulty chewing, swallowing, and speaking. What does this change indicate, and what does the nurse anticipate will eventually become the main issue?",
            "a": "The disease is progressing; breathing (respiratory muscle paralysis) will eventually become the main issue.",
            "rationale": "The page describes the spinal form starting in the arms and legs, then chewing, swallowing, and speaking difficulty as it progresses, and eventually ALS paralyzes the breathing muscles, causing the respiratory failure that kills people with ALS."
          },
          {
            "q": "A client newly started on riluzole for ALS tells the nurse, 'Now that I'm on the medicine, the disease should stop getting worse.' How should the nurse correct this?",
            "a": "Riluzole only slows decline and prolongs survival modestly (about 6 months to a year); it does not stop ALS.",
            "rationale": "The page says riluzole, the only FDA-approved ALS drug, prolongs survival and slows deterioration of function, but not by long: about 6 months to a year at most. ALS remains progressive and fatal."
          }
        ],
        "300": [
          {
            "q": "A client with Guillain-Barré syndrome has loss of bladder control, difficulty walking, tingling in both legs, and new difficulty chewing and swallowing at lunch. Which finding is the nurse's priority, and why?",
            "a": "The new chewing and swallowing difficulty, because it creates an aspiration risk.",
            "rationale": "The page lists problems breathing, swallowing, and chewing in GBS as an aspiration risk, an airway threat that outranks the fall risk from walking difficulty and the loss of bladder control."
          },
          {
            "q": "A client who was diagnosed with Campylobacter jejuni food poisoning two weeks ago now reports tingling and weakness in both feet that has crept up to the knees over two days. The client blames dehydration from the illness. What should the nurse suspect instead?",
            "a": "Guillain-Barré syndrome triggered by the Campylobacter infection.",
            "rationale": "The page names Campylobacter jejuni, a foodborne illness, as a bacterial GBS trigger days to weeks earlier, and GBS weakness and tingling typically start in the lower extremities and ascend, which matches this pattern better than dehydration does."
          },
          {
            "q": "Two clients have progressive weakness. Client A has gradually worsening spasticity and lost hand dexterity over the past year with no recent illness. Client B had a respiratory infection three weeks ago and now has tingling and weakness spreading upward from the feet over several days. Which client's presentation fits ALS?",
            "a": "Client A.",
            "rationale": "The page describes ALS (spinal form) as weakness in the arms and legs with spasticity and lost dexterity from progressive motor neuron degeneration, while Client B shows the GBS picture: a preceding viral respiratory infection and ascending weakness and tingling starting in the lower extremities over hours to weeks."
          }
        ],
        "400": [
          {
            "q": "A client with advancing ALS who takes riluzole reports several days of constipation. The family wants the riluzole stopped because 'it's upsetting his stomach.' What should the nurse recognize about the likely cause?",
            "a": "The constipation is most likely from ALS progression itself (immobility, diet, muscle weakness), not riluzole.",
            "rationale": "The page lists constipation as an ALS progression feature caused by immobility, diet, and muscle weakness; riluzole's listed GI effects are GI upset, nausea, and vomiting, not constipation."
          },
          {
            "q": "A client with Guillain-Barré syndrome has just finished a course of IVIG. The weakness has ascended to the waist over the past day, and a new nurse suggests respiratory checks can be spaced out since 'the IVIG has been given.' Why is this unsafe?",
            "a": "IVIG does not cure GBS; the weakness is still ascending and can reach the breathing muscles, so respiratory monitoring must continue.",
            "rationale": "The page says GBS has no cure and IVIG only shortens the severity and duration of symptoms; the central concern is ascending weakness reaching the breathing muscles, causing respiratory insufficiency and failure that may require mechanical ventilation."
          }
        ],
        "500": [
          {
            "q": "Two clients both have weakness that has progressed toward the breathing muscles: one with ALS, one with Guillain-Barré syndrome. Based on what is damaged in each disease, why can the GBS client be expected to recover function while the ALS client cannot?",
            "a": "GBS damages the myelin sheath, which delays or blocks impulses; ALS kills the motor neurons themselves, so it only progresses.",
            "rationale": "In GBS, autoantibodies damage peripheral myelin so impulses are delayed or absent, and strength returns from the top down. In ALS, upper and lower motor neurons degenerate and die, followed by sclerosis, so damaged neurons stop sending messages and the disease is progressive and fatal."
          },
          {
            "q": "The spouse of a client with ALS asks why their husband is only given riluzole, when a neighbor with Guillain-Barré syndrome received steroids and IVIG. Based on the mechanism behind each disease, how should the nurse explain the difference?",
            "a": "GBS is autoimmune, so it is treated with immune therapies; ALS damage is thought to be glutamate-driven (excitotoxicity), so it is treated with the glutamate inhibitor riluzole.",
            "rationale": "The page describes GBS as an autoimmune disorder in which autoantibodies damage myelin, treated with high-dose steroids and IVIG. ALS's working excitotoxicity hypothesis is that excess glutamate kills motor neurons, and riluzole blocks glutamate receptor sites to reduce that damage."
          }
        ]
      }
    },
    {
      "id": "w4-neuro-infections",
      "name": "Neuro Infectious Diseases",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "In January, a college freshman living in a crowded dorm develops fever, a throbbing headache, and says it hurts to tuck his chin to his chest. What condition should the nurse suspect?",
            "a": "Meningitis.",
            "rationale": "Fever, headache, and nuchal rigidity (chin-to-chest pain from stretching inflamed meninges) are the classic triad, and the page notes meningitis peaks in fall or winter with outbreaks where large groups live and sleep together, like college dorms."
          },
          {
            "q": "A febrile client is lying supine. When the nurse places a hand under the base of the skull and flexes the neck, the client's hips and knees bend up on their own. What does this finding indicate?",
            "a": "A positive Brudzinski sign, indicating meningeal irritation.",
            "rationale": "The page describes a positive Brudzinski sign as neck flexion causing the hips and knees to flex to reduce the pain of meningeal irritation."
          },
          {
            "q": "A client with fever and headache has a purplish rash on the trunk and mucous membranes. When the nurse presses a clear glass against it, the rash does not fade. What should the nurse suspect?",
            "a": "Bacterial (meningococcal) meningitis.",
            "rationale": "A non-blanchable petechial or purpuric rash that will not fade under a pressed glass is the rash specific to meningococcus and is associated with the bacterial form."
          }
        ],
        "200": [
          {
            "q": "Two weeks after an untreated tooth infection, a client has headache, fever, vomiting, and drowsiness. CT shows a lesion with visible walls and a shift of the midline. What does the nurse recognize this as?",
            "a": "A brain abscess.",
            "rationale": "A brain abscess is pus within brain tissue, commonly from a nearby tooth, ear, mastoid or sinus infection; imaging shows the abscess walls and a midline shift from the pressure of pus and inflammation."
          },
          {
            "q": "A client with suspected bacterial meningitis has a documented history of MRSA. Ceftriaxone is ordered. Which additional IV antibiotic does the nurse expect the regimen to include because of this history?",
            "a": "Vancomycin.",
            "rationale": "The page names ceftriaxone and vancomycin as the two most common IV antibiotics for bacterial meningitis, with vancomycin covering a MRSA form."
          },
          {
            "q": "A client in the acute phase of bacterial meningitis has never had a seizure, yet an anti-seizure medication is ordered. What is the reason for this order?",
            "a": "Increased ICP and inflammation raise the seizure risk, so it is given preventively during the acute phase.",
            "rationale": "The page says anti-seizure medications are often given during the acute phase of meningitis and encephalitis because increased ICP and inflammation raise seizure risk; seizures occur in about 30% of meningitis cases."
          }
        ],
        "300": [
          {
            "q": "A client with fever, nuchal rigidity, and a non-blanching petechial rash has IV antibiotics ordered, but the lumbar puncture has been delayed several hours. A coworker suggests holding the antibiotics until the CSF results are back. What should the nurse do?",
            "a": "Give the IV antibiotics now; do not hold them.",
            "rationale": "The page says to give antibiotics for bacterial meningitis as soon as possible and not hold them for any reason, because the bacterial form can kill within hours."
          },
          {
            "q": "A client being treated for meningococcal meningitis develops cool, dusky, mottled fingertips on both hands while blood pressure stays stable. What complication should the nurse suspect?",
            "a": "Septic emboli blocking capillary blood flow, which can cost the client fingers or limbs.",
            "rationale": "Bacterial meningitis can cause septic emboli, tiny microemboli that lodge in capillaries and block blood flow, so adults and children can lose fingers or limbs."
          },
          {
            "q": "On day 2 of bacterial meningitis, a client who was alert becomes increasingly drowsy and begins vomiting. The family thinks the vomiting is just from the infection. What should the nurse suspect is causing these changes?",
            "a": "Increased intracranial pressure.",
            "rationale": "Neutrophil-driven inflammation causes brain edema and exudate that thickens CSF and impairs its flow; in the adult's closed skull this raises ICP, which the page links to nausea, vomiting and decreased consciousness up to coma or death."
          }
        ],
        "400": [
          {
            "q": "A client's lumbar puncture shows no elevated white cell count in the CSF, and viral meningitis is diagnosed. The client says, \"My cousin had meningitis and lost his hearing, so I'll probably lose mine too.\" How should the nurse correct this?",
            "a": "Viral meningitis is the milder form and typically has no long-term effects; hearing loss is a long-term effect of bacterial meningitis.",
            "rationale": "The page lists hearing loss, seizures and brain damage as long-term effects of bacterial meningitis, while viral meningitis is milder, often shows no elevated CSF WBCs, and typically has no long-term effects."
          },
          {
            "q": "The roommate of a client hospitalized with meningococcal meningitis says, \"I feel completely fine and have no symptoms, so there's no way I could spread this to anyone.\" How should the nurse correct this belief?",
            "a": "Some people carry meningococcal bacteria without ever getting sick and can still spread it through respiratory droplets or saliva.",
            "rationale": "The page states that some carriers of meningococcal bacteria never develop the disease but can still pass it on, and that spread is by respiratory droplets or contact with contaminated saliva or respiratory secretions."
          }
        ],
        "500": [
          {
            "q": "Client A, after a mastoid infection, has headache, fever, vomiting, confusion, and a walled lesion with midline shift on CT. Client B, after sinusitis, has fever, headache, nuchal rigidity, and a positive Brudzinski sign. Both have an infection near the brain causing raised ICP. What does Client A need before antibiotics that Client B does not, and why?",
            "a": "Drainage of the abscess, because a localized collection of pus is pressing on the brain in a closed skull.",
            "rationale": "Client B has meningitis, a diffuse meningeal infection treated with IV antibiotics, while Client A has a brain abscess, a localized pus collection; the page says to drain the abscess first to lower pressure and secondary injury in the closed skull, then put antibiotics into the area."
          },
          {
            "q": "Two clients with severe encephalitis were both started on antibiotics and acyclovir until the cause was known. Testing confirms herpes simplex virus 1 in one client and West Nile virus in the other. Which client is expected to benefit from acyclovir, and what is the limit of that benefit?",
            "a": "The HSV-1 client; acyclovir reduces mortality but does not necessarily reduce neurological complications.",
            "rationale": "Both are viral encephalitis, but acyclovir works on the HSV type and is not effective on other viruses such as West Nile, which relies on supportive care; in herpetic encephalitis it reduces mortality without necessarily reducing neurological complications."
          }
        ]
      }
    },
    {
      "id": "w4-tia-ischemic-stroke",
      "name": "TIA & Ischemic Stroke",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A client had sudden right arm weakness and trouble forming words that began abruptly and cleared completely within two hours. By the time they reach the ED the neuro exam shows no residual deficits. What event does this presentation fit?",
            "a": "A transient ischemic attack (TIA).",
            "rationale": "A TIA is an abrupt focal episode lasting less than 24 hours with no acute infarction, and symptoms are often gone on arrival to the ED. A stroke's deficits last longer than 24 hours."
          },
          {
            "q": "A client's chart lists dysphagia after a neurologic event. The client is speaking clearly and asks for a cup of juice, and the family says, \"He's talking fine, so he's okay to drink.\" What should the nurse do?",
            "a": "Keep the client NPO because of aspiration risk.",
            "rationale": "Dysphagia (with a G) is difficulty swallowing, not speaking, so clear speech does not make oral intake safe. The page says to keep these clients NPO because of their high aspiration risk."
          },
          {
            "q": "CT confirms damage in the right side of a client's brain. The family is confused because the client's weakness is in the left arm and leg, and they ask whether the scan is wrong. How should the nurse interpret the left-sided weakness?",
            "a": "It is an expected contralateral finding, with deficits on the side opposite the brain damage.",
            "rationale": "Contralateral means crossing the midline, so manifestations appear on the opposite side of the body from the brain damage. Left-sided weakness from a right-sided lesion fits that pattern and does not mean the scan is wrong."
          }
        ],
        "200": [
          {
            "q": "A client reports three brief episodes over the past month of vertigo, blurry vision, and unsteady, uncoordinated walking. Each one came on suddenly and resolved within an hour. They had no arm or face heaviness. Which vascular area is most likely involved?",
            "a": "The vertebrobasilar area (back of the brain).",
            "rationale": "Vertigo, blurry vision, and ataxia are vertebrobasilar TIA signs. Carotid-area TIAs cause weakness or heaviness in the arms, legs, or face, numbness, and vision loss. Recurrent TIAs usually repeat the same symptoms."
          },
          {
            "q": "A client is evaluated for a possible stroke because of a drooping mouth and face on one side. The droop began five days ago, there is no arm or leg weakness, and it has improved only gradually since treatment started. What condition does the nurse suspect instead of a TIA?",
            "a": "Bell's palsy.",
            "rationale": "Bell's palsy is a facial nerve problem that causes facial paralysis and is a known TIA mimic. It recovers slowly and needs treatment, while a TIA has an abrupt onset and recovers abruptly and rapidly."
          },
          {
            "q": "A client is admitted after a TIA. The ECG shows a regular rhythm with clear P waves. On auscultation the nurse hears a swishing sound over the left side of the neck. Which diagnostic study does this finding most directly call for?",
            "a": "Carotid Doppler studies.",
            "rationale": "A carotid bruit is turbulent flow through a vessel narrowed by plaque. Carotid Doppler studies look for carotid buildup that reduces blood flow to the brain. The normal ECG makes an A-fib clot source less likely."
          }
        ],
        "300": [
          {
            "q": "Twelve days after a TIA, a client calls the clinic. Her left hand is numb and heavy again, the same as last time. She says, \"It's just my TIA again. It went away on its own before, so I'll rest and wait.\" What is the nurse's priority response?",
            "a": "Tell her to go to the ED now because this could be a full stroke.",
            "rationale": "Stroke risk is highest in the first month after a TIA. The page teaches clients to go to the ED if they suspect another TIA because it might be a full-blown stroke. Recurrent TIAs often repeat the same symptoms, so a familiar pattern does not make this safe."
          },
          {
            "q": "A stroke alert is called for a client with sudden one-sided weakness and slurred speech. A family member insists, \"Every minute counts, give him the clot-busting drug right now.\" What must happen first, and why?",
            "a": "A non-contrast CT first, to rule out a hemorrhagic stroke.",
            "rationale": "The rapid non-contrast CT shows blood as white and must separate ischemic from hemorrhagic stroke. A thrombolytic or anticoagulant must never be given for a hemorrhagic stroke because it worsens the bleeding and could kill the client."
          },
          {
            "q": "A client's ischemic stroke symptoms began 90 minutes ago. The family says, \"The doctor told us part of his brain is already dead, so why is everyone rushing?\" What is the nurse's best explanation?",
            "a": "The penumbra around the dead core is salvageable if blood flow is restored quickly, ideally within 3 hours.",
            "rationale": "The core is injured beyond repair, but the surrounding penumbra is injured and still salvageable. The goal is treatment within 3 hours of symptom onset to restore blood flow and save the penumbra. Damage becomes irreversible if flow is not restored."
          }
        ],
        "400": [
          {
            "q": "A client arrives 40 minutes after the sudden onset of right-sided weakness. The non-contrast CT shows no white areas and no obvious dark area. A relative says, \"The CT is clear, so it can't be a stroke.\" How should the nurse correct this?",
            "a": "The CT rules out bleeding, but an early ischemic stroke may not show yet. The dark area becomes clearer later if flow isn't restored.",
            "rationale": "Blood shows up as white right away, so no white area argues against hemorrhage. An ischemic stroke shows as a dark area that is not prominent at first and becomes more noticeable if blood flow is not restored. A clear early CT does not rule out ischemic stroke."
          },
          {
            "q": "Two clients have strokes of similar size and location: an 84-year-old and a 52-year-old. The older client's daughter says, \"At his age he's the one who won't recover.\" Using what the page teaches about age, how should the nurse respond?",
            "a": "Advanced age raises stroke risk but gives a better chance of recovery, because brain atrophy leaves more room for swelling.",
            "rationale": "Age is a starred risk factor. Advanced age means a higher risk of stroke but a better chance of recovery, because brain atrophy leaves more room in the closed skull for swelling and bleeding. The daughter's assumption reverses that point."
          }
        ],
        "500": [
          {
            "q": "A 34-year-old client with normal sinus rhythm, no carotid bruit, and no atherosclerosis has an embolic ischemic stroke. Two weeks ago she was treated for a DVT in her calf. The team expected any clot from that DVT to cause a pulmonary embolism. What cardiac finding would explain how a venous clot reached her brain instead?",
            "a": "A patent foramen ovale, which let the clot pass from the right atrium to the left.",
            "rationale": "A patent foramen ovale is a hole in the atrial septum present from birth. It lets a venous clot such as a piece of DVT pass from the right atrium to the left atrium instead of going to the lungs as a PE. The left ventricle then sends it to the brain. Her normal rhythm and lack of bruit or atherosclerosis rule out the usual A-fib and carotid sources."
          },
          {
            "q": "A client admitted with an ischemic stroke first had a CT showing a darkened area. After blood flow was reestablished, a repeat CT shows a new white area in that same region. The client has no history of hypertension or aneurysm. What process explains this, and how is it different from a primary hemorrhagic stroke?",
            "a": "Hemorrhagic conversion, which is bleeding into the ischemic area after reperfusion, not a primary hemorrhagic stroke.",
            "rationale": "In hemorrhagic conversion, once reperfusion occurs naturally or with therapy, blood extravasates across a disrupted blood-brain barrier into tissue that was already ischemic. The bleeding is secondary to the earlier ischemic event. The darkened area that turns white after reperfusion, with no hypertension history, points to conversion rather than a primary bleed."
          }
        ]
      }
    },
    {
      "id": "w4-hemorrhagic-stroke-tx",
      "name": "Hemorrhagic Stroke & Stroke Treatment",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A wife finds her husband at 6 a.m. with slurred speech and one arm drifting down when he holds both arms out. He was talking normally when they went to bed at 10 p.m. What time should the nurse record as symptom onset for the stroke team?",
            "a": "10 p.m., his last known normal.",
            "rationale": "The page says to find out exactly when symptoms started - the last known normal - because treatment must happen within a set time frame. The 6 a.m. discovery time is only when the deficits were noticed, not when they began."
          },
          {
            "q": "At home, a client suddenly loses vision in one eye. His wife notices his pupils are now unequal, but there is no facial droop or arm drift, and she wants him to sleep it off. How should the nurse on the phone interpret this, and what should the wife do?",
            "a": "It is a stroke warning sign (the E, Eyes, in BE FAST); call 911 now.",
            "rationale": "BE FAST's E covers sudden vision loss in one or both eyes and unequal pupils, so a stroke can present without face or arm findings; T (Time) means call 911 and get to the hospital."
          },
          {
            "q": "A stroke alert is called for a confused client with sudden facial droop. The client has insulin-treated diabetes and skipped lunch. Which quick bedside check is part of the stroke protocol to rule out something that only looks like a stroke?",
            "a": "A blood sugar check, because hypoglycemia can mimic a stroke.",
            "rationale": "The page puts a blood sugar check in the stroke alert bundle because hypoglycemia can mimic a stroke. The skipped meal and insulin use make that mimic a real possibility here."
          }
        ],
        "200": [
          {
            "q": "A client with the worst headache of their life has a lumbar puncture. The first tube is pink, and the fourth tube is just as bloody as the first. What does this finding indicate?",
            "a": "A subarachnoid hemorrhage, not blood from needle trauma.",
            "rationale": "The page says the first tube may have a little blood from needle trauma, but it should clear. CSF that stays bloody from tube to tube points to a subarachnoid bleed."
          },
          {
            "q": "An older client bumped their head on a cabinet three days ago, seemed fine, and is now increasingly confused. Which intracranial bleed fits this delayed course?",
            "a": "A subdural hematoma (slow venous bleeding).",
            "rationale": "The page says subdural bleeds tend to be venous, from injured bridging veins. Because the blood can collect slowly, a client may hit their head, seem fine, and develop symptoms later."
          },
          {
            "q": "Three weeks after a stroke, a client's right arm, which was limp and weak at first, is now stiff and painful when the nurse moves it. What is happening, and what complication comes next if it isn't prevented?",
            "a": "Flaccidity is turning into spasticity, which leads to contractures next.",
            "rationale": "The page describes contralateral muscles going from flaccid (limp, weak) to spastic (painful) to contractures (permanently shortened muscles, joints stuck in abnormal positions), usually within the first 6 weeks."
          }
        ],
        "300": [
          {
            "q": "A client with a suspected hemorrhagic stroke is on the way to CT. The client's GCS has dropped to 7, and their respirations are slow and shallow. What is the nurse's priority before the scan?",
            "a": "Securing the airway: the client needs to be intubated.",
            "rationale": "ABCs come first in stroke care. The page says a GCS below 8 raises concern about airway protection, so the client is intubated, and stroke clients may also have reduced respiratory drive. The CT can wait until the airway is safe."
          },
          {
            "q": "A client on an anticoagulant for atrial fibrillation has a hemorrhagic stroke confirmed on non-contrast CT. Her BP is high and she has a fever of 38.9 C. Besides managing the hypertension, what two treatment priorities should the nurse anticipate?",
            "a": "Reverse the anticoagulation (reversal agent or antidote), and manage ICP (head of bed up, antipyretics, head neutral).",
            "rationale": "For hemorrhagic stroke the page lists reversing anticoagulation (is there a reversal agent or antidote for the client's medications?), managing hypertension, and managing ICP by elevating the head of the bed, giving antipyretics for fever and keeping the head neutral."
          },
          {
            "q": "Two clients have hemorrhagic strokes. Client A is 78, and the CT shows no shift of brain structures. Client B is 40, and the CT report notes a midline shift. Which client has the worse prognosis?",
            "a": "Client B, the 40-year-old with the midline shift.",
            "rationale": "The page says a midline shift means a very poor prognosis. It also says older clients have brain atrophy and more room in the skull, which gives them a better prognosis. Client A's older age is a red herring here, not a risk."
          }
        ],
        "400": [
          {
            "q": "On the same unit, two clients received alteplase for ischemic stroke. Client A has slight oozing at an IV site. Client B suddenly reports a severe headache and is becoming harder to arouse. For which client is aminocaproic acid appropriate, and why not for the other?",
            "a": "Client B, because aminocaproic acid is only for life-threatening hemorrhage, such as an intracranial bleed.",
            "rationale": "The page says alteplase raises the risk of intracranial bleeding and that its antidote, aminocaproic acid, should be given only if the hemorrhage is life-threatening. Client B's sudden headache and falling LOC suggest an intracranial bleed. Minor IV-site oozing does not meet that bar."
          },
          {
            "q": "After an aneurysm in a client with a subarachnoid hemorrhage is coiled, a float nurse plans to keep the client's BP as low as possible and limit fluids to prevent more bleeding. What should the nurse correct about this plan?",
            "a": "BP has to stay high enough to perfuse the brain, and Triple H therapy uses pressors and a hypervolemic state.",
            "rationale": "The page says to avoid big BP swings and to keep BP controlled enough to prevent rebleeding but high enough to perfuse the brain, using the specific BP parameters ordered. Triple H keeps the brain perfused with pressors, colloids, a hypervolemic state, and some hemodilution. Driving BP down and limiting fluids works against all of this."
          }
        ],
        "500": [
          {
            "q": "Two young clients with no history of hypertension each have a subarachnoid hemorrhage with bloody CSF. Client A's angiogram shows a small sac bulging off an artery. Client B's shows a tangled clump where an artery connects straight to a vein. What underlying mechanism weakened Client B's vessels, unlike Client A's?",
            "a": "In an AVM, high-pressure arterial blood flows straight into veins without capillaries to slow it, which weakens the vessel walls.",
            "rationale": "Both lesions can cause a subarachnoid bleed. The page says a berry aneurysm is a sac hanging off an artery that ruptures when it gets big enough. In an AVM, the artery-to-vein junction is a jumbled clump, so high-pressure arterial blood goes directly into the vein, and that pressure weakens the walls and raises rupture risk."
          },
          {
            "q": "Two clients both have rising ICP from intracranial blood. Client A, after a fall, has blood collecting below the dura. Client B, with long-standing untreated hypertension, has a bleed within the brain parenchyma. The family of Client B asks why the surgeons won't just drain the blood the way they will for Client A. What is the key difference?",
            "a": "A subdural bleed can be evacuated, but blood bleeding into the brain tissue itself cannot.",
            "rationale": "Both bleeds raise ICP, but the page says epidural and subdural bleeds are treated by evacuating the collecting blood to relieve pressure. Blood bleeding into the brain tissue cannot be evacuated. Hemorrhagic stroke care instead focuses on managing hypertension and ICP (raising the head of the bed, giving antipyretics, and keeping the head in a neutral position)."
          }
        ]
      }
    }
  ]
};
