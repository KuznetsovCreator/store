import Styles from './Catalog.module.css'
import {IProduct, ProductCard, ProductSkeleton, useFetchAllProductsQuery} from "../../../entities/product";
import {AddProductToCart} from "../../../features/productActions/addProductToCart";
import {useFetchAllDealersQuery} from "../../../entities/dealer";
import {useAppSelector} from "../../../shared/store";
import {IOptions} from "../../../entities/options";
import {useEffect, useState} from "react";

export const Catalog = () => {
  const options = useAppSelector<IOptions>(state => state.options)
  const {data: dealers, isLoading: isDealersLoading, error: isDealersError} = useFetchAllDealersQuery()
  const [filteredDealers, setFilteredDealers] = useState<string [] | null>(null)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    if (!isDealersLoading && !isDealersError && dealers && options.dealers) {
      const matcherDealers = dealers.filter(dealer => options.dealers?.includes((dealer)))
      setFilteredDealers(matcherDealers)
      setIsInitialLoad(false)
    } else if (isDealersLoading) {
      setIsInitialLoad(true)
    } else {
      setIsInitialLoad(false)
    }
  }, [options.dealers, dealers]);

  const {
    data: products,
    error: isProductsError,
    isLoading: isProductsLoading
  } = useFetchAllProductsQuery(filteredDealers, {
    skip: !filteredDealers || isInitialLoad
  })

  const renderProducts = (items: IProduct[] | null) => {
    return items?.map((item) => (
      <ProductCard
        key={item.id}
        name={item.name}
        id={item.id}
        price={item.price}
        image={item.image}
        slot={
          <AddProductToCart product={{
            name: item.name,
            id: item.id,
            price: item.price,
            image: item.image,
            quantity: 1
          }}
          />
        }
      />
    ))
  }
  const renderSkeleton = () => {
    return (
      <>
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
        <ProductSkeleton/>
      </>
    )
  }

  return (
    <section className={Styles['section']}>
      <div className="container">
        <h1 className={Styles['title']}>
          Каталог продуктов
        </h1>
      </div>
      <div className="container">
        {isProductsError && <p>К сожалению, в настоящий момент каталог недоступен</p>}
      </div>
      <div className={`container ${Styles['catalog']}`}>
        {(isInitialLoad || isProductsLoading) && renderSkeleton()}
        {products && renderProducts(products)}
      </div>
    </section>
  )
}