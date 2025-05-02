// src/pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products'); // Firestore 'products' collection

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all products from Firestore
    try {
      const querySnapshot = await getDocs(productsCollection);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  }

  if (req.method === 'POST') {
    // Add new product to Firestore
    const { name, description } = req.body;
    try {
      const docRef = await addDoc(productsCollection, { name, description });
      res.status(201).json({ id: docRef.id, name, description });
    } catch (error) {
      res.status(500).json({ error: 'Error adding product' });
    }
  }

  if (req.method === 'DELETE') {
    // Delete a product by ID
    const { id } = req.query;
    try {
      const productDoc = doc(db, 'products', id as string);
      await deleteDoc(productDoc);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
  }
}
