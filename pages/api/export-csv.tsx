// pages/api/export-to-csv.js
import { Parser } from 'json2csv';
import { getTourByCodename } from '../../lib/services/kontentClient';
import { defaultEnvId, defaultPreviewKey } from '../../lib/utils/env';

export default async function handler(req, res) {
  // Function to fetch content items and linked items from your CMS
  const tourCodename = req.query.codename;
  if (typeof tourCodename !== "string") {
    return res.status(400).json({ error: "You have to provide 'codename' query parameter with the tour's codename." });
  }

  const contentItems = await fetchContentItems(tourCodename);
  console.log(contentItems)

  // Define the fields for the CSV file
  const fields = [
    {
      label: 'Tour Number',
      value: 'tourNumber'
    },
    {
      label: 'Tour Name',
      value: 'tourName'
    },
    {
      label: 'Description',
      value: 'description'
    },
    {
      label: 'Includes',
      value: 'includes'
    },
    {
      label: 'Images',
      value: 'images'
    },
    {
      label: 'Days',
      value: 'duration'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'Hotels',
      value: (row) => row.hotels.map((item) => item.hotelName).join(';')
    }
  ];

  try {
    // Create a new parser instance with the fields
    const parser = new Parser({ fields });
    // Convert data to CSV
    const csv = parser.parse(contentItems);

    // Set the headers to prompt download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=content-items.csv');

    // Send the CSV file
    res.status(200).send(csv);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to generate CSV file' });
  }
}

// Mock function to simulate fetching content items from a CMS
// Replace this with your actual data fetching logic
async function fetchContentItems(tourCodename: string) {
  const currentEnvId = defaultEnvId;
  const currentPreviewApiKey = defaultPreviewKey;
  // This should return an array of content items with linked items
  // For example:
  const tour = await getTourByCodename({ envId: currentEnvId, previewApiKey: currentPreviewApiKey }, tourCodename, true);
  
  
  return [
    {
      tourNumber: tour.elements.tourNumber.value,
      tourName: tour.elements.name.value,
      description: tour.elements.description.value,
      includes: tour.elements.includes.value,
      duration: tour.elements.durationInDays.value,
      price: tour.elements.price.value,
      images: tour.elements.image.value.map((image) => image.url).join(';'),      
      hotels: tour.elements.hotel.linkedItems.map((hotel) => ({
        hotelName: hotel.elements.name.value,
        hoteldescription: hotel.elements.description.value,
        hotelRating: hotel.elements.rating.value
      }))
    },
    // ... more content items
  ];
}