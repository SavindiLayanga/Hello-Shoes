// Temporary mock authentication for development
const STORAGE_KEY = 'mock_users';

interface MockUser {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

// Initialize with a default admin user
const initializeMockUsers = () => {
  const users = localStorage.getItem(STORAGE_KEY);
  if (!users) {
    const defaultUsers: MockUser[] = [{
      email: 'admin@helloshoes.com',
      password: 'admin123',
      role: 'ADMIN'
    }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
  }
};

const getMockUsers = (): MockUser[] => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const mockSignUp = async (email: string, password: string): Promise<void> => {
  initializeMockUsers();
  const users = getMockUsers();
  
  if (users.some(user => user.email === email)) {
    throw new Error('User already exists');
  }

  users.push({
    email,
    password,
    role: 'USER'
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const mockLogin = async (email: string, password: string) => {
  initializeMockUsers();
  const users = getMockUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const token = btoa(`${email}:${Date.now()}`);
  
  return {
    user: {
      email: user.email,
      role: user.role
    },
    token
  };
};