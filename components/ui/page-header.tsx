interface PageHeaderProps {
  title: string
  description: string
  gradient: string
}

export function PageHeader({ title, description, gradient }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient}/10 via-transparent to-${gradient.split(" ")[2]}/10 animate-pulse`}
      />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-fade-in`}
          >
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in animation-delay-200">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
