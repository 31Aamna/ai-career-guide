// import React, { useState } from 'react';
// import axios from 'axios';
// import Card from '../UI/Card';
// import Button from '../UI/Button';

// const CodingPractice = () => {
//   // 1. STATE MANAGEMENT: Track code, AI response, and UI states
//   const [code, setCode] = useState(`function twoSum(nums, target) {\n  const map = new Map();\n  // Logic here...\n}`);
//   const [loading, setLoading] = useState(false);
//   const [evaluation, setEvaluation] = useState(null);

//   // 2. LOGIC: The evaluation handler
//   const handleEvaluate = async () => {
//     setLoading(true);
//     setEvaluation(null); // Reset previous results
//     try {
//       // Endpoint typically hosted on your Node.js/Express server
//       const response = await axios.post('http://localhost:5000/api/evaluate-code', {
//         code,
//         problem: "Two Sum",
//         language: "javascript"
//       });
      
//       setEvaluation(response.data);
//     } catch (error) {
//       console.error("Evaluation failed:", error);
//       alert("Failed to reach AI model. Check if backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
//       {/* HEADER: Kept exactly as your image */}
//       <div className="flex-between mb-20">
//         <h2>Two Sum <span style={{ fontSize: '12px', background: 'var(--green-bg)', color: 'var(--green)', padding: '4px 8px', borderRadius: '4px' }}>EASY</span></h2>
//       </div>

//       <p className="mb-20">Given an array of integers nums and an integer target, return indices of the two numbers.</p>

//       {/* CONTROLS: Submit button now triggers handleEvaluate */}
//       <div className="flex-row gap-10 mb-20">
//         <Button variant="outline">Hint</Button>
//         <Button 
//           onClick={handleEvaluate} 
//           disabled={loading}
//           style={{ background: loading ? '#ccc' : 'var(--primary)' }}
//         >
//           {loading ? "AI is Thinking..." : "Run AI Evaluation"}
//         </Button>
//       </div>

//       {/* CODE EDITOR: Transformed your static div into a functional textarea */}
//       <div style={{ 
//         background: '#1B254B', 
//         color: '#A3AED0', 
//         padding: '25px', 
//         borderRadius: '15px', 
//         fontFamily: 'monospace',
//         boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
//       }}>
//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           spellCheck="false"
//           style={{
//             width: '100%',
//             height: '250px',
//             background: 'transparent',
//             color: '#A3AED0',
//             border: 'none',
//             outline: 'none',
//             fontFamily: 'inherit',
//             fontSize: '14px',
//             lineHeight: '1.6',
//             resize: 'none'
//           }}
//         />
//       </div>

//       {/* AI INSIGHTS SECTION: Deeply formatted feedback */}
//       {evaluation && (
//         <div style={{ 
//           marginTop: '20px', 
//           padding: '20px', 
//           background: '#f8fafc', 
//           borderLeft: '4px solid #3b82f6',
//           borderRadius: '8px' 
//         }}>
//           <h3 style={{ color: '#1e293b', marginBottom: '10px', fontSize: '16px' }}>AI Evaluation Results</h3>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '13px' }}>
//             <div style={{ background: '#fff', padding: '10px', borderRadius: '5px', border: '1px solid #e2e8f0' }}>
//               <strong>Logic:</strong> {evaluation.isCorrect ? "✅ Correct" : "❌ Logic Errors Found"}
//             </div>
//             <div style={{ background: '#fff', padding: '10px', borderRadius: '5px', border: '1px solid #e2e8f0' }}>
//               <strong>Complexity:</strong> {evaluation.complexity}
//             </div>
//           </div>
//           <p style={{ marginTop: '15px', fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
//             {evaluation.feedback}
//           </p>
//         </div>
//       )}

//       {/* FOOTER: Kept exactly as your image */}
//       <div className="flex-between mt-20" style={{ marginTop: '30px' }}>
//         <Button variant="outline">Previous</Button>
//       </div>
//     </Card>
//   );
// };

// export default CodingPractice;


import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const CodingPractice = () => {
  // 1. Centralized Data: 5 interview questions with 5-Language support
  const challengeData = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹"],
      starterCode: {
        python: "def two_sum(nums, target):\n    seen = {} # value -> index\n    # Write logic here\n    pass",
        javascript: "function twoSum(nums, target) {\n    const seen = {};\n    // Write logic here\n}",
        cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write logic here\n    }\n};",
        java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write logic here\n    }\n}",
        csharp: "public class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        // Write logic here\n    }\n}"
      }
    },
    {
      id: 2,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Write a function that reverses a string. The input string is given as an array of characters.",
      example: {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: "The input array is modified in-place."
      },
      constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is printable ASCII."],
      starterCode: {
        python: "def reverseString(s):\n    # Write logic here\n    pass",
        javascript: "var reverseString = function(s) {\n    // Write logic here\n};",
        cpp: "class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Write logic here\n    }\n};",
        java: "class Solution {\n    public void reverseString(char[] s) {\n        // Write logic here\n    }\n}",
        csharp: "public class Solution {\n    public void ReverseString(char[] s) {\n        // Write logic here\n    }\n}"
      }
    },
    {
      id: 3,
      title: "Palindrome Number",
      difficulty: "Easy",
      description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      example: {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and right to left."
      },
      constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
      starterCode: {
        python: "def isPalindrome(x):\n    # Write logic here\n    pass",
        javascript: "function isPalindrome(x) {\n    // Write logic here\n}",
        cpp: "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write logic here\n    }\n};",
        java: "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write logic here\n    }\n}",
        csharp: "public class Solution {\n    public bool IsPalindrome(int x) {\n        // Write logic here\n    }\n}"
      }
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Given a string s containing characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      example: {
        input: 's = "()"',
        output: "true",
        explanation: "The open bracket is closed by the same type of bracket."
      },
      constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only."],
      starterCode: {
        python: "def isValid(s):\n    stack = []\n    # Write logic here\n    pass",
        javascript: "function isValid(s) {\n    const stack = [];\n    // Write logic here\n}",
        cpp: "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write logic here\n    }\n};",
        java: "class Solution {\n    public boolean isValid(String s) {\n        // Write logic here\n    }\n}",
        csharp: "public class Solution {\n    public bool IsValid(string s) {\n        // Write logic here\n    }\n}"
      }
    },
    {
      id: 5,
      title: "Merge Sorted Array",
      difficulty: "Easy",
      description: "Merge two sorted arrays nums1 and nums2 into a single array sorted in non-decreasing order.",
      example: {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "The arrays being merged are [1,2,3] and [2,5,6]."
      },
      constraints: ["nums1.length == m + n", "0 ≤ m, n ≤ 200"],
      starterCode: {
        python: "def merge(nums1, m, nums2, n):\n    # Write logic here\n    pass",
        javascript: "function merge(nums1, m, nums2, n) {\n    // Write logic here\n}",
        cpp: "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write logic here\n    }\n};",
        java: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write logic here\n    }\n}",
        csharp: "public class Solution {\n    public void Merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write logic here\n    }\n}"
      }
    }
  ];

  // 2. States
  const [currentIdx, setCurrentIdx] = useState(0);
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(challengeData[0].starterCode.python);
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentProblem = challengeData[currentIdx];

  // 3. Sync code when language or problem changes
  useEffect(() => {
    setCode(currentProblem.starterCode[language]);
    setEvaluation(null);
    setError("");
  }, [language, currentIdx]);

  // 4. Multi-Language Validation & Submission Logic
  const handleSubmit = () => {
    setError("");
    setLoading(true);

    // Language identification patterns
    const checkPatterns = {
      python: ["def ", "pass", "elif", "print("],
      javascript: ["function", "const ", "let ", "console.log", "var "],
      cpp: ["#include", "std::", "vector<", "cout <<", "public:"],
      java: ["public class", "System.out.print", "static void", "public int"],
      csharp: ["using System", "Console.WriteLine", "namespace", "public override"]
    };

    let mismatchFound = false;
    let detectedLanguage = "";

    // Check if code contains keywords from any language EXCEPT the selected one
    Object.keys(checkPatterns).forEach(langKey => {
      if (langKey !== language) {
        checkPatterns[langKey].forEach(keyword => {
          if (code.includes(keyword)) {
            mismatchFound = true;
            detectedLanguage = langKey.toUpperCase();
          }
        });
      }
    });

    if (mismatchFound) {
      setError(`Language Mismatch: It looks like you're writing ${detectedLanguage} code in the ${language.toUpperCase()} editor.`);
      setLoading(false);
      return;
    }

    // Simulate AI evaluation
    setTimeout(() => {
      setEvaluation({
        score: 98,
        feedback: `The logic implemented for ${currentProblem.title} in ${language.toUpperCase()} is efficient. Your solution maintains optimal complexity.`
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      
      {/* Header controls */}
      <div className="flex-between mb-20" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {/* <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '14px' }}>
            ← Back to challenges
          </button> */}
          <h2 style={{ margin: '8px 0', fontSize: '26px' }}>{currentProblem.title}</h2>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', background: '#D1FAE5', color: '#065F46', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
            {currentProblem.difficulty.toUpperCase()}
          </span>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
          </select>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Analyzing..." : "Submit Solution"}
          </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '30px', alignItems: 'start' }}>
        
        {/* Left Column: Problem Details & Feedback */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card style={{ padding: '25px', borderRadius: '15px' }}>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{currentProblem.description}</p>
            
            <h4 style={{ margin: '20px 0 10px 0' }}>Constraints:</h4>
            <ul style={{ color: '#718096', fontSize: '14px', paddingLeft: '20px' }}>
              {currentProblem.constraints.map((c, i) => <li key={i}>{c}</li>)}
            </ul>

            <div style={{ marginTop: '25px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Example:</h4>
              <p style={{ fontSize: '13px', margin: '4px 0' }}><strong>Input:</strong> {currentProblem.example.input}</p>
              <p style={{ fontSize: '13px', margin: '4px 0' }}><strong>Output:</strong> {currentProblem.example.output}</p>
              <p style={{ fontSize: '13px', color: '#718096', marginTop: '8px', fontStyle: 'italic' }}>
                Explanation: {currentProblem.example.explanation}
              </p>
            </div>
          </Card>

          {error && (
            <div style={{ color: '#b91c1c', background: '#fef2f2', padding: '12px', borderRadius: '8px', border: '1px solid #f87171', fontSize: '13px' }}>
              <strong>⚠️ {error}</strong>
            </div>
          )}

          {evaluation && !error && (
            <Card style={{ padding: '25px', borderLeft: '5px solid #3b82f6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h4 style={{ margin: 0, color: '#1e40af' }}>AI Evaluation</h4>
                <strong style={{ fontSize: '24px', color: '#3b82f6' }}>{evaluation.score}/100</strong>
              </div>
              <p style={{ fontSize: '14px', color: '#4b5563' }}>{evaluation.feedback}</p>
            </Card>
          )}
        </div>

        {/* Right Column: Code Editor */}
        <div style={{ background: '#0f172a', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ background: '#1e293b', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <span style={{ color: '#94a3b8', fontSize: '11px', fontFamily: 'monospace' }}>
               main.{
                 language === 'python' ? 'py' : 
                 language === 'javascript' ? 'js' : 
                 language === 'cpp' ? 'cpp' : 
                 language === 'java' ? 'java' : 'cs'
               }
            </span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            style={{
              width: '100%',
              height: '550px',
              background: 'transparent',
              color: '#e2e8f0',
              padding: '25px',
              fontFamily: 'monospace',
              fontSize: '14px',
              border: 'none',
              outline: 'none',
              resize: 'none',
              lineHeight: '1.6'
            }}
          />
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex-between mt-20" style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outline" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}>
           Previous Challenge
        </Button>
        <Button variant="outline" onClick={() => setCurrentIdx(Math.min(challengeData.length - 1, currentIdx + 1))} disabled={currentIdx === challengeData.length - 1}>
           Next Challenge
        </Button>
      </div>
    </div>
  );
};

export default CodingPractice;