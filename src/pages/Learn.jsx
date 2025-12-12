// Learn page - cooking tips and techniques
export default function Learn() {
  const tips = [
    {
      id: 1,
      title: 'Knife Skills',
      content: 'Learn proper cutting techniques for safety and efficiency',
    },
    {
      id: 2,
      title: 'Heat Control',
      content: 'Understand when to use high heat vs low heat',
    },
    {
      id: 3,
      title: 'Seasoning',
      content: 'Master the basics of salt, pepper, and flavor building',
    },
    {
      id: 4,
      title: 'Meal Prep',
      content: 'Save time by preparing ingredients ahead',
    },
  ];

  return (
    <div className="page">
      <h2>Learn to Cook</h2>
      <p>Build your cooking skills with these essential techniques</p>
      
      <div className="tips-grid">
        {tips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
