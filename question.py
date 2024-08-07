import random as r
driving_test_questions = [
    {
        "question": "What is the legal blood alcohol concentration (BAC) limit for drivers over the age of 21?",
        "options": ["A) 0.05%", "B) 0.08%", "C) 0.10%", "D) 0.15%"],
        "answer": "B) 0.08%"
    },
    {
        "question": "When approaching a stop sign, you must:",
        "options": [
            "A) Slow down and proceed if there is no traffic.",
            "B) Stop only if there is a vehicle approaching.",
            "C) Stop completely and check for oncoming traffic and pedestrians.",
            "D) Yield to oncoming traffic without stopping."
        ],
        "answer": "C) Stop completely and check for oncoming traffic and pedestrians."
    },
    {
        "question": "What does a flashing red traffic light mean?",
        "options": [
            "A) Stop and wait for the light to turn green.",
            "B) Slow down and proceed with caution.",
            "C) Stop and proceed when it is safe.",
            "D) Yield to all oncoming traffic."
        ],
        "answer": "C) Stop and proceed when it is safe."
    },
    {
        "question": "When is it permissible to use a cell phone without a hands-free device while driving?",
        "options": [
            "A) Only during heavy traffic.",
            "B) Only when checking GPS directions.",
            "C) Never, it is illegal to use a cell phone without a hands-free device while driving.",
            "D) When making a quick call."
        ],
        "answer": "C) Never, it is illegal to use a cell phone without a hands-free device while driving."
    },
    {
        "question": "What is the purpose of a two-second following distance?",
        "options": [
            "A) To allow other drivers to pass you.",
            "B) To give yourself enough time to react in case the vehicle in front of you stops suddenly.",
            "C) To save fuel by reducing speed.",
            "D) To improve visibility on the road."
        ],
        "answer": "B) To give yourself enough time to react in case the vehicle in front of you stops suddenly."
    },
    {
        "question": "When are you required to use your headlights?",
        "options": [
            "A) Only during nighttime.",
            "B) From dusk to dawn and during adverse weather conditions.",
            "C) Only in rural areas.",
            "D) Whenever there are no street lights."
        ],
        "answer": "B) From dusk to dawn and during adverse weather conditions."
    },
    {
        "question": "What should you do if you are involved in a minor traffic accident with no injuries?",
        "options": [
            "A) Leave the scene immediately.",
            "B) Exchange information with the other driver and report the accident to the police.",
            "C) Continue driving as if nothing happened.",
            "D) Argue with the other driver about who is at fault."
        ],
        "answer": "B) Exchange information with the other driver and report the accident to the police."
    },
    {
        "question": "In a construction zone, you should:",
        "options": [
            "A) Increase your speed to pass through quickly.",
            "B) Maintain your speed and continue driving normally.",
            "C) Slow down, follow posted speed limits, and be prepared for workers and equipment.",
            "D) Stop and wait for a construction worker to signal you to proceed."
        ],
        "answer": "C) Slow down, follow posted speed limits, and be prepared for workers and equipment."
    },
    {
        "question": "When can you legally pass another vehicle on the right?",
        "options": [
            "A) When the vehicle ahead is making a left turn.",
            "B) When you are in a residential area.",
            "C) When you are driving in a multi-lane highway with two or more lanes in the same direction.",
            "D) Both A and C."
        ],
        "answer": "D) Both A and C."
    },
    {
        "question": "What is the minimum safe following distance in ideal driving conditions?",
        "options": [
            "A) One second",
            "B) Two seconds",
            "C) Three seconds",
            "D) Four seconds"
        ],
        "answer": "B) Two seconds"
    }
]

def test(data_set):
    random_question = r.choice(data_set)
    print(random_question["question"])
    print(random_question["options"])


test(driving_test_questions)
