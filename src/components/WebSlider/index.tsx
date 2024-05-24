import React, { useEffect, useState }  from 'react';

import Button from '../Button';


const WebSlider: React.FC = () => {
  console.log('Render: WebSlider');
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleNext = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      
      if (response.status === 200) {
          const data = await response.json();
          setImageUrl(data.message)
      } else {
          throw new Error(`Failed to fetch data: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleNext();
  }, [])

  return (
    <div style={styles.container}>
      {!!imageUrl && (
        <img style={styles.image} src={imageUrl} alt="Current img" />
      )}

      <div style={styles.buttonContainer}>
        <Button onClick={handleNext} />
      </div>
    </div>
  );
};

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 800,
    height: 600,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rndColorBtn: {
    border: "3px solid #F2A42A",
    borderRadius: 20,
    padding: '5px 5px',
  },
  rndColorBtnText: {
    color: '#F2A42A'
  }
}

export default WebSlider;