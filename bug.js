```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect running:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]); // Only re-run the effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This is the problematic line
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```