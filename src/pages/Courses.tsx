import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Users, CheckCircle2, PlayCircle, Award, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "AWS Fundamentals for Beginners",
      description: "Master the basics of Amazon Web Services, including EC2, S3, and IAM. Perfect for those just starting their cloud journey.",
      level: "Beginner",
      duration: "6 weeks",
      students: "500+",
      lessons: 24,
      price: "Free",
      features: [
        "Hands-on labs with real AWS account",
        "Certificate of completion",
        "Lifetime access to course materials",
        "Community support"
      ],
      icon: "☁️",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 2,
      title: "Docker & Containerization Mastery",
      description: "Learn Docker from scratch. Build, deploy, and manage containerized applications with confidence.",
      level: "Intermediate",
      duration: "4 weeks",
      students: "350+",
      lessons: 18,
      price: "Free",
      features: [
        "Practical Docker projects",
        "Multi-stage builds and optimization",
        "Docker Compose deep dive",
        "Best practices and security"
      ],
      icon: "🐳",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      title: "Kubernetes Orchestration Essentials",
      description: "Take your container skills to the next level. Learn Kubernetes architecture, deployments, and scaling.",
      level: "Advanced",
      duration: "8 weeks",
      students: "200+",
      lessons: 32,
      price: "Free",
      features: [
        "Kubernetes cluster setup",
        "Pods, Services, and Deployments",
        "Scaling and load balancing",
        "Real-world project scenarios"
      ],
      icon: "⚙️",
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 4,
      title: "CI/CD Pipelines with GitHub Actions",
      description: "Automate your development workflow. Build robust CI/CD pipelines that test, build, and deploy automatically.",
      level: "Intermediate",
      duration: "3 weeks",
      students: "450+",
      lessons: 15,
      price: "Free",
      features: [
        "GitHub Actions workflows",
        "Automated testing integration",
        "Multi-environment deployments",
        "Pipeline optimization techniques"
      ],
      icon: "🚀",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 5,
      title: "Infrastructure as Code with Terraform",
      description: "Manage your cloud infrastructure with code. Learn Terraform to provision and manage AWS resources efficiently.",
      level: "Intermediate",
      duration: "5 weeks",
      students: "300+",
      lessons: 22,
      price: "Free",
      features: [
        "Terraform basics to advanced",
        "State management",
        "Modules and reusability",
        "Infrastructure best practices"
      ],
      icon: "🏗️",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 6,
      title: "Cloud Security Best Practices",
      description: "Protect your cloud infrastructure. Learn security principles, IAM, encryption, and compliance for cloud environments.",
      level: "Advanced",
      duration: "4 weeks",
      students: "250+",
      lessons: 20,
      price: "Free",
      features: [
        "Security fundamentals",
        "Identity and access management",
        "Encryption and key management",
        "Compliance and auditing"
      ],
      icon: "🔒",
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30"
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: "Foundations",
      description: "Start with AWS Fundamentals and Docker basics"
    },
    {
      step: 2,
      title: "Building Skills",
      description: "Move to CI/CD and Infrastructure as Code"
    },
    {
      step: 3,
      title: "Advanced Topics",
      description: "Master Kubernetes and Cloud Security"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps Courses | Free Learning Paths | cloudwithstephen</title>
        <meta
          name="description"
          content="Free cloud computing and DevOps courses for students. Learn AWS, Docker, Kubernetes, CI/CD, Terraform, and more with hands-on projects."
        />
        <meta
          name="keywords"
          content="cloud computing courses, devops courses, aws training, docker course, kubernetes course, free cloud courses, devops training"
        />
        <link rel="canonical" href="https://www.cloudwithstephen.com/courses" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Student Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Cloud & DevOps
                <span className="text-primary block">Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Structured learning paths designed to help you master cloud computing and DevOps engineering. All courses are free and beginner-friendly.
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 md:px-6 py-12 space-y-16">
          {/* Learning Path */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Recommended Learning Path</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {learningPath.map((path) => (
                <Card key={path.step} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                        {path.step}
                      </div>
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                    </div>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Courses Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Available Courses</h2>
              <Link
                to="/blog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Browse Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className={`group hover:shadow-xl transition-all duration-300 border-2 ${course.borderColor} hover:border-primary/50 overflow-hidden`}
                >
                  <div className={`bg-gradient-to-br ${course.color} p-6`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{course.icon}</div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </div>

                  <CardHeader>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <PlayCircle className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Award className="w-4 h-4" />
                        <span>{course.price}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group/btn" variant="default">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  Ready to Start Your Cloud Journey?
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Join hundreds of students learning cloud computing and DevOps. All courses are free and include hands-on projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/blog">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Our Articles
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Courses;

