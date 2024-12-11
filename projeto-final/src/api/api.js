import axios from 'axios';

const BASE_URL = 'https://ecom-back-strapi.onrender.com/api';

// Consumir a API
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzNzkwMDA1LCJleHAiOjE3MzYzODIwMDV9.XTgfArY9GFYLaU_KfVn_EgVfW2C-ZfbLLbzi3yh4yco'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados de ${endpoint}:`, error);
    throw error;
  }
};


/*                                                                                                   
                                        .@@@@@@@@%.                                                 
                                   @@@@@@@@@@@@@@@@@@@@@                                            
                               #@@@@@@@@@@@@@@@@@@@@@@@@@@@+                                        
                             @@@@@@@@+               *@@@@@@@@                                      
                           @@@@@@@                       @@@@@@@                                    
                         @@@@@@.                           .@@@@@@                                  
                        @@@@@.                               =@@@@@                                 
                       @@@@@       @@@-             =@@@       @@@@@                                
                      @@@@@      @@@@@@@@         @@@@@@@@      @@@@@                               
                     @@@@@      @@@@@@@@@         @@@@@@@@@      @@@@@                              
                    @@@@@        @@@@@@@@         @@@@@@@@        @@@@@                             
                    @@@@.         @@@@@%           @@@@@@         =@@@@                             
                   -@@@@            *Vlw Julli e Diego!*           @@@@                             
                   @@@@@   **Vlw Ingrid pelo socorro no caos!**    @@@@%                            
                   @@@@@       **Muito Obrigado Campinho!**        @@@@@                            
                   @@@@@      @@@@@                     @@@@@      @@@@*                            
                    @@@@      @@@@@                     @@@@@      @@@@                             
                    @@@@#      @@@@                     @@@@      @@@@@                             
                    #@@@@      @@@@@                   @@@@@      @@@@-                             
                     @@@@@      @@@@@@               @@@@@@      @@@@@                              
                      @@@@@      =@@@@@@           @@@@@@.      @@@@@                               
                       @@@@@       @@@@@@@@@@@@@@@@@@@@@      .@@@@@                                
                        @@@@@@       .@@@@@@@@@@@@@@@.       @@@@@@                                 
                         .@@@@@@          @@@@@@@          @@@@@@                                   
                           @@@@@@@@                     @@@@@@@%                                    
                             =@@@@@@@@@             @@@@@@@@@.                                      
                                @@@@@@@@@@@@@@@@@@@@@@@@@@@                                         
                                    @@@@@@@@@@@@@@@@@@@ 
                                        .@@@@@@@@%. 
                                        
*/