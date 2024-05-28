import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className="text-uppercase">Маҳсулот</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Номи маҳсулот</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Нарх</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Миқдор</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Хориҷкунӣ</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Ҳамагӣ</p>
                </div>
          </div>   
        </div>
    )
}
