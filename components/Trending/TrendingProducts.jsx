import TrendingCard from "./Card";

export default function TrendingProducts({ products }) {
  return (
    <div id="hottest">
      {" "}
      <div className="text-navigationColor text-center">
        <h1 className="text-lg mb-10 tracking-heroWide uppercase leading-3">
          Featured Games
        </h1>
        <div className="inline-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <TrendingCard key={product.id} product={product} />
          ))}
        </div>
        <div>
          <button className="mt-10 font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
            All Games
          </button>
        </div>
      </div>
    </div>
  );
}