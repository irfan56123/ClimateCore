import ProductCard from "./ProductCard";

// Types
interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[];
  imageUrl?: string;
}

interface PrismaProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  mrp: number | null;
  images: string[];
  suitableFor: string[];
  technology: string[];
  shape: string[];
  description: string | null;
}

interface CategoryProductSectionProps {
  category: string; // e.g. "Signia,Invisible"
  title?: string; // Optional custom title
  description?: string; // Optional description/subheading
  limit?: number;
}

export default async function CategoryProductSection({
  category,
  title,
  description,
  limit = 4,
}: CategoryProductSectionProps) {
  // ✅ Fetch products
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  if (!response.ok) return null;
  const data: PrismaProduct[] = await response.json();

  const products: Product[] = data.map((product) => ({
    id: product.id,
    title: product.title,
    slug: product.slug,
    category: [product.category, ...product.suitableFor, ...product.technology, ...product.shape],
    description: product.description || "No description available",
    price: product.mrp ? `₹${product.mrp}` : "Contact for price",
    imageUrl: product.images[0] || "/placeholder.png",
  }));

  // ✅ Multiple keyword support
  const keywords = category
    .split(",")
    .map((kw) => kw.trim().toLowerCase())
    .filter(Boolean);

  // // ✅ Product filter logic (AND matching for all keywords)
  // const filteredProducts = products.filter((product) =>
  //   keywords.every((kw) => {
  //     const titleMatch = product.title.toLowerCase().includes(kw);
  //     const categoryMatch = product.category.some((cat) =>
  //       cat.toLowerCase().includes(kw)
  //     );
  //     return titleMatch || categoryMatch;
  //   })
  // );
  // ✅ Product filter logic (AND matching for all keywords)
  const filteredProducts = products.filter((product) =>
    keywords.every((kw) => {
      const categoryMatch = product.category.some((cat) =>
        cat.toLowerCase().includes(kw)
      );
      return categoryMatch;
    })
  );

  // ✅ Apply limit
  const limitedProducts = filteredProducts.slice(0, limit);

  if (!limitedProducts.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-20 py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            {title || `${category.split(",").join(" + ")} HVAC Systems`}
          </span>
        </h2>
        {description && (
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-4 ${limit <= 2
            ? "grid-cols-1 sm:grid-cols-2"
            : limit <= 4
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
              : limit <= 6
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          }`}
      >
        {limitedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageUrl={product.imageUrl || "/placeholder.png"}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}
