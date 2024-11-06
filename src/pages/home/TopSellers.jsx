import { useState } from 'react'
import BookCard from '../books/BookCard'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Loading from '../../components/Loading'

const categories = [
    'Choose a genre',
    'Business',
    'Fiction',
    'Horror',
    'Adventure',
]

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState('Choose a genre')

    const { data: books = [], isLoading, error } = useFetchAllBooksQuery()

    const filteredBooks =
        selectedCategory === 'Choose a genre'
            ? books
            : books.filter(
                  (book) =>
                      book.category.toLocaleLowerCase() ===
                      selectedCategory.toLocaleLowerCase(),
              )

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

            <div className="mb-8 flex items-center">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                    name="category"
                    id="category"
                    className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {isLoading && <Loading />}

            {error && (
                <p className="text-red-500 text-center">
                    Failed to load books.
                </p>
            )}

            {!isLoading && filteredBooks.length > 0 ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 2, spaceBetween: 50 },
                        1180: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                !isLoading && (
                    <p className="text-gray-500 text-center mt-10">
                        No books found for the selected genre.
                    </p>
                )
            )}
        </div>
    )
}

export default TopSellers
