import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const fetchUserRole = async (uid: string) => {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) return null;
  const userDoc = querySnapshot.docs[0];
  return userDoc.data().role;
};
