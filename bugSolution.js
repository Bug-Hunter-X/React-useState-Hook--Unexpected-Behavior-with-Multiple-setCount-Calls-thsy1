```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 2); // Functional update
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```