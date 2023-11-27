import { create } from 'zustand';

// 状态类型声明
type UndoStoreState = {
  count: number;
  history: number[];
  data: any;
};

// 操作类型声明
type UndoStoreActions = {
  increment: () => void;
  decrement: () => void;
  undo: () => void;
  getData: () => void;
};

type UndoStore = UndoStoreState & UndoStoreActions;

const useUndoStore = create<UndoStore>((set, get) => ({
  // 初始状态
  count: 0,
  // 撤销历史记录
  history: [],
  data: '',
  getData: async () => {
    console.log(get().data);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    set({ data });
    console.log(get().data);
  },
  // 增加计数
  increment: () => {
    const { count, history } = get();
    // 更新状态
    set({ count: count + 1, history: [...history, count] });
  },
  // 减少计数
  decrement: () => {
    const { count, history } = get();
    // 更新状态
    set({ count: count - 1, history: [...history, count] });
  },
  // 撤销
  undo: () => {
    const { history } = get();
    if (history.length > 0) {
      const previousCount = history[history.length - 1];
      // 移除最后一条历史记录
      const newHistory = history.slice(0, -1);
      // 恢复到之前的状态
      set({ count: previousCount, history: newHistory });
    }
  },
}));

export default useUndoStore;
