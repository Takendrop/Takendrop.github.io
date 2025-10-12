// Project data - EDIT THIS FILE to update your projects
const projectsData = {
    1: {
        title: "push_swap",
        description1: "An algorithmic project written in C, focused on sorting data in a stack using a limited set of operations.",
        description2: "PROJECT OVERVIEW\nThis project involves sorting a stack (a) of integers with the help of an auxiliary stack (b). The challenge is to implement the sorting process efficiently, minimizing the number of operations.\n\nPERMITTED OPERATIONS\n• sa (swap a): Swap the first two elements at the top of stack a\n• sb (swap b): Swap the first two elements at the top of stack b\n• ss: Perform sa and sb simultaneously\n• pa (push a): Take the first element from b and put it at the top of a\n• pb (push b): Take the first element from a and put it at the top of b\n• ra (rotate a): Shift all elements up by one position\n• rb (rotate b): Shift all elements up by one position\n• rr: Perform ra and rb simultaneously\n• rra (reverse rotate a): Shift all elements down by one position\n• rrb (reverse rotate b): Shift all elements down by one position\n• rrr: Perform rra and rrb simultaneously\n\nMY APPROACH\nI used a doubly linked list structure with indexing and binary representation combined with Radix sort algorithm. This method is particularly effective for larger datasets, reducing complexity and the number of moves required.\n\nPERFORMANCE\nScored 84 points. Efficient for large datasets, minimizing operations. Could be optimized further for smaller datasets (100 and 500 elements), but excels in sorting larger numbers with fewer moves.",
        image: "images/projects/push_swap.jpg"
    },
    2: {
        title: "Project Two",
        description1: "First paragraph about your second project. Describe what it is and its main purpose.",
        description2: "Second paragraph with more details after the image. Explain what you learned and the technologies used.",
        image: ""
    },
    3: {
        title: "Project Three",
        description1: "Introduction to your third project. What problem does it solve?",
        description2: "Additional information about project three. Share your experience and challenges you faced.",
        image: ""
    },
    4: {
        title: "Project Four",
        description1: "Overview of your fourth project. What makes it interesting?",
        description2: "More details about what you learned and future improvements you plan to make.",
        image: ""
    }
};