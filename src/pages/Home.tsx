import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import AnimatedPage from '../components/AnimatedPage';
import FadeInOnScroll from '../components/FadeInOnScroll';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const featuredProducts = products.filter(product => product.isNew || product.discount);
  const trendingProducts = products.slice(0, 8);

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Slider */}
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[60vh] w-full"
        >
          {categories.slice(0, 4).map((category) => (
            <SwiperSlide key={category.id}>
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center text-white"
                  >
                    <h2 className="text-4xl font-bold mb-4">{category.name}</h2>
                    <Link
                      to={`/category/${category.name.toLowerCase()}`}
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Featured Products */}
        <FadeInOnScroll>
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
              <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-700">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {featuredProducts.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </FadeInOnScroll>

        {/* Categories Preview */}
        <FadeInOnScroll>
          <section className="bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Shop by Category</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {categories.slice(0, 4).map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/category/${category.name.toLowerCase()}`}
                      className="group relative aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-center mt-8">
                <Link
                  to="/categories"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View All Categories
                </Link>
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        {/* Trending Products */}
        <FadeInOnScroll>
          <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Trending Now</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {trendingProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </FadeInOnScroll>
      </div>
    </AnimatedPage>
  );
}