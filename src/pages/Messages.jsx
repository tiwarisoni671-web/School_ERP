import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical, 
  Phone, 
  Video, 
  Info, 
  CheckCheck, 
  MessageSquare, 
  ShieldAlert, 
  User,
  Users,
  SearchCode,
  Sparkles,
  Settings,
  Circle,
  Bell,
  Lock,
  MessageCircle,
  AlertCircle
} from "lucide-react";

const initialChats = [
  {
    id: 1,
    name: "Grade 10-A General",
    avatar: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=100",
    role: "Class Group",
    isGroup: true,
    unread: 3,
    online: true,
    lastMsg: "Please submit your Math assignments by tomorrow morning.",
    time: "10:24 AM",
    messages: [
      { id: 1, sender: "Mrs. Sarah Jenkins (Maths)", content: "Good morning everyone. Reminding you about the math worksheets.", isSelf: false, time: "09:00 AM", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
      { id: 2, sender: "You", content: "Thanks for the reminder. I will upload it tonight.", isSelf: true, time: "09:15 AM" },
      { id: 3, sender: "Rohan Gupta (Student)", content: "Ma'am, is exercise 4.2 compulsory?", isSelf: false, time: "10:20 AM", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" },
      { id: 4, sender: "Mrs. Sarah Jenkins (Maths)", content: "Yes Rohan, all questions are compulsory.", isSelf: false, time: "10:24 AM", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }
    ]
  },
  {
    id: 2,
    name: "Dr. Aris Vance (Principal)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    role: "Administration",
    isGroup: false,
    unread: 0,
    online: true,
    lastMsg: "Let's discuss the annual budget plans in the afternoon meeting.",
    time: "Yesterday",
    messages: [
      { id: 1, sender: "Dr. Aris Vance", content: "Hello. I reviewed the science lab reports.", isSelf: false, time: "04:15 PM", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" },
      { id: 2, sender: "You", content: "Perfect. Do we need any modifications?", isSelf: true, time: "04:22 PM" },
      { id: 3, sender: "Dr. Aris Vance", content: "Let's discuss the annual budget plans in the afternoon meeting.", isSelf: false, time: "05:01 PM", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" }
    ]
  },
  {
    id: 3,
    name: "Parent-Teacher Council",
    avatar: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=100",
    role: "Community",
    isGroup: true,
    unread: 0,
    online: false,
    lastMsg: "The upcoming cultural fest planning is scheduled for Friday.",
    time: "Yesterday",
    messages: [
      { id: 1, sender: "Mr. Robert Watson", content: "Do we have updates on the schedule?", isSelf: false, time: "11:30 AM", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
      { id: 2, sender: "You", content: "The draft schedule will be sent out tomorrow.", isSelf: true, time: "11:45 AM" }
    ]
  },
  {
    id: 4,
    name: "Prof. Clara Barton",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    role: "Teacher (History)",
    isGroup: false,
    unread: 1,
    online: false,
    lastMsg: "Can you share the history curriculum files?",
    time: "2 days ago",
    messages: [
      { id: 1, sender: "Prof. Clara Barton", content: "Hi! Can you share the history curriculum files?", isSelf: false, time: "02:10 PM", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" }
    ]
  },
  {
    id: 5,
    name: "Staff Association",
    avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=100",
    role: "Staff Group",
    isGroup: true,
    unread: 0,
    online: true,
    lastMsg: "Happy Birthday to our primary coordinator Mrs. Grace!",
    time: "3 days ago",
    messages: [
      { id: 1, sender: "Admin", content: "Happy Birthday to our primary coordinator Mrs. Grace!", isSelf: false, time: "09:00 AM", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }
    ]
  }
];

const Messages = () => {
  const [isChatEnabled, setIsChatEnabled] = useState(true);
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const messagesEndRef = useRef(null);

  const activeChat = chats.find(chat => chat.id === activeChatId) || chats[0];

  // Scroll to bottom when message list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat.messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: activeChat.messages.length + 1,
      sender: "You",
      content: inputText,
      isSelf: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          lastMsg: inputText,
          time: "Just Now",
          messages: [...chat.messages, newMessage]
        };
      }
      return chat;
    }));

    setInputText("");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredChats = chats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          chat.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          chat.lastMsg.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeTab === "groups") return chat.isGroup;
    if (activeTab === "direct") return !chat.isGroup;
    if (activeTab === "teachers") return chat.role.includes("Teacher") || chat.role.includes("Principal");
    
    return true;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] bg-slate-50/50">
      
      {/* Top Banner Control Panel for simulated admin toggling */}
      <div className="bg-white border-b px-6 py-2.5 flex items-center justify-between shadow-xs z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse" />
          <span className="text-sm font-semibold text-slate-800">Communication & Chat Studio</span>
          <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-full border border-indigo-100">DEMO CONFIG</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Toggle Service State:</span>
          <button 
            onClick={() => setIsChatEnabled(!isChatEnabled)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isChatEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isChatEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs font-bold ${isChatEnabled ? 'text-emerald-600' : 'text-slate-500'}`}>
            {isChatEnabled ? 'Chat Active' : 'Chat Disabled'}
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {isChatEnabled ? (
          // ACTIVE CHAT LAYOUT
          <>
            {/* Left Sidebar - Chat List */}
            <div className="w-80 border-r bg-white flex flex-col flex-shrink-0">
              
              {/* Header inside chat panel */}
              <div className="p-4 border-b">
                <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  Messages
                  <span className="bg-rose-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                    {chats.reduce((acc, c) => acc + c.unread, 0)}
                  </span>
                </h1>
                
                {/* Search contact */}
                <div className="mt-3 relative">
                  <input 
                    type="text" 
                    placeholder="Search conversations..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-800 placeholder-slate-400 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex px-2 border-b gap-1 bg-slate-50/50 py-1">
                {["all", "groups", "direct", "teachers"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all capitalize ${activeTab === tab ? 'bg-white text-indigo-600 shadow-xs border border-slate-100' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Chat list items */}
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                {filteredChats.length > 0 ? (
                  filteredChats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => {
                        setActiveChatId(chat.id);
                        // Mark as read
                        setChats(prev => prev.map(c => c.id === chat.id ? { ...c, unread: 0 } : c));
                      }}
                      className={`w-full text-left p-4 flex gap-3 hover:bg-slate-50/80 transition-all border-l-3 relative ${activeChatId === chat.id ? 'bg-indigo-50/40 border-indigo-600' : 'border-transparent'}`}
                    >
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <img 
                          src={chat.avatar} 
                          alt={chat.name} 
                          className="w-11 h-11 rounded-full object-cover border border-slate-200" 
                        />
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>

                      {/* Info & Last message snippet */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-semibold text-slate-800 text-sm truncate">{chat.name}</h3>
                          <span className="text-[10px] text-slate-400">{chat.time}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium truncate mb-1">{chat.role}</p>
                        <p className={`text-xs truncate ${chat.unread > 0 ? 'text-slate-800 font-bold' : 'text-slate-500'}`}>
                          {chat.lastMsg}
                        </p>
                      </div>

                      {/* Unread badge */}
                      {chat.unread > 0 && (
                        <div className="absolute right-4 bottom-4 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm animate-bounce">
                          {chat.unread}
                        </div>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-400">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-semibold">No chats found matching criteria</p>
                  </div>
                )}
              </div>

            </div>

            {/* Right Panel - Active Chat Conversations */}
            <div className="flex-1 flex flex-col bg-slate-50">
              
              {/* Active Chat Header */}
              <div className="h-16 px-6 border-b bg-white flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover border" />
                  <div>
                    <h2 className="font-bold text-slate-800 text-sm leading-tight">{activeChat.name}</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Circle className={`w-1.5 h-1.5 fill-current ${activeChat.online ? 'text-emerald-500' : 'text-slate-400'}`} />
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                        {activeChat.online ? 'Online' : 'Offline'} • {activeChat.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-500">
                  <button className="p-2 hover:bg-slate-100 rounded-full hover:text-indigo-600 transition-colors"><Phone className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-full hover:text-indigo-600 transition-colors"><Video className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-full hover:text-indigo-600 transition-colors"><Info className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-full hover:text-indigo-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Message Display Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="flex justify-center my-2">
                  <span className="bg-slate-200/60 text-[10px] font-bold text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-300/30 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-slate-400" />
                    End-to-End Encrypted via ERP Security Shield
                  </span>
                </div>

                {activeChat.messages.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2.5 ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
                    
                    {/* Other user avatar */}
                    {!msg.isSelf && (
                      <img 
                        src={msg.avatar || activeChat.avatar} 
                        alt="sender" 
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 flex-shrink-0 mb-1" 
                      />
                    )}

                    <div className="max-w-[70%]">
                      {/* Sender name for group chats */}
                      {!msg.isSelf && activeChat.isGroup && (
                        <p className="text-[10px] font-bold text-slate-600 ml-1.5 mb-1">{msg.sender}</p>
                      )}
                      
                      {/* Message Bubble */}
                      <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-xs relative ${
                        msg.isSelf 
                          ? 'bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-br-none' 
                          : 'bg-white text-slate-700 border border-slate-200/80 rounded-bl-none'
                      }`}>
                        {msg.content}
                      </div>

                      {/* Timestamp & Read Receipt */}
                      <div className={`flex items-center gap-1 mt-1 text-[9px] text-slate-400 ${msg.isSelf ? 'justify-end mr-1' : 'justify-start ml-1.5'}`}>
                        <span>{msg.time}</span>
                        {msg.isSelf && <CheckCheck className="w-3.5 h-3.5 text-indigo-500 font-bold" />}
                      </div>
                    </div>

                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input Bar */}
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t flex items-center gap-3">
                <button type="button" className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                
                <div className="flex-1 relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="Type your message here..." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full pl-4 pr-11 py-2.5 bg-slate-50 text-slate-800 placeholder-slate-400 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  />
                  <button type="button" className="absolute right-3 text-slate-400 hover:text-amber-500 transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                </div>

                <button 
                  type="submit" 
                  disabled={!inputText.trim()}
                  className={`p-2.5 bg-indigo-600 text-white rounded-xl shadow-md transition-all hover:bg-indigo-700 flex items-center justify-center ${!inputText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>

            </div>
          </>
        ) : (
          // DISABLED STATE NOTICE (Premium glassmorphic styled version of user's screen)
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50">
            <div className="w-full max-w-xl bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden text-center relative p-8 md:p-12">
              
              {/* Decorative backgrounds */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-50 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-rose-50 rounded-full filter blur-xl opacity-70"></div>

              {/* Glowing Crossed bubble indicator */}
              <div className="mx-auto w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center relative mb-6 border border-slate-200/60 shadow-inner">
                <MessageSquare className="w-10 h-10 text-slate-400" />
                <div className="absolute inset-0 border-2 border-slate-300 rounded-full animate-ping opacity-25"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-1 bg-slate-400 rotate-[-45deg] transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
              </div>

              {/* Notice text */}
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">Chat is not enabled for your school</h2>
              <p className="mt-2.5 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                Real-time instant messaging has been restricted. An administrator can enable notifications and active chat streams under Chat Moderation configurations.
              </p>

              {/* Action Button */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => setIsChatEnabled(true)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Enable Demo Mode
                </button>
                
                <button className="px-5 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200">
                  <Settings className="w-4 h-4 text-slate-500" />
                  Open Chat Moderation
                </button>
              </div>

              {/* Safe Tip alert */}
              <div className="mt-8 p-3.5 bg-amber-50/50 border border-amber-200/50 rounded-xl text-left flex items-start gap-3">
                <AlertCircle className="w-4.5 h-4.5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-[11px] text-amber-800 leading-tight">
                  <span className="font-bold">Administrator Note: </span>
                  Disabling chat removes messaging capability for all user accounts including students, teachers, parents, and administrative staff groups.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Messages;
