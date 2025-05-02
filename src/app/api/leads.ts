// src/pages/api/leads.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const leadsCollection = collection(db, 'leads'); // Firestore 'leads' collection

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all leads from Firestore
    try {
      const querySnapshot = await getDocs(leadsCollection);
      const leads = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(leads);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching leads' });
    }
  }

  if (req.method === 'POST') {
    // Add new lead to Firestore
    const { name, email, message } = req.body;
    try {
      const docRef = await addDoc(leadsCollection, { name, email, message });
      res.status(201).json({ id: docRef.id, name, email, message });
    } catch (error) {
      res.status(500).json({ error: 'Error adding lead' });
    }
  }

  if (req.method === 'DELETE') {
    // Delete a lead by ID
    const { id } = req.query;
    try {
      const leadDoc = doc(db, 'leads', id as string);
      await deleteDoc(leadDoc);
      res.status(200).json({ message: 'Lead deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting lead' });
    }
  }
}
