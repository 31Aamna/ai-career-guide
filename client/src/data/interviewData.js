export const interviewQuestions = {
  // --- SUB-DOMAINS FOR TECHNICAL ---

  "Web Development": [
    { id: 1, q: "Difference between localStorage and sessionStorage?", options: ["Storage limit", "Data expiration", "Data format", "Access scope"], answer: "Data expiration", explanation: "sessionStorage clears on tab close, localStorage persists." },
    { id: 2, q: "What does box-sizing: border-box do?", options: ["Adds border", "Includes padding/border in width", "Removes margin", "Nothing"], answer: "Includes padding/border in width", explanation: "Padding and border are included in total width." },
    { id: 3, q: "What is the DOM?", options: ["Database", "Programming API", "Browser storage", "Server"], answer: "Programming API", explanation: "DOM represents the page so scripts can modify it." },
    { id: 4, q: "Purpose of HTML semantic tags?", options: ["Styling", "SEO & accessibility", "Speed", "Animations"], answer: "SEO & accessibility", explanation: "They describe meaning and structure." },
    { id: 5, q: "What is event bubbling?", options: ["Event stops", "Event moves upward", "Event removed", "Event delayed"], answer: "Event moves upward", explanation: "Event propagates from child to parent." },
    { id: 6, q: "What is React?", options: ["Framework", "Library", "Database", "Language"], answer: "Library", explanation: "React is a JavaScript UI library." },
    { id: 7, q: "What does useState do?", options: ["Routing", "State management", "API calls", "Styling"], answer: "State management", explanation: "Manages component state." },
    { id: 8, q: "What is responsive design?", options: ["Fast loading", "Adaptive layouts", "SEO", "Security"], answer: "Adaptive layouts", explanation: "Design adapts to screen size." },
    { id: 9, q: "What is CORS?", options: ["Security policy", "Database", "Protocol", "Framework"], answer: "Security policy", explanation: "Controls cross-origin requests." },
    { id: 10, q: "Purpose of CDN?", options: ["Storage", "Faster delivery", "Security", "Testing"], answer: "Faster delivery", explanation: "Serves assets from nearby locations." }
  ],

  "Mobile & Full-Stack": [
    { id: 1, q: "What is responsive design?", options: ["Adaptive UI", "Server only", "Database procedure", "None"], answer: "Adaptive UI", explanation: "App adapts to screen sizes." },
    { id: 2, q: "Difference between Android and iOS dev?", options: ["Java vs Swift", "Cloud only", "DB only", "None"], answer: "Java vs Swift", explanation: "Different languages/platforms." },
    { id: 3, q: "What is REST API?", options: ["Encryption", "Architectural style", "UI tool", "None"], answer: "Architectural style", explanation: "Standard web service interface." },
    { id: 4, q: "What is async/await?", options: ["Threading", "Async code handling", "Encryption", "None"], answer: "Async code handling", explanation: "Manages asynchronous tasks." },
    { id: 5, q: "What is API versioning?", options: ["UI versioning", "Support multiple API versions", "DB only", "None"], answer: "Support multiple API versions", explanation: "Maintains backward compatibility." },
    { id: 6, q: "What is push notification?", options: ["Polling", "Server push", "DB update", "None"], answer: "Server push", explanation: "Server sends messages to client." },
    { id: 7, q: "What is Cross-Platform?", options: ["Web only", "Multi OS support", "DB tool", "None"], answer: "Multi OS support", explanation: "Runs on Android & iOS." },
    { id: 8, q: "What is MVC?", options: ["Design pattern", "Database", "Network", "None"], answer: "Design pattern", explanation: "Separates UI, logic, data." },
    { id: 9, q: "What is caching in mobile?", options: ["Store data locally", "Encrypt", "Deploy", "None"], answer: "Store data locally", explanation: "Speeds up data access." },
    { id: 10, q: "What is state management?", options: ["UI only", "Manage data state", "Deploy", "None"], answer: "Manage data state", explanation: "Tracks app state changes." }
  ],

  "Backend Development": [
    { id: 1, q: "Purpose of middleware in Express?", options: ["Database", "Request processing", "Styling", "Testing"], answer: "Request processing", explanation: "Middleware modifies request/response." },
    { id: 2, q: "What is REST?", options: ["Protocol", "Architecture style", "Framework", "Language"], answer: "Architecture style", explanation: "REST defines API constraints." },
    { id: 3, q: "What does HTTP status 404 mean?", options: ["Success", "Server error", "Not found", "Unauthorized"], answer: "Not found", explanation: "Resource could not be located." },
    { id: 4, q: "What is JWT used for?", options: ["Styling", "Authentication", "Database", "Caching"], answer: "Authentication", explanation: "JWT securely transmits claims." },
    { id: 5, q: "What is MVC?", options: ["Database", "Design pattern", "API", "Library"], answer: "Design pattern", explanation: "Separates concerns." },
    { id: 6, q: "What is API rate limiting?", options: ["Security", "Traffic control", "Testing", "Caching"], answer: "Traffic control", explanation: "Limits number of requests." },
    { id: 7, q: "What is Node.js?", options: ["Browser", "Runtime", "Framework", "Database"], answer: "Runtime", explanation: "Executes JS on server." },
    { id: 8, q: "What is async/await?", options: ["Threading", "Asynchronous handling", "Loop", "API"], answer: "Asynchronous handling", explanation: "Simplifies async code." },
    { id: 9, q: "What is load balancing?", options: ["Caching", "Traffic distribution", "Security", "Storage"], answer: "Traffic distribution", explanation: "Distributes requests across servers." },
    { id: 10, q: "What is logging?", options: ["Debugging", "Monitoring", "Both", "None"], answer: "Both", explanation: "Helps track application behavior." }
  ],

  "Databases": [
    { id: 1, q: "ACID stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Data", "None", "All"], answer: "Atomicity, Consistency, Isolation, Durability", explanation: "Ensures reliable transactions." },
    { id: 2, q: "What is a primary key?", options: ["Unique identifier", "Foreign key", "Index", "Constraint"], answer: "Unique identifier", explanation: "Uniquely identifies records." },
    { id: 3, q: "What is normalization?", options: ["Backup", "Reduce redundancy", "Indexing", "Security"], answer: "Reduce redundancy", explanation: "Improves data integrity." },
    { id: 4, q: "SQL vs NoSQL?", options: ["Structured vs Unstructured", "Slow vs Fast", "Secure vs Insecure", "None"], answer: "Structured vs Unstructured", explanation: "Different data models." },
    { id: 5, q: "What is indexing?", options: ["Faster queries", "Security", "Backup", "Replication"], answer: "Faster queries", explanation: "Improves lookup speed." },
    { id: 6, q: "What is a foreign key?", options: ["Unique key", "Reference key", "Index", "None"], answer: "Reference key", explanation: "Links tables." },
    { id: 7, q: "What is sharding?", options: ["Replication", "Partitioning", "Backup", "Caching"], answer: "Partitioning", explanation: "Splits data horizontally." },
    { id: 8, q: "What is replication?", options: ["Copy data", "Delete data", "Index data", "Encrypt data"], answer: "Copy data", explanation: "Improves availability." },
    { id: 9, q: "What is a transaction?", options: ["Single query", "Unit of work", "Backup", "Index"], answer: "Unit of work", explanation: "Executed as a whole." },
    { id: 10, q: "What is deadlock?", options: ["Infinite loop", "Resource conflict", "Crash", "Timeout"], answer: "Resource conflict", explanation: "Processes wait indefinitely." }
  ],

  "Cloud & DevOps": [
    { id: 1, q: "What is cloud computing?", options: ["Local storage", "On-demand resources", "Manual servers", "Offline computing"], answer: "On-demand resources", explanation: "Resources delivered over internet." },
    { id: 2, q: "IaaS stands for?", options: ["Infrastructure as a Service", "Internet as a Service", "Instance as a Service", "None"], answer: "Infrastructure as a Service", explanation: "Provides virtualized hardware." },
    { id: 3, q: "What is scalability?", options: ["Security", "Handle growth", "Cost saving", "Backup"], answer: "Handle growth", explanation: "Adjusts resources dynamically." },
    { id: 4, q: "What is AWS EC2?", options: ["Storage", "Compute service", "Database", "Networking"], answer: "Compute service", explanation: "Virtual servers in cloud." },
    { id: 5, q: "What is serverless?", options: ["No backend", "Managed infrastructure", "Offline", "Free servers"], answer: "Managed infrastructure", explanation: "No server management needed." },
    { id: 6, q: "What is cloud availability?", options: ["Speed", "Uptime", "Cost", "Storage"], answer: "Uptime", explanation: "Service accessibility." },
    { id: 7, q: "Public cloud example?", options: ["AWS", "LAN", "Private DC", "Localhost"], answer: "AWS", explanation: "Shared cloud services." },
    { id: 8, q: "What is load autoscaling?", options: ["Manual scaling", "Automatic scaling", "Testing", "Backup"], answer: "Automatic scaling", explanation: "Adjusts resources automatically." },
    { id: 9, q: "Cloud region?", options: ["Country", "Data center area", "Server", "Zone"], answer: "Data center area", explanation: "Geographic location." },
    { id: 10, q: "Cloud benefit?", options: ["High cost", "Flexibility", "Low speed", "Manual setup"], answer: "Flexibility", explanation: "Easy resource management." }
  ],

  "System Design": [
    { id: 1, q: "What is system design?", options: ["Coding", "Architecture planning", "Testing", "Deployment"], answer: "Architecture planning", explanation: "Defines structure of systems." },
    { id: 2, q: "What is scalability?", options: ["Security", "Growth handling", "Testing", "Backup"], answer: "Growth handling", explanation: "Handles increased load." },
    { id: 3, q: "Horizontal scaling?", options: ["Add servers", "Upgrade server", "Reduce load", "None"], answer: "Add servers", explanation: "Scale out approach." },
    { id: 4, q: "Vertical scaling?", options: ["Add servers", "Upgrade hardware", "Cache data", "None"], answer: "Upgrade hardware", explanation: "Scale up approach." },
    { id: 5, q: "What is caching?", options: ["Storage", "Temporary data", "Security", "Backup"], answer: "Temporary data", explanation: "Improves speed." },
    { id: 6, q: "What is latency?", options: ["Delay", "Bandwidth", "Storage", "CPU"], answer: "Delay", explanation: "Time taken for response." },
    { id: 7, q: "What is throughput?", options: ["Speed", "Requests handled", "Memory", "Delay"], answer: "Requests handled", explanation: "System capacity." },
    { id: 8, q: "What is fault tolerance?", options: ["Error handling", "No failures", "Testing", "Backup"], answer: "Error handling", explanation: "Continues despite failures." },
    { id: 9, q: "What is microservices?", options: ["Monolith", "Small services", "Database", "API"], answer: "Small services", explanation: "Independent deployable units." },
    { id: 10, q: "CAP theorem?", options: ["Consistency, Availability, Partition", "Cost, Access, Performance", "None", "All"], answer: "Consistency, Availability, Partition", explanation: "Trade-offs in distributed systems." }
  ],

  "Testing": [
    { id: 1, q: "What is software testing?", options: ["Coding", "Finding bugs", "Deployment", "Design"], answer: "Finding bugs", explanation: "Ensures quality." },
    { id: 2, q: "Unit testing?", options: ["Whole system", "Small components", "UI testing", "Load testing"], answer: "Small components", explanation: "Tests individual units." },
    { id: 3, q: "Integration testing?", options: ["UI", "Module interaction", "Load", "Security"], answer: "Module interaction", explanation: "Tests combined units." },
    { id: 4, q: "Manual testing?", options: ["Automated", "Human testing", "AI", "None"], answer: "Human testing", explanation: "Done without scripts." },
    { id: 5, q: "Automation testing?", options: ["Manual", "Scripts", "AI only", "None"], answer: "Scripts", explanation: "Uses tools and code." },
    { id: 6, q: "Regression testing?", options: ["New features", "Bug recheck", "Performance", "UI"], answer: "Bug recheck", explanation: "Ensures fixes didn’t break features." },
    { id: 7, q: "Black box testing?", options: ["Code based", "No code knowledge", "Unit", "White box"], answer: "No code knowledge", explanation: "Focuses on functionality." },
    { id: 8, q: "White box testing?", options: ["No code", "Code aware", "UI", "Manual"], answer: "Code aware", explanation: "Tests internal logic." },
    { id: 9, q: "Test case?", options: ["Bug", "Scenario", "Tool", "Script"], answer: "Scenario", explanation: "Defines test steps." },
    { id: 10, q: "QA role?", options: ["Develop", "Ensure quality", "Deploy", "Design"], answer: "Ensure quality", explanation: "Maintains product standards." }
  ],

  "AI & ML": [
    { id: 1, q: "What is supervised learning?", options: ["Unlabeled data", "Labeled data", "No data", "All"], answer: "Labeled data", explanation: "Model learns from labeled examples." },
    { id: 2, q: "What is a neural network?", options: ["Database", "Algorithm", "Distributed apps", "Model inspired by brain"], answer: "Model inspired by brain", explanation: "Neural networks mimic brain layers." },
    { id: 3, q: "What is overfitting?", options: ["Good fit", "Model too complex", "No training", "None"], answer: "Model too complex", explanation: "Overfitting fits noise, not patterns." },
    { id: 4, q: "What is a confusion matrix?", options: ["Chart", "Evaluation table", "UI tool", "Encryption"], answer: "Evaluation table", explanation: "Shows prediction vs actual outcomes." },
    { id: 5, q: "Purpose of validation set?", options: ["Train model", "Tune hyperparameters", "Deploy model", "None"], answer: "Tune hyperparameters", explanation: "Helps generalize before test set." },
    { id: 6, q: "What is gradient descent?", options: ["Search algorithm", "Optimization method", "Sorting", "Encryption"], answer: "Optimization method", explanation: "Minimizes loss function." },
    { id: 7, q: "What is feature scaling?", options: ["No change", "Normalization", "Deploying", "Debugging"], answer: "Normalization", explanation: "Scales features for better training." },
    { id: 8, q: "What is unsupervised learning?", options: ["No labels", "Labeled data", "Encryption", "Monitoring"], answer: "No labels", explanation: "Learns patterns without labels." },
    { id: 9, q: "What is clustering?", options: ["Supervised", "Group similar data", "Sorting", "None"], answer: "Group similar data", explanation: "Unsupervised grouping technique." },
    { id: 10, q: "What is bias-variance tradeoff?", options: ["Bias or variance", "Optimization", "Networking", "None"], answer: "Bias or variance", explanation: "Balance between under/overfitting." }
  ],



  // --- MAIN CATEGORIES ---

  "Behavioral": [
    { id: 1, q: "Tell me about a time you failed.", options: ["Blame others", "Describe failure & learning", "Never failed", "Skip"], answer: "Describe failure & learning", explanation: "Shows growth mindset." },
    { id: 2, q: "Biggest strength?", options: ["Arrogance", "Relevant skill", "Nothing", "Avoid answer"], answer: "Relevant skill", explanation: "Align with role." },
    { id: 3, q: "Biggest weakness?", options: ["No weakness", "Honest but improving", "Critical flaw", "Avoid"], answer: "Honest but improving", explanation: "Shows self-awareness." },
    { id: 4, q: "How handle pressure?", options: ["Panic", "Stay calm", "Avoid work", "Quit"], answer: "Stay calm", explanation: "Employers value resilience." },
    { id: 5, q: "Team conflict?", options: ["Ignore", "Communicate", "Fight", "Complain"], answer: "Communicate", explanation: "Shows collaboration." },
    { id: 6, q: "Motivation at work?", options: ["Money only", "Growth & impact", "Fear", "None"], answer: "Growth & impact", explanation: "Positive motivation." },
    { id: 7, q: "Handle feedback?", options: ["Defensive", "Accept & improve", "Ignore", "Argue"], answer: "Accept & improve", explanation: "Shows maturity." },
    { id: 8, q: "Leadership example?", options: ["Command", "Support team", "Avoid", "Control"], answer: "Support team", explanation: "Modern leadership." },
    { id: 9, q: "Work ethic?", options: ["Minimal", "Consistent", "Overwork", "None"], answer: "Consistent", explanation: "Sustainable productivity." },
    { id: 10, q: "Adaptability?", options: ["Resist change", "Embrace change", "Ignore", "Fear"], answer: "Embrace change", explanation: "Key workplace skill." }
  ],

  "HR": [
    { id: 1, q: "Why do you want to join us?", options: ["Money", "Culture & mission", "Location", "No choice"], answer: "Culture & mission", explanation: "Shows alignment with company values." },
    { id: 2, q: "Where do you see yourself in 5 years?", options: ["No idea", "Growing here", "Different field", "Avoid"], answer: "Growing here", explanation: "Shows commitment and long-term planning." },
    { id: 3, q: "Expected salary?", options: ["Too high", "Market aligned", "Too low", "Avoid"], answer: "Market aligned", explanation: "Shows you know your market value." },
    { id: 4, q: "Why should we hire you?", options: ["Desperation", "Skills & fit", "Luck", "Avoid"], answer: "Skills & fit", explanation: "Highlight your unique value proposition." },
    { id: 5, q: "Notice period?", options: ["Long", "Negotiable", "Immediate", "Unknown"], answer: "Negotiable", explanation: "Flexibility helps with onboarding schedules." },
    { id: 6, q: "Are you willing to relocate?", options: ["No", "If required", "Never", "Avoid"], answer: "If required", explanation: "Demonstrates flexibility for company needs." },
    { id: 7, q: "What is your ideal work-life balance?", options: ["No work", "Sustainable productivity", "24/7 work", "None"], answer: "Sustainable productivity", explanation: "Shows you are a long-term, reliable asset." },
    { id: 8, q: "How do you handle workplace stress?", options: ["Panic", "Prioritization & Exercise", "Ignore it", "Quit"], answer: "Prioritization & Exercise", explanation: "Shows healthy coping mechanisms." },
    { id: 9, q: "Why are you leaving your current role?", options: ["Hated boss", "Seeking growth", "Got fired", "No reason"], answer: "Seeking growth", explanation: "Positive framing is always better than negativity." },
    { id: 10, q: "Do you have any questions for us?", options: ["No", "Role & Team culture", "Salary only", "What time is lunch?"], answer: "Role & Team culture", explanation: "Shows genuine interest in the position." }
  ],

  // "Arrays & Storage": [
  //   { 
  //     id: 1, 
  //     q: "A robot starts at Index 0 of a 5-slot array. It moves +2 slots, then -1 slot. Which index is it at?", 
  //     options: ["Index 0", "Index 1", "Index 2", "Index 3"], 
  //     answer: "Index 1", 
  //     explanation: "Starting at 0, +2 takes you to index 2. Moving back -1 lands you on index 1." 
  //   },
  //   { 
  //     id: 2, 
  //     q: "If you have an array [10, 20, 30] and you swap the values at Index 0 and Index 2, what is the value at Index 0 now?", 
  //     options: ["10", "20", "30", "0"], 
  //     answer: "30", 
  //     explanation: "Swapping means they trade places. 30 moves from the end to the front." 
  //   }
  // ],

  // "Stacks & Queues": [
  //   { 
  //     id: 1, 
  //     q: "You PUSH 'Red Plate', then PUSH 'Blue Plate' onto a Stack. If you perform one POP, which plate is removed?", 
  //     options: ["Red Plate", "Blue Plate", "Both", "None"], 
  //     answer: "Blue Plate", 
  //     explanation: "Stacks are Last-In, First-Out (LIFO). The last plate added is the first one off." 
  //   },
  //   { 
  //     id: 2, 
  //     q: "In a Queue (Line), who gets served first?", 
  //     options: ["The person who just arrived", "The person at the front", "The person in the middle", "Randomly"], 
  //     answer: "The person at the front", 
  //     explanation: "Queues are First-In, First-Out (FIFO), just like a real-life grocery line." 
  //   }
  // ],

  // "Linked Lists": [
  //   { 
  //     id: 1, 
  //     q: "In a Linked List, if Node A points to Node B, and you want to remove Node B, where should Node A point?", 
  //     options: ["Nowhere", "Back to itself", "To Node C (the one after B)", "To the start"], 
  //     answer: "To Node C (the one after B)", 
  //     explanation: "To skip a link in the chain, you connect the previous node directly to the next one." 
  //   }
  // ],

  // "Searching & Sorting": [
  //   { 
  //     id: 1, 
  //     q: "You are looking for 'Gold' in 10 closed boxes using Linear Search. What is the 'Worst Case' number of boxes you must open?", 
  //     options: ["1 box", "5 boxes", "10 boxes", "0 boxes"], 
  //     answer: "10 boxes", 
  //     explanation: "In the worst case, the item you want is in the very last box you check." 
  //   }
  // ],

  // "Arrays & Storage": [
  //   { id: 1, q: "Given array [10, 20, 30, 40, 50], you swap Index 1 and Index 4, then delete the element at Index 0. What is the final array?", answer: "[50, 30, 40, 20]", explanation: "Swap 20 and 50 -> [10, 50, 30, 40, 20]. Delete Index 0 (10) -> [50, 30, 40, 20]." },
  //   { id: 2, q: "A 2D array (Matrix) of 3x3 is stored in Row-Major order. If the base address is 1000 and each int is 4 bytes, what is the address of element at (1, 2)?", answer: "1020", explanation: "Formula: Base + (RowIndex * TotalCols + ColIndex) * Size. 1000 + (1 * 3 + 2) * 4 = 1000 + 20 = 1020." },
  //   { id: 3, q: "You have an array of size 10 but only 3 elements are filled. What is the 'Space Complexity' of storing this array?", answer: "O(N) where N is the capacity (10)", explanation: "Static arrays allocate fixed memory regardless of how many slots are actually used." },
  //   { id: 4, q: "In a dynamic array (like ArrayList), what happens to the time complexity of an 'append' operation when the underlying array is full?", answer: "O(N) for that specific operation, but O(1) Amortized.", explanation: "The system must allocate a new larger array and copy all existing elements over." },
  //   { id: 5, q: "Find the missing number in an array containing 1 to 5: [1, 2, 4, 5].", answer: "3", explanation: "Sum of 1 to 5 is 15. Sum of given is 12. 15 - 12 = 3." },
  //   { id: 6, q: "How many swaps are needed to reverse an array of 6 elements?", answer: "3", explanation: "You swap Index 0-5, 1-4, and 2-3. The middle is reached in N/2 steps." },
  //   { id: 7, q: "What is the result of shifting [A, B, C] left by 1 position (Circular Shift)?", answer: "[B, C, A]", explanation: "The first element moves to the end, and others slide left." },
  //   { id: 8, q: "In a Sparse Matrix, most elements are zero. What is the most memory-efficient way to store it?", answer: "Triplets or Compressed Sparse Row (CSR)", explanation: "Store only the Row, Column, and Value of non-zero elements." },
  //   { id: 9, q: "If an array is sorted, what is the fastest way to check if a specific number exists?", answer: "Binary Search", explanation: "Binary search cuts the search space in half each step, resulting in O(log N)." },
  //   { id: 10, q: "Given [7, 1, 5, 3, 6, 4], if these are stock prices, what is the max profit you can make from one transaction?", answer: "5", explanation: "Buy at 1 (Index 1) and sell at 6 (Index 4). 6 - 1 = 5." }
  // ],

  // "Stacks & Queues": [
  //   { id: 1, q: "Sequence: PUSH(5), PUSH(10), POP(), PUSH(15). What is the top of the stack?", answer: "15", explanation: "Stack: [5] -> [5, 10] -> [5] -> [5, 15]. Top is 15." },
  //   { id: 2, q: "A Queue follows FIFO. If you ENQUEUE(A, B, C) and then DEQUEUE(), what is left?", answer: "[B, C]", explanation: "A was first in, so A is first out." },
  //   { id: 3, q: "Which data structure is used by the browser's Back Button?", answer: "Stack", explanation: "It uses LIFO logic to return to the most recently visited page." },
  //   { id: 4, q: "Which data structure is used to handle Print Jobs in a shared office printer?", answer: "Queue", explanation: "Jobs are processed in the order they arrive (First-In, First-Out)." },
  //   { id: 5, q: "Can you implement a Queue using two Stacks? (Yes/No)", answer: "Yes", explanation: "Use one stack for enqueue and another to reverse elements for dequeue." },
  //   { id: 6, q: "In a Circular Queue of size 5, if Front is at 4 and you add an element, where is the new Rear?", answer: "0", explanation: "In a circular queue, the index wraps around using modulo: (4 + 1) % 5 = 0." },
  //   { id: 7, q: "What is 'Stack Overflow'?", answer: "Memory exhaustion from too many PUSH operations.", explanation: "Occurs when the stack exceeds its allocated memory, often due to infinite recursion." },
  //   { id: 8, q: "What is a Deque?", answer: "Double-Ended Queue", explanation: "A queue where you can add or remove from both the front and the back." },
  //   { id: 9, q: "Which structure is used for Breadth-First Search (BFS)?", answer: "Queue", explanation: "BFS explores neighbors level by level, requiring FIFO storage." },
  //   { id: 10, q: "Which structure is used for Depth-First Search (DFS)?", answer: "Stack", explanation: "DFS goes deep into a branch, requiring LIFO to backtrack." }
  // ],

  // "Linked Lists": [
  //   { id: 1, q: "In a Doubly Linked List, what two things does a 'Node' store besides data?", answer: "Next pointer and Previous pointer", explanation: "This allows traversal in both forward and backward directions." },
  //   { id: 2, q: "What is the time complexity to find the middle element in a Singly Linked List of size N?", answer: "O(N)", explanation: "You must traverse at least half the list; there is no index-based access." },
  //   { id: 3, q: "How do you detect a cycle (loop) in a Linked List?", answer: "Floyd's Cycle-Finding Algorithm (Two Pointers)", explanation: "Use a 'slow' and 'fast' pointer; if they meet, there is a cycle." },
  //   { id: 4, q: "What is the 'Head' of a Linked List?", answer: "A pointer to the first node.", explanation: "If the head is null, the list is empty." },
  //   { id: 5, q: "What is a Circular Linked List?", answer: "The last node points back to the first node.", explanation: "There is no 'Null' ending in a circular list." },
  //   { id: 6, q: "Time complexity to insert a node at the beginning of a Linked List?", answer: "O(1)", explanation: "You only update the new node's next pointer and the head pointer." },
  //   { id: 7, q: "Why is a Linked List preferred over an Array for frequent insertions?", answer: "No shifting required.", explanation: "In arrays, inserting at the start requires shifting all other elements (O(N))." },
  //   { id: 8, q: "What happens if you lose the pointer to the 'Head'?", answer: "Memory Leak", explanation: "The data exists in memory, but you have no way to access or delete it." },
  //   { id: 9, q: "What is a 'Dummy' node?", answer: "A placeholder node at the start.", explanation: "Used to simplify edge cases like inserting into an empty list." },
  //   { id: 10, q: "In a Doubly Linked List, if you delete the Tail, what happens to the 'Next' pointer of the new Tail?", answer: "It becomes Null.", explanation: "The second-to-last node becomes the new tail and must point to nothing." }
  // ],

  // "Searching & Sorting": [
  //   { id: 1, q: "What is the worst-case time complexity of QuickSort?", answer: "O(N²)", explanation: "Occurs when the pivot is consistently the smallest or largest element (e.g., sorted array)." },
  //   { id: 2, q: "Which sorting algorithm is 'Stable' and has a guaranteed O(N log N) complexity?", answer: "Merge Sort", explanation: "Merge Sort consistently divides the list and maintains the relative order of equal elements." },
  //   { id: 3, q: "Binary Search requires the data to be in what state?", answer: "Sorted", explanation: "Binary search relies on the ability to eliminate half the data based on comparison." },
  //   { id: 4, q: "What is a 'Stable' sort?", answer: "Preserves the relative order of equal elements.", explanation: "If two items have the same value, their original order remains unchanged after sorting." },
  //   { id: 5, q: "Which algorithm is best for a nearly sorted array?", answer: "Insertion Sort", explanation: "It performs in O(N) when only a few elements are out of place." },
  //   { id: 6, q: "Average time complexity of Linear Search?", answer: "O(N)", explanation: "In the average case, you check half the elements." },
  //   { id: 7, q: "How many comparisons does Binary Search take for an array of 1024 elements?", answer: "10", explanation: "log2(1024) = 10." },
  //   { id: 8, q: "Which sorting algorithm uses a 'Gap' and is an improvement over Insertion Sort?", answer: "Shell Sort", explanation: "It compares elements far apart to reduce the total number of swaps." },
  //   { id: 9, q: "What is the Space Complexity of Merge Sort?", answer: "O(N)", explanation: "Merge Sort requires extra space to store the temporary merged subarrays." },
  //   { id: 10, q: "Which algorithm is used in JavaScript's Array.sort() for most browsers?", answer: "Timsort", explanation: "A hybrid of Merge Sort and Insertion Sort designed for real-world data." }
  // ],

  // "Company Specific": [
  //   { id: 1, q: "Amazon often asks: Find the 'Kth' largest element in an unsorted array. What is the most efficient structure for this?", answer: "Min-Heap", explanation: "Keep a heap of size K. After processing the array, the root is the Kth largest element." },
  //   { id: 2, q: "Google Question: Given a string, find the first non-repeating character. Best approach?", answer: "Hash Map (Frequency Map)", explanation: "Count occurrences of each char in one pass, then find the first char with count 1." },
  //   { id: 3, q: "Microsoft Question: How do you reverse words in a string without using extra space?", answer: "Reverse each word, then reverse the entire string.", explanation: "This in-place swap logic avoids allocating a new string/array." },
  //   { id: 4, q: "Facebook/Meta: Find the 'Low Link' of a node in a graph. What algorithm are you using?", answer: "Tarjan's Algorithm", explanation: "Used to find Strongly Connected Components (SCCs) in a directed graph." },
  //   { id: 5, q: "TCS/Infosys: What is the difference between a primary key and a unique key?", answer: "Primary key cannot be Null; Unique key can have one Null.", explanation: "Both ensure uniqueness, but a table can have only one Primary Key." },
  //   { id: 6, q: "Uber: Which data structure is best for finding nearby drivers (Geo-spatial data)?", answer: "Quadtree or R-Tree", explanation: "These trees index 2D space for efficient range and proximity queries." },
  //   { id: 7, q: "Netflix: How is a 'User Watch History' likely stored for fast retrieval?", answer: "NoSQL / Cassandra (Wide Column Store)", explanation: "Optimized for high-volume writes and chronological retrieval." },
  //   { id: 8, q: "LinkedIn: How are 'Degrees of Connection' calculated?", answer: "Breadth-First Search (BFS)", explanation: "Each level of BFS represents one 'degree' of connection from the source user." },
  //   { id: 9, q: "Apple: What is the time complexity of searching an element in a Balanced Binary Search Tree?", answer: "O(log N)", explanation: "The height of a balanced tree is logarithmic relative to the number of nodes." },
  //   { id: 10, q: "Walmart: In an LRU Cache, what happens when the cache is full?", answer: "The Least Recently Used item is evicted.", explanation: "Usually implemented with a Doubly Linked List + Hash Map for O(1) eviction." }
  // ]

  "Arrays & Storage": [
    { id: 1, q: "You have an array [A, B, C, D, E]. A robot starts at Index 0, moves +3 slots, then -1 slot. What is the value at its final position?", hint: "Track the index: 0 + 3 - 1.", answer: "C", explanation: "Start: Index 0 (A). Move +3: Index 3 (D). Move -1: Index 2. The value at Index 2 is 'C'." },
    { id: 2, q: "Given [10, 20, 30, 40, 50], you swap Index 1 and Index 4, then delete Index 0. What is the final array?", hint: "Swapping 20 and 50 is the first step.", answer: "[50, 30, 40, 20]", explanation: "Swap 20 and 50 -> [10, 50, 30, 40, 20]. Delete Index 0 (10) -> [50, 30, 40, 20]." },
    { id: 3, q: "A 3x3 Matrix is stored in Row-Major order. Base address 1000, int size 4 bytes. Address of (1, 2)?", hint: "Formula: Base + (RowIndex * TotalCols + ColIndex) * Size.", answer: "1020", explanation: "1000 + (1 * 3 + 2) * 4 = 1000 + 20 = 1020." },
    { id: 4, q: "What is the Space Complexity of an array of size 100 with only 5 elements filled?", hint: "Does memory allocation change based on content for static arrays?", answer: "O(N)", explanation: "Static arrays allocate fixed memory at the start regardless of usage." },
    { id: 5, q: "Find the missing number in [1, 2, 4, 5] (range 1-5).", hint: "Total sum of 1-5 minus current sum.", answer: "3", explanation: "Expected sum (15) - Actual sum (12) = 3." },
    { id: 6, q: "How many swaps to reverse an array of size 6?", hint: "You only need to swap until you reach the middle.", answer: "3", explanation: "Swaps: (0,5), (1,4), (2,3). N/2 swaps total." },
    { id: 7, q: "Result of a circular left shift on [A, B, C]?", hint: "The front element moves to the very back.", answer: "[B, C, A]", explanation: "All elements move left; the head wraps to the tail." },
    { id: 8, q: "Best way to store a Sparse Matrix (mostly zeros)?", hint: "You only want to save non-zero data points.", answer: "Triplet Representation", explanation: "Store Row, Column, and Value only to save space." },
    { id: 9, q: "Fastest search in a sorted array?", hint: "Think of a 'divide and conquer' search.", answer: "Binary Search", explanation: "Binary search provides O(log N) complexity on sorted data." },
    { id: 10, q: "Stock prices [7, 1, 5, 3, 6, 4]. Max profit with one transaction?", hint: "Buy low, sell high later.", answer: "5", explanation: "Buy at 1, sell at 6. 6 - 1 = 5." }
  ],

  "Stacks & Queues": [
    { id: 1, q: "Sequence: PUSH(5), PUSH(10), POP(), PUSH(15). What's on top?", hint: "POP removes the most recent item.", answer: "15", explanation: "5 in, 10 in, 10 out, 15 in. Final: [5, 15]." },
    { id: 2, q: "Queue ENQUEUE(A, B, C), then DEQUEUE(). What remains?", hint: "Queues are First-In, First-Out.", answer: "[B, C]", explanation: "A was first, so it leaves first." },
    { id: 3, q: "Which structure powers the Browser Back button?", hint: "You return to the 'Last' page visited.", answer: "Stack", explanation: "LIFO (Last-In, First-Out) is perfect for history." },
    { id: 4, q: "Which structure handles a Printer Spooler?", hint: "The first document sent should print first.", answer: "Queue", explanation: "FIFO ensures fair ordering of print jobs." },
    { id: 5, q: "Can you make a Queue using two Stacks?", hint: "Think about reversing order by moving items between stacks.", answer: "Yes", explanation: "Transferring between stacks reverses the LIFO order to FIFO." },
    { id: 6, q: "Circular Queue size 5, Front at 4. Next element index?", hint: "Indices wrap around to 0.", answer: "0", explanation: "(4 + 1) % 5 = 0." },
    { id: 7, q: "Define Stack Overflow.", hint: "What happens when you keep PUSHing into a full memory block?", answer: "Memory exhaustion.", explanation: "Pushing into a full stack causes a runtime error." },
    { id: 8, q: "What is a Deque?", hint: "It's a double-ended structure.", answer: "Double-Ended Queue", explanation: "Allows insertion/deletion from both ends." },
    { id: 9, q: "Data structure for Breadth-First Search (BFS)?", hint: "You explore level-by-level.", answer: "Queue", explanation: "FIFO is required to track nodes at the current depth." },
    { id: 10, q: "Data structure for Depth-First Search (DFS)?", hint: "You go deep and then backtrack.", answer: "Stack", explanation: "LIFO allows the algorithm to return to previous branch points." }
  ],

  "Linked Lists": [
    { id: 1, q: "Delete Node B between A and C in a Singly Linked List.", hint: "How do you bypass Node B?", answer: "Point A to C", explanation: "Updating Node A's 'next' pointer to Node C removes B." },
    { id: 2, q: "Time complexity to find middle element?", hint: "You have to walk through the nodes one by one.", answer: "O(N)", explanation: "You must traverse the list as there is no index access." },
    { id: 3, q: "How to detect a cycle in a list?", hint: "Think of two runners at different speeds.", answer: "Floyd's Cycle Algorithm", explanation: "A fast and slow pointer will eventually meet if a cycle exists." },
    { id: 4, q: "What does the 'Head' store?", hint: "It is the entry point.", answer: "Address of first node", explanation: "Head points to the starting memory location of the list." },
    { id: 5, q: "What is a Circular Linked List?", hint: "Where does the last node point?", answer: "Tail points to Head", explanation: "The 'next' of the last node is the first node." },
    { id: 6, q: "Complexity of insertion at the very beginning?", hint: "Do you need to move other nodes?", answer: "O(1)", explanation: "Just update the Head pointer; no shifting needed." },
    { id: 7, q: "Linked List vs Array for frequent insertions?", hint: "Think about shifting overhead.", answer: "Linked List", explanation: "Lists don't require shifting elements to make room." },
    { id: 8, q: "What is a Memory Leak in Linked Lists?", hint: "Losing the 'Head' pointer.", answer: "Unreachable nodes", explanation: "If you lose the reference, you can't free the memory." },
    { id: 9, q: "What is a Dummy Node?", hint: "Used at the start of the list.", answer: "Placeholder node", explanation: "Simplifies logic for empty list edge cases." },
    { id: 10, q: "In Doubly Linked List, what's inside a node?", hint: "You can move both ways.", answer: "Data, Next, Prev", explanation: "Two pointers allow bi-directional traversal." }
  ],

  "Searching & Sorting": [
    { id: 1, q: "Worst-case complexity of QuickSort?", hint: "Happens with poor pivot choice.", answer: "O(N²)", explanation: "Occurs when data is already sorted and pivot is at the end." },
    { id: 2, q: "Stable sort with guaranteed O(N log N)?", hint: "Divide and conquer, requires extra space.", answer: "Merge Sort", explanation: "Always breaks down and merges in log time." },
    { id: 3, q: "Binary Search requirement?", hint: "Can you search a random pile efficiently?", answer: "Sorted data", explanation: "Requires order to decide which half to discard." },
    { id: 4, q: "What is a 'Stable' sort?", hint: "Think about the order of duplicate values.", answer: "Order preservation", explanation: "Keeps relative order of items with equal keys." },
    { id: 5, q: "Best sort for nearly sorted array?", hint: "Like sorting cards in your hand.", answer: "Insertion Sort", explanation: "Only takes O(N) when very few items are misplaced." },
    { id: 6, q: "Average Linear Search complexity?", hint: "Searching one by one.", answer: "O(N)", explanation: "Time grows linearly with input size." },
    { id: 7, q: "Binary search steps for 1024 items?", hint: "2 to the power of X = 1024.", answer: "10", explanation: "log2(1024) = 10." },
    { id: 8, q: "Sorting algorithm using 'Gaps'?", hint: "Improvement over Insertion Sort.", answer: "Shell Sort", explanation: "Reduces distance elements must move." },
    { id: 9, q: "Space complexity of Merge Sort?", hint: "It needs a temporary array.", answer: "O(N)", explanation: "Not in-place; requires extra memory for merging." },
    { id: 10, q: "JavaScript Array.sort() base algorithm?", hint: "Hybrid of Merge and Insertion.", answer: "Timsort", explanation: "Designed for high performance on real-world data." }
  ],

  "Company Specific": [
    { id: 1, q: "Amazon: Find Kth largest element.", hint: "You only need to track the top K values.", answer: "Min-Heap", explanation: "Root of heap size K will be the Kth largest." },
    { id: 2, q: "Google: Sort a file larger than RAM.", hint: "Sort in pieces then combine.", answer: "External Merge Sort", explanation: "Standard way to handle massive datasets." },
    { id: 3, q: "Meta: First non-repeating character.", hint: "Map characters to their counts.", answer: "Hash Map", explanation: "One pass for counts, one pass to find the first '1'." },
    { id: 4, q: "Microsoft: Symmetric Binary Tree?", hint: "Mirror image logic.", answer: "Recursion", explanation: "Compare left.left with right.right." },
    { id: 5, q: "Uber: Nearest driver search?", hint: "Spatial indexing.", answer: "Quadtree", explanation: "Divides 2D space into manageable quadrants." },
    { id: 6, q: "Netflix: LRU Cache implementation?", hint: "Fast access + order tracking.", answer: "Hash Map + Doubly Linked List", explanation: "O(1) access and O(1) reordering." },
    { id: 7, q: "Apple: Balanced BST search time?", hint: "Height is kept minimal.", answer: "O(log N)", explanation: "Logarithmic height ensures fast search." },
    { id: 8, q: "TCS: Primary vs Unique Key?", hint: "Can they be empty?", answer: "PK cannot be Null", explanation: "Unique keys allow one Null; PKs do not." },
    { id: 9, q: "LinkedIn: Degrees of connection?", hint: "Explore layer by layer.", answer: "BFS", explanation: "Each layer is a new degree of separation." },
    { id: 10, q: "Walmart: Top K expensive items?", hint: "Maintain a small set of the best items.", answer: "Min-Heap", explanation: "Efficiently keeps only the top K values." }
  ]
};

// Data for the Technical Domains Grid UI
export const technicalDomains = [
  { id: 'Web Development', icon: '🌐', desc: 'HTML, CSS, JS, React' },
  { id: 'Mobile & Full-Stack',icon: '📱',desc: 'UI Design, APIs, App Logic, Data Handling, Android & iOS Basics'},
  { id: 'Backend Development', icon: '🔙', desc: 'Node, Express, Auth' },
  // { id: 'Programming Languages', icon: '💻', desc: 'Python, Java, C++' },
  { id: 'Databases', icon: '🗄️', desc: 'SQL, MongoDB' },
  { id: 'System Design', icon: '🏗️', desc: 'Scalability, Load Balancing' },
  { id: 'Cloud & DevOps', icon: '☁️', desc: 'AWS, CI/CD, Docker' },
  { id: 'Testing', icon: '✅', desc: 'Manual, Automation, Jest' },
  { id: 'AI & ML',icon: '🤖',desc: 'Data, Models, Training, Predictions, Real-world Applications' },
];

export const behavioralDomains = [{ id: 'Behavioral',icon: '🧠',desc: 'Communication, teamwork, adaptability, leadership, work ethics, and professional attitude'}
];

export const hrDomains = [{ id: 'HR', icon: '🤝', desc: 'Company fit, salary negotiation, and career goals.' }];

export const dsaDomainData = [
  { id: 'Arrays & Storage', icon: '📦', desc: 'Indices, Swapping, and Memory Slots' },
  { id: 'Stacks & Queues', icon: '🥞', desc: 'LIFO vs FIFO logic' },
  { id: 'Linked Lists', icon: '🔗', desc: 'Nodes and Connecting Chains' },
  { id: 'Searching & Sorting', icon: '🔍', desc: 'Finding and Organizing data' },
  { id: 'Company Specific', icon: '🔍', desc: 'Company Specific Data' },
];

export const salaryBaseData = {
  "Frontend Developer": { base: 60000, multiplier: 5000 },
  "Backend Developer": { base: 65000, multiplier: 6000 },
  "Full Stack Developer": { base: 70000, multiplier: 7000 },
  "UI/UX Designer": { base: 55000, multiplier: 4500 },
  "DevOps Engineer": { base: 75000, multiplier: 6500 }
};