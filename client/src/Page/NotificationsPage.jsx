import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const NotificationsPage = () => {
  const notifs = [
    { id: 1, title: "Resume Analysis Complete", desc: "Your ATS score is ready. View it now.", time: "2h ago", unread: true },
    { id: 2, title: "New Interview Question", desc: "A new 'System Design' question was added.", time: "5h ago", unread: true },
    { id: 3, title: "Welcome to CareerAI", desc: "Thanks for joining! Start by setting your goals.", time: "1d ago", unread: false },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="flex-between mb-30">
        <h1>Notifications</h1>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <div className="flex-col gap-10">
        {notifs.map(n => (
          <Card key={n.id} style={{ padding: '20px', borderLeft: n.unread ? '4px solid var(--primary)' : '4px solid transparent', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <h4 style={{ marginBottom: '5px', fontSize: '15px' }}>{n.title} {n.unread && <span style={{fontSize:'8px', background:'var(--red)', color:'white', padding:'2px 6px', borderRadius:'10px', verticalAlign:'middle'}}>NEW</span>}</h4>
              <p style={{ fontSize: '13px' }}>{n.desc}</p>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>{n.time}</span>
          </Card>
        ))}
        {notifs.length === 0 && <p style={{textAlign:'center', padding:20}}>No new notifications.</p>}
      </div>
    </div>
  );
};

export default NotificationsPage;