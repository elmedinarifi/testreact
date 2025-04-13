import Layout from '@/components/Layout';
import TaskList from '@/components/TaskList';

// Sample tasks data - replace with your actual data source
const sampleTasks = [
  {
    id: '1',
    title: 'Complete project setup',
    description: 'Set up the development environment and install necessary dependencies',
    status: 'completed' as const,
    dueDate: '2024-03-20',
  },
  {
    id: '2',
    title: 'Implement task creation',
    description: 'Create a form to add new tasks to the tracker',
    status: 'in-progress' as const,
    dueDate: '2024-03-25',
  },
  {
    id: '3',
    title: 'Add task filtering',
    description: 'Implement functionality to filter tasks by status',
    status: 'pending' as const,
    dueDate: '2024-03-30',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage your tasks efficiently
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add New Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Pending</h3>
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                2
              </span>
            </div>
            <div className="space-y-4">
              <TaskList tasks={sampleTasks.filter(task => task.status === 'pending')} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                1
              </span>
            </div>
            <div className="space-y-4">
              <TaskList tasks={sampleTasks.filter(task => task.status === 'in-progress')} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Completed</h3>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                1
              </span>
            </div>
            <div className="space-y-4">
              <TaskList tasks={sampleTasks.filter(task => task.status === 'completed')} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
