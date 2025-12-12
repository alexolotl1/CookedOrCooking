// Showcases page - food photography and inspiration
export default function Showcases() {
  const showcases = [
    {
      id: 1,
      title: 'Elegant Plating',
      description: 'Learn how to plate your dishes like a pro',
    },
    {
      id: 2,
      title: 'Seasonal Cooking',
      description: 'Make the most of seasonal ingredients',
    },
    {
      id: 3,
      title: 'Quick Meals',
      description: '30-minute meals for busy days',
    },
  ];

  return (
    <div className="page">
      <h2>Showcases</h2>
      <p>Get inspired by beautiful food and creative cooking ideas</p>
      
      <div className="showcase-grid">
        {showcases.map((item) => (
          <div key={item.id} className="showcase-card">
            <div className="showcase-image">📸</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
