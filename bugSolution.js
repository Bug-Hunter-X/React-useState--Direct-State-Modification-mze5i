```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly updating count using the setter function
    setCount(prevCount => prevCount + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```