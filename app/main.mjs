import { create } from 'zustand';

// 创建一个 store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// 示例代码
console.log('初始状态:', useStore.getState().count);

useStore.getState().increment();
console.log('增加后的状态:', useStore.getState().count);

useStore.getState().decrement();
console.log('减少后的状态:', useStore.getState().count);
