import { useState } from 'react'
import { DataAPI } from '../types/ClearPints.type'

const useClearPoint = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [clearPoint, setClearPoint] = useState<[] | DataAPI>([]);
    const [error, setError] = useState<string>('');

    const getClearPoints = async() =>{
        setIsLoading(true);

        try{
            const response = await fetch('https://datos.diputaciondevalladolid.es/dataset/5b5ad1b4-bfdc-468e-a82a-bab225a942c8/resource/ec744876-3aba-4a36-acf1-764553e19e31/download/contenedores.json')
            const data = await response.json();
            setClearPoint(data);
        } catch(error){
            setError(error as string);
        }finally{
            setIsLoading(false);
        }
    }

  return {
    isLoading, getClearPoints, error, clearPoint
  }
}

export default useClearPoint
