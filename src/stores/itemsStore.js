import {create} from 'zustand'
import {Listings} from "../lib/constants.js";

export const useStore = create((set) => {
  return {
    items: Listings,
    handleCheckedCount : () => set((state) => ({
      selectedCount : state.items.filter(item => item.packed === true).length, 
      totalCount : state.items.length})),
    handleRemoveAllItems: () => set({items : []}),
    handleReset: () => set({items: Listings}),
    handleDeletion: (id) => set(state => ({items: state.items.filter(item => item.id !== id)})),
    handleChecked: (id) => set(state => {
      return {items: state.items.map(item => item.id === id ? {...item, packed: !item.packed} : item)}
    }),
    handlePacked: () => set(state => ({items: state.items.map(item => ({...item, packed: true}))})),
    handleUnpacked: () => set(state => ({items: state.items.map(item => ({...item, packed: false}))})),
  }})