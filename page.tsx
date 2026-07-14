"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  Search,
  Users,
  Chrome,
  Sparkles,
  Brain,
  Globe,
  ArrowRight,
  Star,
  Shield,
  CheckCircle,
  Menu,
  X,
  Download,
  ExternalLink,
  Lock,
  Verified,
  Bell,
  User,
  Send,
  Github,
} from "lucide-react"

export default function ZentraLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Interactive demo state
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Added Chrome extension integration state
  const [isInstalling, setIsInstalling] = useState(false)
  const [installProgress, setInstallProgress] = useState(0)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showPermissions, setShowPermissions] = useState(false)
  const [installationStep, setInstallationStep] = useState(0)

  const heroRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Demo scenarios data
  const demoScenarios = [
    {
      query: "Best wireless headphones under $200",
      results: [
        {
          platform: "Amazon",
          price: "$149.99",
          title: "Sony WH-CH720N Wireless Headphones",
          rating: "4.5/5",
          color: "from-purple-600/10 to-blue-600/10",
          borderColor: "border-purple-500/20",
        },
        {
          platform: "Best Buy",
          price: "$179.99",
          title: "Audio-Technica ATH-M50xBT2",
          rating: "4.7/5",
          color: "from-blue-600/10 to-cyan-600/10",
          borderColor: "border-blue-500/20",
        },
        {
          platform: "Target",
          price: "$159.99",
          title: "Beats Solo3 Wireless On-Ear Headphones",
          rating: "4.3/5",
          color: "from-cyan-600/10 to-teal-600/10",
          borderColor: "border-cyan-500/20",
        },
      ],
    },
    {
      query: "Best laptop for programming 2024",
      results: [
        {
          platform: "Amazon",
          price: "$1,299.99",
          title: "MacBook Air M2 13-inch",
          rating: "4.8/5",
          color: "from-purple-600/10 to-blue-600/10",
          borderColor: "border-purple-500/20",
        },
        {
          platform: "Newegg",
          price: "$1,199.99",
          title: "ThinkPad X1 Carbon Gen 11",
          rating: "4.6/5",
          color: "from-blue-600/10 to-cyan-600/10",
          borderColor: "border-blue-500/20",
        },
        {
          platform: "Best Buy",
          price: "$1,399.99",
          title: "Dell XPS 13 Plus",
          rating: "4.4/5",
          color: "from-cyan-600/10 to-teal-600/10",
          borderColor: "border-cyan-500/20",
        },
      ],
    },
    {
      query: "Healthy meal prep recipes",
      results: [
        {
          platform: "Reddit",
          price: "Free",
          title: "r/MealPrepSunday: 50 Easy Recipes",
          rating: "Trending",
          color: "from-purple-600/10 to-blue-600/10",
          borderColor: "border-purple-500/20",
        },
        {
          platform: "YouTube",
          price: "Free",
          title: "10 Meal Prep Ideas for Beginners",
          rating: "2M views",
          color: "from-blue-600/10 to-cyan-600/10",
          borderColor: "border-blue-500/20",
        },
        {
          platform: "Pinterest",
          price: "Free",
          title: "Healthy Meal Prep Ideas Board",
          rating: "500K saves",
          color: "from-cyan-600/10 to-teal-600/10",
          borderColor: "border-cyan-500/20",
        },
      ],
    },
  ]

  // Added Chrome extension installation simulation
  const handleInstallExtension = async () => {
    if (isInstalled) return

    setIsInstalling(true)
    setInstallProgress(0)
    setInstallationStep(0)

    // Simulate installation steps
    const steps = [
      { progress: 20, step: 1, delay: 500 },
      { progress: 40, step: 2, delay: 800 },
      { progress: 70, step: 3, delay: 600 },
      { progress: 90, step: 4, delay: 400 },
      { progress: 100, step: 5, delay: 300 },
    ]

    for (const { progress, step, delay } of steps) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      setInstallProgress(progress)
      setInstallationStep(step)
    }

    setIsInstalling(false)
    setIsInstalled(true)
  }

  const installationSteps = [
    "Connecting to Chrome Web Store...",
    "Verifying extension permissions...",
    "Downloading Zentra extension...",
    "Installing and configuring...",
    "Extension ready to use!",
  ]

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
    return () => window.removeEventListener("resize", updateWindowSize)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    const currentQuery = demoScenarios[currentDemo].query
    let currentIndex = 0
    setTypedText("")
    setShowResults(false)

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentQuery.length) {
        setTypedText(currentQuery.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setShowResults(true)
          setIsTyping(false)
        }, 500)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [isTyping, currentDemo])

  // Auto-play functionality
  useEffect(() => {
    return // Disabled auto-play functionality

    if (!isAutoPlaying) return

    const autoPlayInterval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demoScenarios.length)
      }, 4000)
    }, 6000)

    return () => clearInterval(autoPlayInterval)
  }, [isAutoPlaying, demoScenarios.length])

  // Start first demo on mount
  useEffect(() => {
    return // Disabled automatic demo start

    const timer = setTimeout(() => {
      setIsTyping(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsVisible(true)

    let mouseTimeout: NodeJS.Timeout
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => handleMouseMove(e), 16)
    }

    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 16)
    }

    window.addEventListener("mousemove", throttledMouseMove)
    window.addEventListener("scroll", throttledScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      window.removeEventListener("scroll", throttledScroll)
      clearTimeout(mouseTimeout)
      clearTimeout(scrollTimeout)
    }
  }, [handleMouseMove, handleScroll])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // Demo control functions
  const handlePlayPause = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (!isAutoPlaying && !isTyping) {
      setIsTyping(true)
    }
  }

  const handleRestart = () => {
    setCurrentDemo(0)
    setIsTyping(true)
    setIsAutoPlaying(true)
  }

  const handleDemoSelect = (index: number) => {
    setCurrentDemo(index)
    setIsTyping(true)
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {windowSize.width > 0 && (
          <>
            <div
              className="absolute w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ease-out"
              style={{
                left: `${Math.max(0, Math.min(windowSize.width - 384, mousePosition.x * 0.02))}px`,
                top: `${Math.max(0, mousePosition.y * 0.02 + 80)}px`,
              }}
            />
            <div
              className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ease-out"
              style={{
                right: `${Math.max(0, Math.min(windowSize.width - 320, (windowSize.width - mousePosition.x) * 0.015))}px`,
                top: `${Math.max(0, mousePosition.y * 0.025 + 160)}px`,
              }}
            />
          </>
        )}

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <div className="flex-shrink-0 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src="/zentra-logo.jpg" alt="Zentra Logo" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h1 className="text-2xl font-bold font-heading gradient-text-animated group-hover:scale-105 transition-transform duration-300">
                    Zentra
                  </h1>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search features, docs..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Features
                </a>
                <a
                  href="#demo"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Support
                </a>

                <button className="relative p-2 text-gray-300 hover:text-purple-400 hover:bg-slate-800/30 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </button>
              </div>
            </div>

            {/* Enhanced Chrome extension CTA with installation status */}
            <div className="hidden md:flex items-center gap-3">
              {isInstalled ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Installed</span>
                </div>
              ) : (
                <Button
                  onClick={handleInstallExtension}
                  disabled={isInstalling}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2.5 text-sm font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isInstalling ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Installing...
                    </>
                  ) : (
                    <>
                      <Chrome className="mr-2 h-4 w-4" />
                      Add to Chrome
                    </>
                  )}
                </Button>
              )}

              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-purple-400 p-2 rounded-md transition-colors duration-200 hover:bg-slate-800/30"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-slate-800/30">
                <div className="px-3 py-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                </div>

                <a
                  href="#features"
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Features
                </a>
                <a
                  href="#demo"
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-800/30 rounded-lg"
                >
                  Support
                </a>
                <div className="pt-2 px-3">
                  <Button
                    onClick={handleInstallExtension}
                    disabled={isInstalling}
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    {isInstalling ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Installing...
                      </>
                    ) : isInstalled ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Installed
                      </>
                    ) : (
                      <>
                        <Chrome className="mr-2 h-4 w-4" />
                        Add to Chrome
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Installation progress modal */}
      {isInstalling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 max-w-md w-full mx-4 glass-effect">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Chrome className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Installing Zentra</h3>
              <p className="text-gray-400 mb-6">{installationSteps[installationStep]}</p>

              <div className="w-full bg-slate-800 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${installProgress}%` }}
                />
              </div>

              <div className="text-sm text-gray-500">{installProgress}% complete</div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <Search className="absolute top-20 left-10 w-8 h-8 text-purple-400/30 animate-float" />
              <Sparkles
                className="absolute top-32 right-20 w-6 h-6 text-blue-400/30 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <Brain
                className="absolute bottom-40 left-20 w-10 h-10 text-cyan-400/30 animate-float"
                style={{ animationDelay: "2s" }}
              />
              <Globe
                className="absolute bottom-20 right-10 w-7 h-7 text-purple-400/30 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6">
                <span className="gradient-text-animated">Zentra</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-medium">
                AI-Powered Search Extension
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Find products, articles, and resources instantly from multiple platforms using advanced AI technology
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>4.9/5 from 50K+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Chrome Web Store Verified</span>
                </div>
              </div>

              {/* Enhanced main CTA with Chrome Web Store integration */}
              <div className="relative inline-block">
                {isInstalled ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3 px-8 py-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-lg font-semibold text-green-400">Extension Installed!</span>
                    </div>
                    <Button
                      onClick={() => setShowPermissions(true)}
                      variant="outline"
                      className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Extension
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      onClick={handleInstallExtension}
                      disabled={isInstalling}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isInstalling ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Installing Extension...
                        </>
                      ) : (
                        <>
                          <Chrome className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                          Download Extension
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Verified className="w-4 h-4 text-blue-400" />
                        <span>Chrome Web Store</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Lock className="w-4 h-4 text-green-400" />
                        <span>Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4 text-purple-400" />
                        <span>Free Forever</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Chrome Web Store integration section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 glass-effect">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Chrome className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Available on Chrome Web Store</h3>
                  <p className="text-gray-400 mb-4">
                    Zentra is officially verified and available on the Chrome Web Store. Install with confidence knowing
                    your privacy and security are protected.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span>100K+ Users</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>Verified Publisher</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    onClick={handleInstallExtension}
                    disabled={isInstalling || isInstalled}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    {isInstalled ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Installed
                      </>
                    ) : isInstalling ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Installing...
                      </>
                    ) : (
                      <>
                        <Chrome className="mr-2 h-5 w-5" />
                        Install Now
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 gradient-text-animated">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how Zentra revolutionizes your browsing experience with cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Search",
                  description:
                    "Advanced machine learning algorithms understand context and intent to deliver precise results across multiple platforms simultaneously.",
                  color: "from-purple-600/20 to-blue-600/20",
                  borderColor: "border-purple-500/30",
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Multi-Platform Integration",
                  description:
                    "Search Amazon, eBay, Reddit, YouTube, and 50+ other platforms from a single interface. No more tab switching.",
                  color: "from-blue-600/20 to-cyan-600/20",
                  borderColor: "border-blue-500/30",
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Smart Recommendations",
                  description:
                    "Get personalized suggestions based on your search history, preferences, and trending topics in your areas of interest.",
                  color: "from-cyan-600/20 to-teal-600/20",
                  borderColor: "border-cyan-500/30",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Real-Time Results",
                  description:
                    "Lightning-fast search results with live price comparisons, availability updates, and trending content across platforms.",
                  color: "from-teal-600/20 to-green-600/20",
                  borderColor: "border-teal-500/30",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Privacy Protected",
                  description:
                    "Your searches remain private. We don't track, store, or sell your personal data. Complete anonymity guaranteed.",
                  color: "from-green-600/20 to-emerald-600/20",
                  borderColor: "border-green-500/30",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community Insights",
                  description:
                    "Access crowd-sourced reviews, ratings, and recommendations from millions of users to make informed decisions.",
                  color: "from-emerald-600/20 to-purple-600/20",
                  borderColor: "border-emerald-500/30",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 glass-effect border ${feature.borderColor} hover:scale-105 transition-all duration-300 group cursor-pointer`}
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/30 scroll-animate">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 gradient-text-animated">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started with Zentra in three simple steps and transform your browsing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform -translate-y-1/2 z-0" />

              {[
                {
                  step: "01",
                  title: "Install Extension",
                  description:
                    "Add Zentra to Chrome in seconds. No registration required - start searching immediately after installation.",
                  icon: <Chrome className="w-12 h-12" />,
                  color: "from-purple-600/20 to-blue-600/20",
                },
                {
                  step: "02",
                  title: "Type Your Query",
                  description:
                    "Enter any search term in the Zentra interface. Our AI understands natural language and context.",
                  icon: <Search className="w-12 h-12" />,
                  color: "from-blue-600/20 to-cyan-600/20",
                },
                {
                  step: "03",
                  title: "Get Smart Results",
                  description:
                    "Receive curated results from multiple platforms with prices, ratings, and recommendations in one view.",
                  icon: <Sparkles className="w-12 h-12" />,
                  color: "from-cyan-600/20 to-purple-600/20",
                },
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div
                    className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 glass-effect border border-slate-700/50 text-center group hover:scale-105 transition-all duration-300`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300">
                      <div className="text-white">{step.icon}</div>
                    </div>

                    <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">{step.step}</div>

                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>

                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Workflow Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 gradient-text-animated">
                Complete Workflow
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See exactly how Zentra processes your searches and delivers intelligent results
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  phase: "Input Processing",
                  title: "Smart Query Analysis",
                  description:
                    "Zentra's AI analyzes your search query using natural language processing to understand intent, context, and desired outcome.",
                  steps: [
                    "Natural language processing identifies key terms and intent",
                    "Context analysis determines search category and scope",
                    "Query optimization enhances search accuracy",
                    "Platform selection based on query type and user preferences",
                  ],
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-purple-600/10 to-blue-600/10",
                  borderColor: "border-purple-500/20",
                },
                {
                  phase: "Search Execution",
                  title: "Multi-Platform Search",
                  description:
                    "Simultaneous searches across 50+ platforms including e-commerce, social media, forums, and content sites.",
                  steps: [
                    "Parallel API calls to multiple search engines and platforms",
                    "Real-time data extraction and normalization",
                    "Duplicate detection and content deduplication",
                    "Quality scoring and relevance ranking",
                  ],
                  icon: <Globe className="w-8 h-8" />,
                  color: "from-blue-600/10 to-cyan-600/10",
                  borderColor: "border-blue-500/20",
                },
                {
                  phase: "AI Processing",
                  title: "Intelligent Result Curation",
                  description:
                    "Advanced algorithms analyze, rank, and curate results to present the most relevant and valuable information.",
                  steps: [
                    "Machine learning models score result relevance",
                    "Price comparison and availability checking",
                    "Review sentiment analysis and rating aggregation",
                    "Personalization based on user behavior and preferences",
                  ],
                  icon: <Sparkles className="w-8 h-8" />,
                  color: "from-cyan-600/10 to-teal-600/10",
                  borderColor: "border-cyan-500/20",
                },
                {
                  phase: "Result Delivery",
                  title: "Organized Presentation",
                  description:
                    "Results are organized, formatted, and presented in an intuitive interface with actionable insights.",
                  steps: [
                    "Results grouped by platform and category",
                    "Visual formatting with images, prices, and ratings",
                    "Quick action buttons for direct platform access",
                    "Save and bookmark functionality for future reference",
                  ],
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "from-teal-600/10 to-green-600/10",
                  borderColor: "border-teal-500/20",
                },
              ].map((workflow, index) => (
                <div key={index} className="relative">
                  <div
                    className={`bg-gradient-to-r ${workflow.color} rounded-3xl p-8 glass-effect border ${workflow.borderColor}`}
                  >
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl mb-4">
                          <div className="text-white">{workflow.icon}</div>
                        </div>
                        <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                          {workflow.phase}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-white">{workflow.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{workflow.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {workflow.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Workflow connector */}
                  {index < 3 && (
                    <div className="flex justify-center py-6">
                      <ArrowRight className="w-8 h-8 text-purple-400/50 transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Workflow summary */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl p-8 glass-effect border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 gradient-text-animated">
                  Complete Process Time: Under 3 Seconds
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  From query input to intelligent results delivery, Zentra's entire workflow completes in under 3
                  seconds, providing you with comprehensive, curated information faster than traditional search methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Interactive Demo Section */}
        <section
          id="demo"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/30 scroll-animate"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 gradient-text-animated">
                See Zentra in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch how Zentra transforms your search experience with real-time AI-powered results
              </p>
            </div>

            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold gradient-text-animated">Extension Interface</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Clean, intuitive design that integrates seamlessly with your browser. Access powerful search
                    capabilities without leaving your current page.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">One-click activation from any webpage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Smart autocomplete suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Customizable result preferences</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-4 glass-effect border border-slate-700/50">
                    <img
                      src="/chrome-extension-popup.png"
                      alt="Zentra Chrome Extension Interface"
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-4 glass-effect border border-slate-700/50">
                    <img
                      src="/search-results-page.png"
                      alt="Multi-platform search results"
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-3 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold gradient-text-animated">Smart Results Display</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get comprehensive results from 50+ platforms organized intelligently. Compare prices, read reviews,
                    and make informed decisions instantly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Aggregated ratings and reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Real-time price comparisons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">AI-powered relevance ranking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl p-8 glass-effect border border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text-animated">Try Interactive Demo</h3>
                <p className="text-gray-300">Experience Zentra's search capabilities with our live demo</p>
              </div>

              {/* Demo controls */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  onClick={handlePlayPause}
                  variant="outline"
                  size="sm"
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 text-white"
                >
                  {isAutoPlaying ? "Pause Demo" : "Play Demo"}
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  size="sm"
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 text-white"
                >
                  Restart
                </Button>
                {demoScenarios.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => handleDemoSelect(index)}
                    variant={currentDemo === index ? "default" : "outline"}
                    size="sm"
                    className={
                      currentDemo === index
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                        : "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 text-white"
                    }
                  >
                    Demo {index + 1}
                  </Button>
                ))}
              </div>

              {/* Demo interface mockup */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg px-4 py-2 text-sm text-gray-400">
                      chrome-extension://zentra-search
                    </div>
                  </div>

                  {/* Search interface */}
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                        <Search className="w-5 h-5 text-purple-400" />
                        <div className="flex-1">
                          <div className="text-lg font-mono">
                            {typedText}
                            {isTyping && <span className="animate-pulse">|</span>}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                        >
                          Search
                        </Button>
                      </div>
                    </div>

                    {/* Results */}
                    {showResults && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-white">Search Results</h4>
                          <div className="text-sm text-gray-400">
                            Found {demoScenarios[currentDemo].results.length} results in 0.8s
                          </div>
                        </div>

                        <div className="grid gap-4">
                          {demoScenarios[currentDemo].results.map((result, index) => (
                            <div
                              key={index}
                              className={`bg-gradient-to-r ${result.color} rounded-xl p-4 border ${result.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="px-2 py-1 bg-slate-800/50 rounded text-xs font-medium text-purple-400">
                                      {result.platform}
                                    </div>
                                    <div className="text-sm text-gray-400">{result.rating}</div>
                                  </div>
                                  <h5 className="font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {result.title}
                                  </h5>
                                  <div className="text-xl font-bold text-green-400">{result.price}</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 gradient-text-animated">Before vs After Zentra</h3>
                <p className="text-gray-300">See the dramatic difference in your search workflow</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-gradient-to-br from-red-900/20 to-slate-900/50 rounded-2xl p-6 glass-effect border border-red-500/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 rounded-full border border-red-500/30 mb-4">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 font-semibold">Before Zentra</span>
                    </div>
                    <img
                      src="/cluttered-shopping-tabs.png"
                      alt="Multiple tabs before Zentra"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Open 10+ tabs manually</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Compare prices across sites</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Miss better deals</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Waste 15+ minutes per search</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-gradient-to-br from-green-900/20 to-slate-900/50 rounded-2xl p-6 glass-effect border border-green-500/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-full border border-green-500/30 mb-4">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">With Zentra</span>
                    </div>
                    <img
                      src="/zentra-browser-tab.png"
                      alt="Single tab with Zentra"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>One search, all platforms</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Instant price comparisons</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Never miss the best deals</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Results in under 3 seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 gradient-text-animated">
                What Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who've transformed their browsing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "E-commerce Manager",
                  company: "TechStart Inc.",
                  image: "/professional-woman-diverse.png",
                  rating: 5,
                  text: "Zentra has revolutionized how I research products for our online store. What used to take hours now takes minutes. The AI-powered recommendations are incredibly accurate.",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Digital Marketing Director",
                  company: "Growth Labs",
                  image: "/professional-man.png",
                  rating: 5,
                  text: "As someone who constantly researches market trends, Zentra is indispensable. The multi-platform search saves me countless hours every week. Best Chrome extension I've ever used.",
                },
                {
                  name: "Emily Watson",
                  role: "Content Strategist",
                  company: "Creative Agency",
                  image: "/professional-woman-marketing.png",
                  rating: 5,
                  text: "The privacy protection and speed of Zentra are unmatched. I can research competitor content across platforms without worrying about my data being tracked. Absolutely essential tool.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 glass-effect border border-slate-700/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-purple-400">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative bg-slate-950 border-t border-slate-800/50">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading gradient-text-animated">Zentra</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The AI-powered Chrome extension that revolutionizes your online shopping experience with intelligent
                  product discovery.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-purple-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="text-white font-semibold mb-6">Product</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#demo" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-white font-semibold mb-6">Support</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Bug Reports
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      Feature Requests
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                <p className="text-gray-400 mb-4">Get the latest updates and features delivered to your inbox.</p>
                <div className="space-y-3">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-l-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-r-lg transition-all duration-300 hover:scale-105">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">No spam, unsubscribe anytime.</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>© 2024 Zentra. All rights reserved.</span>
                  <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>All systems operational</span>
                  </div>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
