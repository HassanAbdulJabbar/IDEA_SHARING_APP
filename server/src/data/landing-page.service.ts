import { Injectable } from '@nestjs/common';

@Injectable()
export class IdeasService {
  public readonly ideas = [
    {
      id: 1,
      title: 'Improved Task Management System',
      description:
        'A new feature for task management with enhanced priority and deadline functionalities.',
      category: 'Productivity',
      status: 'In Progress',
      createdBy: 'John Doe',
      createdAt: '2025-01-15T10:00:00Z',
      tags: ['task', 'productivity', 'management'],
      upvotes: 15,
      downvotes: 3,
    },
    {
      id: 2,
      title: 'AI-Powered Personal Assistant',
      description:
        'A personal assistant powered by AI that can automate tasks and manage schedules.',
      category: 'Technology',
      status: 'Completed',
      createdBy: 'Jane Smith',
      createdAt: '2025-01-10T14:30:00Z',
      tags: ['AI', 'assistant', 'automation'],
      upvotes: 30,
      downvotes: 5,
    },
    {
      id: 3,
      title: 'Eco-friendly Packaging',
      description:
        'An initiative to create packaging materials from sustainable and eco-friendly resources.',
      category: 'Environment',
      status: 'Idea',
      createdBy: 'Emily Davis',
      createdAt: '2025-01-20T09:45:00Z',
      tags: ['environment', 'sustainability', 'packaging'],
      upvotes: 50,
      downvotes: 1,
    },
    {
      id: 4,
      title: 'Remote Work Tool Integration',
      description:
        'A new tool to seamlessly integrate multiple remote work platforms to improve collaboration.',
      category: 'Workplace',
      status: 'In Progress',
      createdBy: 'Michael Brown',
      createdAt: '2025-01-18T16:20:00Z',
      tags: ['remote', 'collaboration', 'tools'],
      upvotes: 25,
      downvotes: 2,
    },
    {
      id: 5,
      title: 'Blockchain for Healthcare Data',
      description:
        'Using blockchain technology to securely store and share healthcare data between institutions.',
      category: 'Technology',
      status: 'Idea',
      createdBy: 'Sarah Lee',
      createdAt: '2025-01-22T11:00:00Z',
      tags: ['blockchain', 'healthcare', 'security'],
      upvotes: 10,
      downvotes: 0,
    },
  ];

  getAllIdeas() {
    return this.ideas;
  }
}
