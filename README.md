# React Hooks ব্যাখ্যা (Bangla)

এই ডকুমেন্টে আমরা **React Hooks** সম্পর্কে আলোচনা করবো, বিশেষ করে তিনটি গুরুত্বপূর্ণ হুক: `useState`, `useEffect`, এবং `useRef`। এছাড়াও `useEffect` দিয়ে API কলের দুটি উদাহরণ থাকবে।

## ১ useState Hook

### **ব্যাখ্যা:**
`useState` হল একটি React Hook যা কম্পোনেন্টের **স্টেট পরিচালনার** জন্য ব্যবহৃত হয়। এটি একটি ভেরিয়েবল এবং একটি সেটার ফাংশন রিটার্ন করে, যা ব্যবহার করে আমরা স্টেট আপডেট করতে পারি।

### **Syntax:**
```tsx
const [state, setState] = useState(initialValue);
```

### **উদাহরণ:** (একটি কাউন্টার কম্পোনেন্ট)
```tsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

---

## ২useEffect Hook

### **ব্যাখ্যা:**
`useEffect` হল একটি React Hook যা **সাইড ইফেক্ট পরিচালনার** জন্য ব্যবহৃত হয়। যেমনঃ API কল, লোকাল স্টোরেজ আপডেট, অথবা DOM পরিবর্তন।

### **Syntax:**
```tsx
useEffect(() => {
  // কোড এখানে লিখুন
  return () => {
    // Cleanup কোড (যদি প্রয়োজন হয়)
  };
}, [dependencies]);
```

### **উদাহরণ ১:** (API থেকে ডাটা লোড করা)
```tsx
import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
```

### **উদাহরণ ২:** (ইন্টারভ্যাল ব্যবহার করে টাইমার চালানো)
```tsx
import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Elapsed Time: {seconds} seconds</p>;
};

export default Timer;
```

---

## ৩useRef Hook

### **ব্যাখ্যা:**
`useRef` হল একটি React Hook যা **DOM reference সংরক্ষণ** করতে এবং এমন ভ্যালু ম্যানেজ করতে ব্যবহৃত হয় যা **রি-রেন্ডার ছাড়াই পরিবর্তন** হতে পারে।

### **Syntax:**
```tsx
const ref = useRef<HTMLElement | null>(null);
```

### **উদাহরণ ১:** (ইনপুট ফিল্ডে অটোমেটিক ফোকাস করা)
```tsx
import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
```

### **উদাহরণ ২:** (স্টেট ছাড়া ভ্যালু সংরক্ষণ করা)
```tsx
import { useRef, useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current += 1;
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count (no re-render): {countRef.current}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default ClickCounter;
```

---

## 🎥 ভিডিও রেফারেন্স

- **useState Hook:** [ভিডিও লিংক](https://www.youtube.com/watch?v=6tni9ZhMcPM&t=51s)
- **useEffect Hook:** [ভিডিও লিংক](https://www.youtube.com/watch?v=vVwCyii5GJk&t=1209s)
- **useRef Hook:** [ভিডিও লিংক](https://www.youtube.com/watch?v=sXkyogEPiqQ&t=11s)

---

## **সংক্ষেপে**
| Hook | কাজ | ব্যবহারের ক্ষেত্র |
|------|------|----------------|
| `useState` | স্টেট পরিচালনা করে | কাউন্টার, ইনপুট হ্যান্ডলিং |
| `useEffect` | সাইড ইফেক্ট পরিচালনা করে | API কল, টাইমার |
| `useRef` | DOM reference সংরক্ষণ ও mutable value হ্যান্ডলিং করে | ইনপুট ফোকাস, রি-রেন্ডার ছাড়া ডাটা সংরক্ষণ |

এই ডকুমেন্টটি পড়ার জন্য ধন্যবাদ! 🚀

---

